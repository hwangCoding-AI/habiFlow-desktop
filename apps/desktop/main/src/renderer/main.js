import { app, BrowserWindow } from "electron";
import * as path from "path";
let mainWindow = null;
async function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: false,
            contextIsolation: true,
        },
    });
    if (process.env.NODE_ENV === "development") {
        // 개발 모드: Vite dev 서버 URL 로드
        await mainWindow.loadURL("http://localhost:3000");
        mainWindow.webContents.openDevTools();
    }
    else {
        // 프로덕션: 빌드된 renderer index.html 로드
        await mainWindow.loadFile(path.join(__dirname, "../renderer/index.html"));
    }
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin")
        app.quit();
});
app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0)
        createWindow();
});
