import React, { Component } from 'react';
import Help from './Help';
import Keyboard from './Keyboard';
import Stickman from './Stickman';
import { randomWord } from './Words';
import './Hangman.css';
class Hangman extends Component {
    static defaultProps = {
        maxWrong: 10
      }
    //
    constructor(props){
        super(props);
        this.state={
        mistake:0,
        guessed: new Set([]),
        answer: randomWord(),
        modalOpen:false
        }
    }

    //handles the logic for when a user guesses a letter. Adds the letter to the guessed set and increments the mistake state if 
    //the letter is not contained in the answer
    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st => ({
          guessed: st.guessed.add(letter),
          mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1),
          
        }));
      }
    //sets the state of the help modal
    setStateOfModal = (newModalState) => {
        this.setState({modalOpen: newModalState});
    }

    //resets all the states in the
    resetButton = () => {
        this.setState({
          mistake: 0,
          guessed: new Set([]),
          answer: randomWord(),
          modalOpen:false,
        })   
    }
    //returns a map of all the letters of the word that have been guessed correctly. If a letter
    //has not been guessed yet, a '_' is shown in its place
    guessedWord = () =>{
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
      }

    render() { 
    const gameOver = this.state.mistake >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    
    let modal;
        if(this.state.modalOpen){
            modal =  <Help  setStateOfModal = {this.setStateOfModal}/>;
        }
    
        return (
            <div>
                <div className = "header">
                    <h1 id = 'title'>HANGMAN</h1>
                </div>
                <div>
                    <div className = 'buttonDiv'>
                        <button className = "helpbtn" onClick={() => {
                            this.setStateOfModal(true);//closes the modal component
                        }}>
                        ?
                        </button>
                    </div>
                    <div className = "modal">
                        {modal}
                    </div>
                    <div className = 'mainContainer'>
                        <div id = "stickman" className = 'mainItems'>
                        <Stickman isWinner = {isWinner} gameOver = {gameOver} guessed = {this.state.guessed} mistake = {this.state.mistake} />
                        </div>
                        <div className = 'mainItems'>
                        <Keyboard  isWinner = {isWinner} gameOver = {gameOver} answer = {this.state.answer} guessed = {this.state.guessed} mistake = {this.state.mistake} handleGuess = {this.handleGuess} guessedWord = {this.guessedWord}/>
                    </div>       
                    </div>
                    <div className = "resetbtn">
                    <button className = "reset" onClick={() => {
                            this.resetButton();//closes the modal component
                        }}>
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hangman;