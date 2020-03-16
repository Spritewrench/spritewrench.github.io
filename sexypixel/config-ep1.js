var globalConfig = {
  w:1920,
  h:1080,
  mode: "AUTO",
  scaleMode: "SHOW_ALL", //SHOW_ALL, EXACT_FIT
  splash: { //The "Loading" page for your game
    loadingScreen: "assets/gui/splash.png", //splash background
    loadingBar: {
      fullBar: "assets/gui/loadingbar.png",
      position: {x:650,y:924}
    }
  },
  logChoices: true,
  fonts: "assets/gui/fonts.css",
  guiConfig: "Story/GUI-ep1.yaml",
  storySetup: "Story/Setup-ep1.yaml",
  //as many story text files as you want
  storyText: [
        "Story/episode1.yaml"
    ],
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = globalConfig;
} 
