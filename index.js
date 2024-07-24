const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      // enableRemoteModule: false, // Não é mais necessário nas versões mais recentes do Electron
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

ipcMain.handle("dialog:openFile", async () => {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties: ["openFile"],
    filters: [{ name: "Planilhas", extensions: ["xlsx", "xls"] }],
  });
  if (canceled) {
    return;
  } else {
    return filePaths[0];
  }
});

ipcMain.handle("dialog:saveFile", async () => {
  const { canceled, filePath } = await dialog.showSaveDialog({
    filters: [{ name: "Planilhas", extensions: ["xlsx"] }],
  });
  if (canceled) {
    return;
  } else {
    return filePath;
  }
});
