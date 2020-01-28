//vendors
import ReactDOM from 'react-dom'
import {Lps} from './components/Lps'

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
    </Lps>
  </div>
), document.getElementById('page'));
