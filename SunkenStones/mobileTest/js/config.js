const version = "1.1.0c(mobile)" //current 1.1.0
const dataPersist = true// set to true in 1.0 and after

const debug = false;
const onboardingDebug = false; //false in production

const quickStart = true//false in production

const quickStartCrew = "64-47-37-60-80-81"//"10-27-8-16-80-81"
const quickStartCaptain = 5
const quickLevel = false//false in production

const monBaseCount = 1
const monPoolValue = 25;//50
const monEmergecut = 3
const monscaleNum = 3

const baseSOSCOunt = 3



const monTypeCount = 9;

const tickerSpeedbase = 20;
const tickerSpeedMin = 6;

const chestSpawnBreak = 2

const uncommonChestBreak = 5



const dipVal = 30 



const attackTimerBase = 125
const actionTimerBase = 100
const diffBase = 15
const turnWaitBase = 50
const turnCounterBase = 100;

const speechTimerBase = 8000
const quickspeechTimerBase = 5000

const chatTimerBase = 25;

const startingBombCount = 2 // prod is 2

const startingBGVol = 5
const startingSFXVol = 5


const rerollBase = 3

const rank = 1;
const renownGrowth = 5;

const isMultiplayer = false;

const ultTimer = 75;

const highlightTint = "0xA30001"//"0xff69b4"

const boardWidth = 5//5
const boardHeight = 5//7

const bossEmegrgePoint = 10// should be 10

const luckEmegrgePoint = 8 // should be 8

const glassBosses = false // should be false in prod

const newMonLimit = 4 // 4

const curseLimit = 1300
const curseChunk = 100

const captainCount = 6;

const unlockEverything = false//false in production

const zoneLimit = 3 // 3 in production

const largeThresh = 3

const popUpDetailTimer = 400

const nomoreCrewUnlockable = true//true in production - hides deprecated gold bag


const disableLoop = false; // no longer used - deprecated
const baseSaltReq=  2 // deprecated
const crewCount = 28; // no longer used - deprecated 
const rarenChestBreak = 10 // deprecated
const upgradeAvailable = true//deprecated

//sound volume
if (localStorage.getItem("bgVol") === null) {
localStorage.setItem("bgVol",startingBGVol) 

//this.game.state.start('chat');
} 
if (localStorage.getItem("sfxVol") === null) {
localStorage.setItem("sfxVol",startingSFXVol) 
//this.game.state.start('chat');

} 





// disable for production
//localStorage.setItem("intro",14);

