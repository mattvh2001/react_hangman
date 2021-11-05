import React, { Component } from 'react';
import './help.css';
//Returns a help component which tells the player how to play the game
class Help extends Component {
    render() {
        return (
            <div className="helpBackground">
            <div className="helpContainer">
                <div className="titleCloseBtn">
                <button
                    onClick={() => {
                    this.props.setStateOfModal(false);//closes the modal component
                    }}
                >
                X
            </button>
            </div>
        <div className="title">
          <h1>How to play Hangman</h1>
        </div>
        <div className="body">
          <p>You have 10 chances to guess the a random word, the length of the word is shown by the amount of empty spaces above the keyboard.
            Every time you make a mistake a you are one step closer to being hanged!!!If you get a letter a right it will show the letters
            above the keyboard. </p>
        <p>Select the reset button to start over. If the game is finished select play again to start over</p>
        </div>
      </div>
    </div>
        );
    }
}

export default Help;