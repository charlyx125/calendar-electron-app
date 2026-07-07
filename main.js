// main.js — Electron's main process. Its job is to create the app window.
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  // macOS: re-open a window when the app is activated and none are open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit the app once all windows are closed (except on macOS).
// On a Mac, an app can keep running even with no windows open (ie. Spotify still in the menu bar with nothing visible)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
