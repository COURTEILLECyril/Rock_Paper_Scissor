import React, { Fragment } from "react";
import "../css/body.css"
import Choice from "./choice";
import Head from "./head";
import Rules from "./rules";
import Battle from "./battle";

class Body extends React.Component{

    state = {
        picked : "",
        resultat : 0,
    }

    // RECUPERATION DU CHOIX DU JOUEUR

    choixPick = (pick) =>{
        this.setState({
            picked : pick
        }) 
    }

    // MISE A JOUR DU SCORE ET RESET DU CHOIX DU JOUEUR

    newResultat = this.state.resultat

    onResetParent = (score) =>{
        if (score === 1) {
            this.newResultat += 1
        } else if (score === -1) {
            this.newResultat -= 1
        }
        this.setState({
            resultat : this.newResultat,
            picked : ""
        })
    }

// ----------------------------------------------------------------------------------------------------------------------------------------------------------
 

    render() {
        return(
            <Fragment>
                <div id="divBodyHead">
                    <Head modifScore = {this.state.resultat}/>
                </div>
                { this.state.picked === "" &&
                    <div id="divBodyChoice">
                        <Choice onPlayerPickGdParent = {this.choixPick}/>
                    </div>
                }
                { this.state.picked !== "" &&                
                    <div id="divBodyBattle">
                        <Battle player = {this.state.picked} onReset={this.onResetParent} score ={this.newResultat} />
                    </div>
                }
                <Rules/>
            </Fragment>
        )
    }
}

export default Body