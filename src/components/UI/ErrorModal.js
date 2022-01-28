import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onClearError} />
};

const ModalOverlay = props => {
    return (<Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <section className={classes.message}>
            <p>{props.message}</p>
        </section>
        <footer className={classes.actions}>
            <Button onClick={props.onClearError}>OK</Button>
        </footer>
    </Card>);
}

const ErrorModal = props => {

    return (
        <Fragment>
            {createPortal(<Backdrop onClearError={props.onClearError} />, document.getElementById('backdrop-root'))}
            {createPortal(<ModalOverlay onClearError={props.onClearError} title={props.title} message={props.message} />, document.getElementById('overlay-root'))}

        </Fragment>
    );
};

export default ErrorModal;
