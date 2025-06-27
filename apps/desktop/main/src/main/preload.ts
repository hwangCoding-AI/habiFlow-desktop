// apps/desktop/main/preload.ts
import { contextBridge, ipcRenderer } from "electron";

// expose a limited API to the renderer
contextBridge.exposeInMainWorld("api", {
  ping: () => ipcRenderer.invoke("ping"),
  onMessage: (callback: (msg: string) => void) => {
    ipcRenderer.on("message", (_event, msg: string) => callback(msg));
  },
});
