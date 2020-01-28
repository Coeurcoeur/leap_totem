import Leap from "leapjs"
import {PlayerComponent} from './PlayerComponent'
import {Sequence} from './Sequence'

export class Lps extends React.Component {
  constructor(props){
    super(props);
    let component = this;

    let calibrage = {
        x : [-100,100],
        y : [-100,100],
        z : [50,320]
    }

    this.state = {
      position : {x:0,y:0,z:0},
      status : 'no-hand'
    }
    /*
    var controller = new Leap.Controller()
controller.on("frame", function(frame) {
    console.log(frame.hands.length)
});*/

    Leap.loop({
      frame: function(frame){
        if(frame.hands[0]!=undefined){
          const hand = frame.hands[0];
          let palmPosition = {
            x : 0,
            y : 0,
            z : 0
          };
          palmPosition.x = hand.palmPosition[0];
          if (hand.palmPosition[0] < calibrage.x[0]){
           palmPosition.x = calibrage.x[0];
          }else if(hand.palmPosition[0] > calibrage.x[1]){
           palmPosition.x = calibrage.x[1];
          }
          palmPosition.x = palmPosition.x < 0 ? palmPosition.x/Math.abs(calibrage.x[0]) : palmPosition.x/calibrage.x[1];


          palmPosition.y = hand.palmPosition[2];
           if (hand.palmPosition[2] < calibrage.y[0]){
            palmPosition.y = calibrage.y[0];
          }else if(hand.palmPosition[2] > calibrage.y[1]){
            palmPosition.y = calibrage.y[1];
          }
          palmPosition.y = palmPosition.y < 0 ? palmPosition.y/Math.abs(calibrage.y[0]) : palmPosition.y/calibrage.y[1];


          palmPosition.z = hand.palmPosition[1];
           if (hand.palmPosition[1] < calibrage.z[0]){
            palmPosition.z = calibrage.z[0];
          }else if(hand.palmPosition[1] > calibrage.z[1]){
            palmPosition.z = calibrage.z[1];
          }
          palmPosition.z = palmPosition.z < 0 ? palmPosition.z/Math.abs(calibrage.z[0]) : palmPosition.z/calibrage.z[1];

          component.setState({
            position : palmPosition,
            status : 'hand'
          })
        }else{
          component.setState({
            position : {x:0,y:0,z:0},
            status : 'no-hand'
          })
        }
      }
    });

  }
  render(){
    let windowWidth = window.innerWidth/2;
    let windowHeight = window.innerHeight/2;
    return(
      <div>
        {/* <div style={{
          position:"absolute",
          left:this.state.position.x*windowWidth+windowWidth,
          top:this.state.position.y*windowHeight+windowHeight,
          transform:"scale(" + this.state.position.z + "," + this.state.position.z + ")",
          width:"100px",
          height:"100px",
          backgroundColor:"#000",
          transformOrigin: 'center'
        }}>
        </div> */}
        <Sequence lps={this.state}/>
      </div>
    )
  }
}

//<PlayerComponent lps={this.state.position.x}/>
