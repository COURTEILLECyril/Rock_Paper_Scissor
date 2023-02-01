import React, { Fragment } from "react";
import "../css/head.css"

class Head extends React.Component{
    render(){
        return(
            <Fragment>
                <div className="head">
                    <div className="headTitre">
                        <h1>ROCK PAPER SCISSOR</h1>
                    </div>
                    <div className="headCompteur">
                        <h4>SCORE</h4>
                        <span>{this.props.modifScore}</span>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Head