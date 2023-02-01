import React, { Fragment } from "react";
import "../css/modal.css"
import Close from "../images/icon-close.svg"
import ImageRules from "../images/image-rules.svg"

class Modal extends React.Component {

    fctModalClose = (etat) => {
        this.props.onfctModalClose(etat)
    }

    render() {
        return (
            <Fragment>
                <div id="bgModal" onClick={() => this.fctModalClose("close")} ></div>
                <div className="modal">
                    <div className="headModal">
                        <h3>RULES</h3>
                        <img id="closeModal" src={Close} alt="" onClick={() => this.fctModalClose("close")} />
                    </div>
                    <div>
                        <img src={ImageRules} alt="" />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Modal