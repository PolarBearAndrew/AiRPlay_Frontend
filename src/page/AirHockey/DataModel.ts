// Uncompleted, please do not use directly

interface AirHockeyGameData{
  ballSpeed: number,  //mintargetspeed, maxtargetspeed, (Ball Speed Max 3 1-10)
  ballRadius: number, //targetdiameter, maxdiameterofcircle, (Ball Diameter 3 1-10)
  goalSize: number, // goalsize (Goal Size 3 1-5)
  friction: number, // friction (Friction 3 NONE)
  buttonSpeed: number, // maxspeedofexpansion, maxholdtimeofcircle (Circle Expansion Speed 3 1-10)
  // capture: number,   // (Recapture background)
  // startStop: number, // (START/STOP bool)
  // boudaryelacity
}

class DataModel{
  airHockeyGameData: AirHockeyGameData
  subscribers:Array<()=>void> = [];

  subscribeToUpdate = (callback:()=>void)=>{
    this.subscribers.push(callback);
  }

  updateSubscribers = () =>{
    for(let sub of this.subscribers){
      sub();
    }  
  }

  constructor(){
    this.airHockeyGameData = {
      ballSpeed: 3,
      ballRadius: 3,
      goalSize: 5,
      friction: 3,
      buttonSpeed: 3,
    }
  }

  setBallSpeed = (val: number)=>{
    this.airHockeyGameData.ballSpeed = val;
  }

  setBallRadius = (val: number)=>{
    this.airHockeyGameData.ballRadius = val;
  }

  setGoalSize = (val: number)=>{
    this.airHockeyGameData.goalSize = val;
  }

  setFriction = (val: number)=>{
    this.airHockeyGameData.friction = val;
  }

  setButtonSpeed = (val: number)=>{
    this.airHockeyGameData.buttonSpeed = val;
    console.log("Data model setButtonSpeed: "+ this.airHockeyGameData.buttonSpeed)
    this.updateSubscribers();
  }

  setCapture = () =>{

  }

  setStartStop = () =>{

  }

  getAirHockeyGameDataCopy = ():AirHockeyGameData => {
    return { ...this.airHockeyGameData }
  }
}

let theDataModel:DataModel;

const getDataModel = ():DataModel=>{
  if(!theDataModel){
    theDataModel = new DataModel();
  }
  return theDataModel;
}

export default getDataModel;