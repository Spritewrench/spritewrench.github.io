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
  guiConfig: "story/GUI-ep1.yaml",
  storySetup: "story/Setup-ep1.yaml",
  //as many story text files as you want
  storyText: [
        "story/episode1.yaml"
    ],
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = globalConfig;
} 
