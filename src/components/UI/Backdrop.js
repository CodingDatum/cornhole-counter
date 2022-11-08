import React from 'react';
import ReactDOM from 'react-dom';
import BackdropContent from './BackdropContent';

const Backdrop = props => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<BackdropContent onclick={props.onClick}>{props.children}</BackdropContent>, document.getElementById("backdrop-root"))}
        </React.Fragment>
    )
}

export default Backdrop