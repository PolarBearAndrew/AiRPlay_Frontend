// Uncompleted, please do not use directly

interface AirHockeyGameData{
  ballSpeed: number,  //mintargetspeed, maxtargetspeed
  ballRadius: number, //targetdiameter, maxdiameterofcircle
  goalSize: number, // goalsize
  friction: number, // friction
  buttonSpeed: number, // maxspeedofexpansion, maxholdtimeofcircle
  capture: number,
  startStop: number,
  // boudaryelacity
}

class DataModel{
  constructor(){

  }
}

let theDataModel:DataModel;

const getDataModel = ()=>{
  if(!theDataModel){
    theDataModel = new DataModel();
  }
}

export default getDataModel;