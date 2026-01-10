import { BrowserWindow, app } from 'electron';
import path from 'path';

export const createMainWindow = (): BrowserWindow => {
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        resizable: true,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true,
        },
        backgroundColor: '#0F172A',
    });

    if (app.isPackaged) {
        mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
    } else {
        mainWindow.loadURL('http://localhost:5173');
        // mainWindow.webContents.openDevTools();
    }

    // Handle close to minimize to tray
    mainWindow.on('close', (event) => {
        if (!(app as any).isQuitting) {
            event.preventDefault();
            mainWindow.hide();
        }
        return false;
    });

    return mainWindow;
};
