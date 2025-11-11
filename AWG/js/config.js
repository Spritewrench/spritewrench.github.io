const version = "0.0.1a(DEMO)" //next 0.0.1bk
const dataPersist = false 


const startingBGVol = 0
const startingSFXVol = 0

const sceneCount = 14

//sound volume
if (localStorage.getItem("bgVol") === null) {
localStorage.setItem("bgVol",startingBGVol) 

//this.game.state.start('chat');
} 
if (localStorage.getItem("sfxVol") === null) {
localStorage.setItem("sfxVol",startingSFXVol) 
//this.game.state.start('chat');

} 


