import React from 'react';

import '../styles/sequences.css';
import {sequence01} from '../sequences/01.js';

export class Sequence extends React.Component {
  constructor(props){
    super(props);
    this.images = [];
    for(let i=0;i<14;i++){
      this.images.push(React.createRef());
    }
    this.currentFrame=0;
    this.control = 'no-hand';
    this.play=this.play.bind(this);
    this.seek=this.seek.bind(this);
    this.interval = null;
    this.play();
  }

  play(){
    const component = this;
    this.interval = setInterval(function(){
      let next = component.currentFrame +1;
      if(next>sequence01.files.length-1){
        next=0;
      }
      if(component.control == 'no-hand'){
        component.currentFrame=next;
      }
      component.setState({
        test:'playing'
      })
    },100);
  }
  seek(state){
    let next = this.currentFrame +Math.round(state.position.x*10);
    if(next>sequence01.files.length-1){
      next=sequence01.files.length-1;
    }else if(next<0){
      next=0;
    }
    this.currentFrame=next;
    this.control = state.status;
  }

  render(){
    const component = this;
    this.seek(this.props.lps);
    return(
      <div className="sequence">
        {sequence01.files.map(function(image,index){
          return(<img key={index} style={{display : (component.currentFrame == index ? "block" : "none")}} src={sequence01.folder+image.replace('./','/')}/>);
        })}
      </div>
    );


  };
}
