import Leap from "leapjs"

export class Lps extends React.Component {
  constructor(props){
    super(props);
    let component = this;

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

        let palmPosition = {
          x : 0,
          y : 0,
          z : 0
        };

        palmPosition.x = hand.palmPosition[0];
        // if (hand.palmPosition[0] < calibrage.x[0]){
        //  palmPosition.x = calibrage.x[0];
        // }else if(hand.palmPosition[0] > calibrage.x[1]){
        //  palmPosition.x = calibrage.x[1];
        // }
        // palmPosition.x < 0 ? palmPosition.x = palmPosition.x/Math.abs(calibrage.x[0]) : palmPosition.x = palmPosition.x/calibrage.x[1];

        palmPosition.y = hand.palmPosition[2];
        // if (hand.palmPosition[2] < calibrage.y[0]){
        //  palmPosition.y = calibrage.y[0];
        // }else if(hand.palmPosition[0] > calibrage.y[1]){
        //  palmPosition.y = calibrage.y[1];
        // }
        // palmPosition.y < 0 ? palmPosition.y = palmPosition.y/Math.abs(calibrage.y[0]) : palmPosition.y = palmPosition.y/calibrage.x[1];

        palmPosition.z = hand.palmPosition[1];

        component.setState({
          position : [palmPosition.x,palmPosition.z,palmPosition.y]
        })
      }
    });

  }
  render(){
    return(
      <div>
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
        {this.props.children}
      </div>
    )

  }
}
