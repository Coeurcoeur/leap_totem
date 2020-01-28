import { Player } from 'video-react'

export class PlayerComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    // this.seek = this.seek.bind(this);
  }

  handleStateChange(state) {
    // copy player state to this component's state
    this.setState({
      player: state
    });
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
      console.log(player)
    };
  }
  
  render(){
    // console.log(player)
    return(
      <div>
        <Player 
          ref={player => {
            this.player = player;
          }}
        >
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
        <button onClick={this.changeCurrentTime(10)}>
          currentTime += 10
        </button>
      </div>
    )

  }
}
