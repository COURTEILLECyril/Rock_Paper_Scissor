import React, { Fragment } from "react";
import "../css/battle.css"
import Rock from "./rock";
import Paper from "./paper";
import Scissor from "./scissor";

class Battle extends React.Component{

    state = {
        house : "thinking",
        replay : "hide"
    }

    pick = [<Rock/>, <Paper/>, <Scissor/>]
    x = ""
    resultat = ""
    y = Math.floor(Math.random()*3)
    score = 0

 
    
    render(){
        
        // CHOIX DU JOUEUR 

        if (this.props.player ==="Rock") {
            this.x = 0
        }else if (this.props.player ==="Paper") {
            this.x = 1
        }else if (this.props.player ==="Scissor") {
            this.x = 2
        }


        // DIFFERENTS RESULTATS POSSIBLES
        
        if (this.x === this.y ) {
            this.resultat = "DRAW"

        } else if (this.x === 0 && this.y === 2) {
            this.resultat = "WIN"
        } else if (this.x === 1 && this.y === 0) {
            this.resultat = "WIN"
        } else if (this.x === 2 && this.y === 1) {
            this.resultat = "WIN"

        } else if (this.x === 0 && this.y === 1) {
            this.resultat = "LOSE"
        } else if (this.x === 1 && this.y === 2) {
            this.resultat = "LOSE"
        } else if (this.x === 2 && this.y === 0) {
            this.resultat = "LOSE"
        }


        // INTERVAL AVANT LE CHOIX DE LA HOUSE 

        setTimeout(() => {
            this.setState({
                house : "picked"
            })
        }, 1500);


        //INTERVAL AVANT LE RESULTAT

        setTimeout(() => {
            this.setState({
                replay : "show"
            })
        }, 2500);


        // VALEUR DU RESULTAT
        
        this.scoreTotal = (resu) =>{         
            if (this.resultat === "WIN") {
                resu = 1
            }
            else if (this.resultat === "LOSE") {
                resu = -1
            }
            this.reset(resu)           
        }
        

        // ENVOI DU RESULTAT AU PARENT 

        this.reset = (resu) =>{
            this.props.onReset(resu)
        }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------


        return(
            <Fragment>
                <div id="battle">
                    <div className="playerPick">
                        <h3>YOU PICKED</h3>
                        {this.pick[this.x]}
                    </div>
                    { this.state.replay === "hide" &&
                        <Fragment>
                            <h2 className="resultat">SUSPENSE ...</h2>
                        </Fragment>
                    }
                    { this.state.replay === "show" && 
                        <div className="resultat">
                            <h2> YOU {this.resultat}! </h2>
                            {this.resultat === "WIN" &&
                                <h2>Score + 1</h2>
                            }
                            {this.resultat === "LOSE" &&
                                <h2>Score - 1</h2>
                            }
                            {this.resultat === "DRAW" &&
                                <h2>Score + 0</h2>
                            }
                            <button className="playAgain" onClick={() => this.scoreTotal(this.score)}>PLAY AGAIN</button>
                        </div>
                    }
                    <div className="housePick">
                        <h3>THE HOUSE PICKED</h3>
                        { this.state.house === "picked" &&
                            <Fragment>
                                {this.pick[this.y]}
                            </Fragment>
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Battle