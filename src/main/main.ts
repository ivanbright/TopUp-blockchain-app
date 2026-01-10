import { app, BrowserWindow, protocol, shell, ipcMain, safeStorage } from 'electron';
import path from 'path';
import { createMainWindow } from './windowManager';
import { createTray } from './trayManager';

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
    app.quit();
} else {
    app.on('second-instance', () => {
        const mainWindow = BrowserWindow.getAllWindows()[0];
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });

    // Register topup:// protocol
    if (process.defaultApp) {
        if (process.argv.length >= 2) {
            app.setAsDefaultProtocolClient('topup', process.execPath, [path.resolve(process.argv[1])]);
        }
    } else {
        app.setAsDefaultProtocolClient('topup');
    }

    app.whenReady().then(() => {
        const mainWindow = createMainWindow();
        createTray(mainWindow);

        app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
        });
    });
}

// IPC Handlers
ipcMain.on('window-minimize', () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.minimize();
});

ipcMain.on('window-close', () => {
    const win = BrowserWindow.getFocusedWindow();
    if (win) win.close();
});

ipcMain.handle('encrypt-token', (_event, token: string) => {
    if (safeStorage.isEncryptionAvailable()) {
        const encrypted = safeStorage.encryptString(token);
        return encrypted.toString('hex');
    }
    return token;
});

ipcMain.handle('decrypt-token', (_event, encryptedHex: string) => {
    if (safeStorage.isEncryptionAvailable()) {
        try {
            const decrypted = safeStorage.decryptString(Buffer.from(encryptedHex, 'hex'));
            return decrypted;
        } catch (e) {
            return null;
        }
    }
    return encryptedHex;
});

// Handle deep links
app.on('open-url', (event, url) => {
    event.preventDefault();
    const mainWindow = BrowserWindow.getAllWindows()[0];
    if (mainWindow) {
        mainWindow.webContents.send('deep-link', url);
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();
    }
});

// Windows/Linux deep link handler
app.on('second-instance', (event, commandLine) => {
    const mainWindow = BrowserWindow.getAllWindows()[0];
    if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore();
        mainWindow.focus();

        // Protocol handler for Windows
        const url = commandLine.pop();
        if (url?.startsWith('topup://')) {
            mainWindow.webContents.send('deep-link', url);
        }
    }
});
