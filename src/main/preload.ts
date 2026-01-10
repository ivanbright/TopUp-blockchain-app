import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electronAPI', {
    // Window controls
    minimize: () => ipcRenderer.send('window-minimize'),
    maximize: () => ipcRenderer.send('window-maximize'),
    close: () => ipcRenderer.send('window-close'),

    // Auth & Storage
    encryptToken: (token: string) => ipcRenderer.invoke('encrypt-token', token),
    decryptToken: (encrypted: string) => ipcRenderer.invoke('decrypt-token', encrypted),

    // Platform info
    platform: process.platform,

    // Event listeners
    onDeepLink: (callback: (url: string) => void) => {
        ipcRenderer.on('deep-link', (_event, url) => callback(url));
    }
});
