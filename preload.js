const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  handleFileUpload: (callback) => ipcRenderer.on('file-uploaded', callback)
});