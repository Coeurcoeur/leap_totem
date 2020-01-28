import { Player } from 'video-react'

export class PlayerComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.frame=0;
  }

  render(){
    this.frame++;
    if(this.refs.player && this.frame%15==0){
      this.refs.player.seek(this.refs.player.getState().player.currentTime + Math.round(this.props.lps));
      this.refs.player.play()
    }
    return(
      <div style={{transform:"scale(.5,.5)"}}>
        <Player ref="player">
          <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
        </Player>
      </div>
    )

  }
}
