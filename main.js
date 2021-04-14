const {
    app,
    BrowserWindow
} = require('electron')
const isDev = require('electron-is-dev')

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        webPreferences: {
            nodeIntegration: true
        }
    })
    let url = isDev ? 'http://localhost:3000/' : 'mockurl'
    mainWindow.loadURL(url)
})