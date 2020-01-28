import Leap from "leapjs";

export class Lps extends React.Component {
  constructor(props){

    super(props);
    let component = this;

    let calibrage = {
        x : [-150,150],
        y : [-150,150],
        z : [-150,150]
    }

    this.state = {
      position : [0,0,0]
    }

    Leap.loop({
      // hand callbacks are run once for each hand in the frame
      hand: function(hand){
        component.setState({
          position : hand.palmPosition
        });
      }
    });

  }
  render(){
    return(
      <div style={{
        position:"absolute",
        left:(this.state.position[0]+500),
        top:(this.state.position[1]+500),
        width:"100px",
        height:"100px",
        backgroundColor:"#000"
      }}>
      </div>
    )

  }
}
