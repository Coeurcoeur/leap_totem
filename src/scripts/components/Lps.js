import Leap from "leapjs"
// import '~video-react/dist/video-react.css'
import { Player } from 'video-react'

export class Lps extends React.Component {
  constructor(props){

    super(props);
    let component = this;
    this.changeCurrentTime = this.changeCurrentTime.bind(this);

    let calibrage = {
        x : [-100,100],
        z : [-100,200],
        y : [-100,100]
    }

    this.state = {
      position : [0,0,0]
    }

    Leap.loop({
      // hand callbacks are run once for each hand in the frame
      hand: function(hand){
        // if (hand.palmPosition[0] < calibrage.x[0]){
        //   hand.palmPosition[0] = calibrage.x[0]
        // }else if(hand.palmPosition[0] > calibrage.x[1]){
        //   hand.palmPosition[0] = calibrage.x[1]
        // }
        // if(hand.palmPosition[1] < calibrage.z[0]){
        //   hand.palmPosition[1] = calibrage.z[0]
        // }else if(hand.palmPosition[1] > calibrage.z[1]){
        //   hand.palmPosition[1] = calibrage.z[1]
        // }
        // if(hand.palmPosition[2] < calibrage.y[0]){
        //   hand.palmPosition[2] = calibrage.y[0]
        // }else if(hand.palmPosition[0] > calibrage.y[1]){
        //   hand.palmPosition[2] = calibrage.y[1]
        // }
        component.setState({
          position : hand.palmPosition
        })

        console.log(hand.palmPosition)
      }
    });

  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
      console.log(player.currentTime)
    };
  }

  render(){
    
    console.log(player.currentTime); // print current time
    return(
      <div>
        <Player ref={player => {this.player = player;}}>
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        <div style={{
          position:"absolute",
          left:(this.state.position[0]+500),
          top:(this.state.position[2]+250),
          transform:"scale(" + this.state.position[1]/600 + "," + this.state.position[1]/600 + ")",
          width:"100px",
          height:"100px",
          backgroundColor:"#000"
        }}>
        </div>
      </div>
    )

  }
}
