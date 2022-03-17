import {server, w3cwebsocket as W3CWebsocket} from 'websocket';
import errorToast from '../../components/Toast'
interface AirHockeyGameData{
  ballSpeed: number,  //mintargetspeed, maxtargetspeed, (Ball Speed Max 3 1-10)
  ballRadius: number, //targetdiameter, maxdiameterofcircle, (Ball Diameter 3 1-10)
  goalSize: number, // goalsize (Goal Size 3 1-5)
  friction: number, // friction (Friction 3 NONE)
  buttonSpeed: number, // maxspeedofexpansion, maxholdtimeofcircle (Circle Expansion Speed 3 1-10)
  // capture: number,   // (Recapture background)
  // startStop: number, // (START/STOP bool)
  // boundaryelasticity
}

const echoClient = new W3CWebsocket('ws://localhost:8080/echo');
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
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("BALLSPEED");
      echoClient.send(this.airHockeyGameData.ballSpeed);
    }else{
      errorToast("Server Not Connected","Pleas check server");
    }
    this.updateSubscribers();
  }

  setBallRadius = (val: number)=>{
    this.airHockeyGameData.ballRadius = val;
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("BALLRADIUS");
      echoClient.send(this.airHockeyGameData.ballRadius);
    }else{
      errorToast("Server Not Connected","Pleas check server");
    }
    this.updateSubscribers();
  }

  setGoalSize = (val: number)=>{
    this.airHockeyGameData.goalSize = val;
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("GOALSIZE");
      echoClient.send(this.airHockeyGameData.goalSize);
    }else{
      errorToast("Server Not Connected","Pleas check server");
    }
    this.updateSubscribers();
  }

  setFriction = (val: number)=>{
    this.airHockeyGameData.friction = val;
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("FRICTION");
      echoClient.send(this.airHockeyGameData.friction);
    }else{
      errorToast("Server Not Connected","Pleas check server");
    }
    this.updateSubscribers();
  }

  setButtonSpeed = (val: number)=>{
    this.airHockeyGameData.buttonSpeed = val;
    // console.log("Data model setButtonSpeed: "+ this.airHockeyGameData.buttonSpeed)
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("BUTTONSPEED");
      echoClient.send(this.airHockeyGameData.buttonSpeed);
    }else{
      errorToast("Server Not Connected","Pleas check server");
    }
    this.updateSubscribers();
  }

  setCapture = () =>{
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("CAPTURE");
      echoClient.send(0);
    }else{
      alert("Server Not Connected");
    }
  }

  setStartStop = () =>{
    if(echoClient.readyState === echoClient.OPEN){
      echoClient.send("STARTSTOP");
      echoClient.send(0);
    }else{
      errorToast("Server Not Connected","Pleas check server");
    }
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