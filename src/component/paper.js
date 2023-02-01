import React, { Fragment } from "react";
import "../css/paper.css"
import iconPaper from "../images/icon-paper.svg"

class Paper extends React.Component{
    render(){

        // ENVOI DU PICK AU PARENT
        this.playerPick = (pick) =>{
            this.props.onPlayerPick(pick)
        }


        return(
            <Fragment>
                <div id="divPaper" onClick={() => this.playerPick("Paper")}>
                    <img src={iconPaper} alt="" />
                </div>
            </Fragment>
        )
    }
}

export default Paper