const { app, BrowserWindow } = require("electron");
const { exec } = require("child_process");
const path = require("path");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL("http://localhost:5000");

  mainWindow.on("closed", function () {
    mainWindow = null;
  });
}

app.on("ready", () => {
  // Inicia o servidor Flask
  const flaskProcess = exec("python app.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao iniciar o servidor Flask: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });

  // Cria a janela do Electron
  createWindow();

  // Fecha o servidor Flask quando o aplicativo Electron é fechado
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      flaskProcess.kill();
      app.quit();
    }
  });

  app.on("activate", () => {
    if (mainWindow === null) {
      createWindow();
    }
  });
});
