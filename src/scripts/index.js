//vendors
import ReactDOM from 'react-dom'
import {Lps} from './components/Lps'
import {PlayerComponent} from './components/PlayerComponent'

/*
this.changeCurrentTime = this.changeCurrentTime.bind(this);
changeCurrentTime(seconds) {
  this.refs.player.seek(this.refs.player.currentTime+ seconds);
}

 ref="player"
*/

ReactDOM.render((
  <div id="page-content">
    <Lps>
      <PlayerComponent/>
    </Lps>
  </div>
), document.getElementById('page'));
