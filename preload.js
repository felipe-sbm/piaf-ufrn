const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  handleFileUpload: (callback) => ipcRenderer.on("file-uploaded", callback), // Recebe o arquivo enviado pelo processo principal
  handleFileRead: () => ipcRenderer.invoke("dialog:openFile"), // Abre a janela de diálogo para ler um arquivo
  handleFIleSave: () => ipcRenderer.invoke("dialog:saveFile"), // Abre a janela de diálogo para salvar um arquivo
});
