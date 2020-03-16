var globalConfig = {
  w:800,
  h:600,
  mode: "AUTO",
  scaleMode: "SHOW_ALL", //SHOW_ALL, EXACT_FIT
  splash: { //The "Loading" page for your game
    loadingScreen: "assets/gui/splash.png", //splash background
    loadingBar: {
      fullBar: "assets/gui/loadingbar.png",
      position: {x:111,y:462}
    }
  },
  fonts: "assets/gui/fonts.css",
  guiConfig: "story/GUI.yaml",
  storySetup: "story/Setup.yaml",
  //as many story text files as you want
  storyText: [
        "story/YourStory.yaml"
    ],
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = globalConfig;
} 
