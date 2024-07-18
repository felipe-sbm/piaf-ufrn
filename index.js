const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('pages/index.html');
  win.webContents.on('did-finish-load', () => {
    win.webContents.insertCSS(path.join(__dirname, 'path/to/bootstrap.css'));
  });
}

app.whenReady().then(() => {
  createWindow();
});