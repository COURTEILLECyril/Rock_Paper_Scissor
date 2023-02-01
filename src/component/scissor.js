import React, { Fragment } from "react";
import "../css/scissor.css"
import iconScissors from "../images/icon-scissors.svg"

class Scissor extends React.Component {
    render() {

        // ENVOI DU PICK AU PARENT

        this.playerPick = (pick) =>{
            this.props.onPlayerPick(pick)
        }

        
        return(
            <Fragment>
                <div id="divScissor" onClick={() => this.playerPick("Scissor")}>
                    <img src={iconScissors} alt="" />
                </div>
            </Fragment>
        )
    }
}

export default Scissor