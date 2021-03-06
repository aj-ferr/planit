const electron = require('electron')
const DEBUG = require('electron-is-dev')
const path = require('path')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let win

function createWindow() {
    win = new BrowserWindow({
        width: 960,
        height: 600,
        resizable: true,
        frame: false,
        titleBarStyle: 'hidden',
        trafficLightPosition: {x: 25, y: 50}
    })

    BrowserWindow.addDevToolsExtension('/Users/aj/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.8.2_20')

    win.loadURL(DEBUG
        ? 'http://localhost:3000'
        : `file://${path.join(__dirname, '../build/index.html')}`,
    )

    win.on('closed', () => {win = null})
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})