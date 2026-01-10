export interface IElectronAPI {
    minimize: () => void;
    maximize: () => void;
    close: () => void;
    encryptToken: (token: string) => Promise<string>;
    decryptToken: (encrypted: string) => Promise<string | null>;
    platform: string;
    onDeepLink: (callback: (url: string) => void) => void;
}

declare global {
    interface Window {
        electronAPI: IElectronAPI;
    }
}
