const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 666,
    height: 888,
    webPreferences: {
      nodeIntegration: false,  // Use this setting for security.
    }
  });

  // Load the web app URL.
  win.loadURL('https://rncoursefeng37.expo.app/');

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
