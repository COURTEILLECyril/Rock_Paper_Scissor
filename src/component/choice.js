import React, { Fragment } from "react";
import "../css/choice.css"
import Rock from "./rock";
import Paper from "./paper";
import Scissor from "./scissor";


class Choice extends React.Component{

 
    render(){
        this.onPlayerPickParent = (pick) =>{
            this.props.onPlayerPickGdParent(pick)   
        }

        return(
            <Fragment>
                <div className="choice">
                    <Paper onPlayerPick = {this.onPlayerPickParent}/>
                    <Scissor onPlayerPick = {this.onPlayerPickParent}/>
                    <Rock onPlayerPick = {this.onPlayerPickParent}/>
                </div>
            </Fragment>
        )
    }
}

export default Choice