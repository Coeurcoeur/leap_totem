//vendors
import ReactDOM from 'react-dom';
import {Lps} from './components/Lps.js';
import { Player } from 'video-react'
//CSS
/*
require('../css/lato.css');
*/


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
      <Player>
        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
      </Player>
    </Lps>
  </div>
), document.getElementById('page'));
