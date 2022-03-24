export enum clockState{
  isRunning,
  isUnstart,
  isPause
}

class ClockDataModel{
  gameStartTime:Date;
  gameTimeWhenPause:Date;
  hasPausedTime: number;
  state:clockState;

  constructor(){
    this.gameStartTime = new Date();
    this.gameTimeWhenPause = new Date();
    this.state = clockState.isUnstart;
    this.hasPausedTime = 0;
  }

  start(){
    this.gameStartTime = new Date();
    this.state = clockState.isRunning;
  }

  pause(){
    this.gameTimeWhenPause = new Date();
    this.state = clockState.isPause;
  }

  resume(){
    this.hasPausedTime += new Date().getSeconds() - this.gameTimeWhenPause.getSeconds();
    this.state = clockState.isRunning;
  }

  getOffSet(){

    console.log(this.gameStartTime)
    console.log(this.gameTimeWhenPause)
    const offset = new Date();
    if(this.state === clockState.isRunning){
      offset.setSeconds(offset.getSeconds() + offset.getSeconds() - this.gameStartTime.getSeconds() - this.hasPausedTime)
    }else if(this.state === clockState.isPause){
      offset.setSeconds(offset.getSeconds() + this.gameTimeWhenPause.getSeconds() - this.gameStartTime.getSeconds() - this.hasPausedTime)
    }
    return offset;
  }
}

let theDataModel: ClockDataModel;

export const getClockDataModel = (): ClockDataModel => {
  if (!theDataModel) {
    theDataModel = new ClockDataModel();
  }
  return theDataModel;
};

