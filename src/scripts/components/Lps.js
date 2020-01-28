import Leap from "leapjs";

export class Lps extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      position : [0,0,0]
    }
    let component = this;
    Leap.loop({
      // hand callbacks are run once for each hand in the frame
      hand: function(hand){
        component.setState({
          position : hand.palmPosition
        });
      }
    });

    console.log("coucou")
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
