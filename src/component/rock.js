import React, { Fragment } from "react";
import "../css/rock.css"
import iconRock from "../images/icon-rock.svg"

class Rock extends React.Component{
    render(){

        // ENVOI DU PICK AU PARENT

        this.playerPick = (pick) =>{
            this.props.onPlayerPick(pick)
        }


        
        return(
            <Fragment>
                <div id="divRock" onClick={() => this.playerPick("Rock")}>
                    <img src={iconRock} alt="" />
                </div>
            </Fragment>
        )
    }
}

export default Rock