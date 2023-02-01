import React, { Fragment } from "react";
import "../css/rules.css"
import Modal from "./modal";


class Rules extends React.Component{

    state = {
        modal : "hide"
    }


    // OUVERTURE MODAL 
    
    fctModalOpen = () => {
        this.setState({
            modal : "show"
        })
    }


    // ENVOI DE L'ETAT DU MODAL AU PARENT

    onfctModalCloseParent = (etat) =>{
        this.setState({
            modal : etat
        })
    }


    render(){
        return(
            <Fragment>
                <div id="rule">
                    <span onClick={() => this.fctModalOpen()} id="btnModal">Rules</span>
                </div>
                { this.state.modal === "show" && 
                    <Modal onfctModalClose = {this.onfctModalCloseParent}/>
                }
            </Fragment>
        )
    }
}

export default Rules