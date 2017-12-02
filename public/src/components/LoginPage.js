import React from 'react';
import { connect } from 'react-redux';
import { startLoginGoogle , startLoginFacebook } from '../actions/auth';


export const LoginPage = ({ startLoginGoogle , startLoginFacebook }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>It's time to get expenses handled with Expensify!</p>
            <button className="google-button" onClick={startLoginGoogle}></button>
            <button className="fb-button" onClick={startLoginFacebook}></button>
        </div>
       

    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);