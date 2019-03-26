// console.log("started....");
const electron=require("electron");
const app=require("electron").app;
const BrowserWindow=require("electron").BrowserWindow;
var notify=require("electron").notify
var Stopwatch = require("node-stopwatch").Stopwatch;
const { dialog } = require('electron')
let win;
function createWindow(){
    win=new BrowserWindow({show:false,hasShadow:true,frame:false,maxHeight:800,maxWidth:800,resizable:false,minHeight:800,minWidth:800,webPreferences:{nodeIntegration:false}
    ,);
    var stopwatch = Stopwatch.create();
    stopwatch.start();
    win.loadURL("https://www.amazon.com");
    win.once('ready-to-show',()=>{
        win.show();
        var elapsed=stopwatch.elapsed.seconds;
        const options={
            title:"Site Benchmark",
            detail:"Time taken to load the site : "+elapsed,
        }
        const response = dialog.showMessageBox(null,options);
    })   
    stopwatch.stop();
    win.on("close",()=>{
        win=null;   
    })
}
app.on('ready',createWindow)
