const { app, BrowserWindow } = require('electron')
const steamworks = require('steamworks.js')

//app.disableHardwareAcceleration()
// Enable hardware acceleration
app.commandLine.appendSwitch('force_high_performance_gpu');

  
var path = require('path')
//---------------------------------------------
const ipc = require("electron").ipcMain;
//---------------------------------------------


function createWindow() {
    const mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        icon: path.join(__dirname, 'assets/icons/png/communityIcon.jpg'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            devTools: false            
        }
    })

    // will be true when opened from steam big picture
    if (process.env.SteamTenfoot) {
        mainWindow.setFullScreen(true)
    } else {
        //mainWindow.maximize()
        mainWindow.setFullScreen(true)
    }
    mainWindow.setMenuBarVisibility(false);
    mainWindow.loadFile('index.html')
    //mainWindow.webContents.openDevTools();

    //--------------------------------------------
    const ipc = require("electron").ipcMain;
    //--------------------------------------------

    //--------------------------------------------
    ipc.on("toggle-maximize-window", function(event) {
        console.log(mainWindow.isFullScreen())
        if(mainWindow.isFullScreen()) {
            mainWindow.setFullScreen(false)
        } else {
            mainWindow.setFullScreen(true)
        }
    });

    ipc.on("close-window", function(event) {
        mainWindow.close()
    });  
    
    ipc.on('openLinkPlease', () => {
        require('electron').shell.openExternal('https://store.steampowered.com/app/2601810/Sunken_Stones/');
    }) 
    
    ipc.on('openInsta', () => {
        require('electron').shell.openExternal('https://www.instagram.com/spritewrench/');
    }) 
    
    ipc.on('openThreads', () => {
        require('electron').shell.openExternal('https://www.threads.net/@spritewrench');
    }) 
    ipc.on('openSteamCommunity', () => {
        require('electron').shell.openExternal('https://steamcommunity.com/app/2601810');
    })         
    ipc.on('openDiscord', () => {
        require('electron').shell.openExternal('https://discord.gg/aspekrSqyC');
    })     
    //--------------------------------------------
    

}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

steamworks.electronEnableSteamOverlay()
