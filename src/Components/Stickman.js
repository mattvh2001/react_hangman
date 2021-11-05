import React, { Component } from 'react';
import state1 from './images/state1.GIF';
import state2 from './images/state2.GIF';
import state3 from './images/state3.GIF';
import state4 from './images/state4.GIF';
import state5 from './images/state5.GIF';
import state6 from './images/state6.GIF';
import state7 from './images/state7.GIF';
import state8 from './images/state8.GIF';
import state9 from './images/state9.GIF';
import state10 from './images/state10.GIF';
import state11 from './images/state11.GIF';

//returns the Stick component which shows the stick character being hanged as the game progresses
class stickman extends Component {
    
    //stores all the states of the hangman image
    static defaultProps = {       
        images: [state1, state2, state3, state4, state5, state6, state7,state8,state9,state10,state11]
      }
    
    render() {
        return (
            <div className="text-center">
            <img width = "300" height = "375" src={this.props.images[this.props.mistake]} alt=""/>
          </div>
        );
    }
}

export default stickman;