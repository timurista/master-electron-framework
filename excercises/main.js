const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow = null;

// basic window
createWindow = () => {
  mainWindow = new BrowserWindow();
  mainWindow.loadURL(path.join('file://', __dirname, '/index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', () => {
  createWindow();
})
