import React, { Component } from 'react';
import './Keyboard.css'

//returns the keyboard of buttons through which the user makes guesses
class Keyboard extends Component {
    
    render() {

        let buttons = "abcdefghijklmnopqrstuvwxyz".split("").map(letter => {
          
            return (
              <button
              class='keyboardButtons'

              key={letter}
              value={letter}
              onClick={this.props.handleGuess}
              disabled={this.props.guessed.has(letter)}
              >
                {letter.toUpperCase()}
              </button>);
            }
          );
        
        let renderedButtons;
          if(!(this.props.gameOver) && !(this.props.isWinner)){
            renderedButtons = buttons;
          }else{
            if (this.props.isWinner){
            renderedButtons = (<div>
            <h1 className = "winmsg">You Won!</h1> 
            
            </div>)
            }
            else{
              renderedButtons = (<h1 className = "losemsg">You Lost!</h1>)
            }
          }
        return (
            <div>
              <div>
                <p className = "guessingWord">
                  {this.props.guessedWord()}
                </p>
              </div>
            
              <div>
                  {renderedButtons}
              </div>
            </div>
        );
    }
}
export default Keyboard;