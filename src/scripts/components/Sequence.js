import React from 'react';

import '../styles/sequences.css';

import sequence_01_000000 from '../sequences/01/image-000000.jpg';
import sequence_01_000001 from '../sequences/01/image-000001.jpg';
import sequence_01_000002 from '../sequences/01/image-000002.jpg';
import sequence_01_000003 from '../sequences/01/image-000003.jpg';
import sequence_01_000004 from '../sequences/01/image-000004.jpg';
import sequence_01_000005 from '../sequences/01/image-000005.jpg';
import sequence_01_000006 from '../sequences/01/image-000006.jpg';
import sequence_01_000007 from '../sequences/01/image-000007.jpg';
import sequence_01_000008 from '../sequences/01/image-000008.jpg';
import sequence_01_000009 from '../sequences/01/image-000009.jpg';
import sequence_01_000010 from '../sequences/01/image-000010.jpg';
import sequence_01_000011 from '../sequences/01/image-000011.jpg';
import sequence_01_000012 from '../sequences/01/image-000012.jpg';
import sequence_01_000013 from '../sequences/01/image-000013.jpg';


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
      if(next>13){
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
    if(next>13){
      next=13;
    }else if(next<0){
      next=0;
    }
    this.currentFrame=next;
    this.control = state.status;
  }

  render(){
    this.seek(this.props.lps);
    return(
      <div className="sequence">
        <img style={{display : (this.currentFrame  == 0 ? "block" : "none")}} ref={this.images[0]} src={sequence_01_000000}/>
        <img style={{display : (this.currentFrame  == 1 ? "block" : "none")}}  ref={this.images[1]} src={sequence_01_000001}/>
        <img style={{display : (this.currentFrame  == 2 ? "block" : "none")}}  ref={this.images[2]} src={sequence_01_000002}/>
        <img style={{display : (this.currentFrame  == 3 ? "block" : "none")}}  ref={this.images[3]} src={sequence_01_000003}/>
        <img style={{display : (this.currentFrame  == 4 ? "block" : "none")}}  ref={this.images[4]} src={sequence_01_000004}/>
        <img style={{display : (this.currentFrame  == 5 ? "block" : "none")}}  ref={this.images[5]} src={sequence_01_000005}/>
        <img style={{display : (this.currentFrame  == 6 ? "block" : "none")}}  ref={this.images[6]} src={sequence_01_000006}/>
        <img style={{display : (this.currentFrame  == 7 ? "block" : "none")}}  ref={this.images[7]} src={sequence_01_000007}/>
        <img style={{display : (this.currentFrame  == 8 ? "block" : "none")}}  ref={this.images[8]} src={sequence_01_000008}/>
        <img style={{display : (this.currentFrame  == 9 ? "block" : "none")}}  ref={this.images[9]} src={sequence_01_000009}/>
        <img style={{display : (this.currentFrame  == 10 ? "block" : "none")}}  ref={this.images[10]} src={sequence_01_000010}/>
        <img style={{display : (this.currentFrame  == 11 ? "block" : "none")}}  ref={this.images[11]} src={sequence_01_000011}/>
        <img style={{display : (this.currentFrame  == 12 ? "block" : "none")}}  ref={this.images[12]} src={sequence_01_000012}/>
        <img style={{display : (this.currentFrame  == 13 ? "block" : "none")}}  ref={this.images[13]} src={sequence_01_000013}/>
      </div>
    );


  };
}
