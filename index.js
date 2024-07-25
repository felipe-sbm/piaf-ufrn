const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1360,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // Carrega o arquivo preload.js
    },
  });

  win.loadURL(`file://${__dirname}/pages/index.html`); // Carrega o arquivo HTML
  win.webContents.on("did-finish-load", () => {
    win.webContents.insertCSS(path.join(__dirname, "global.css")); // Insere o CSS (NÃO ESTÁ FUNCIONANDO!)
  });
}

app.whenReady().then(() => {
  createWindow(); // Cria a janela
});