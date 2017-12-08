import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout , startLoginGoogle , startLoginFacebook } from '../actions/auth';


export const Header = ( {startLogout, startLoginGoogle , startLoginFacebook , isAuthenticated }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <h1>Bloggle</h1>
                </Link>
                {isAuthenticated  ? <button className="button button--link" onClick={startLogout}>Logout</button> : <button className="button button--link" onClick={startLoginGoogle}>Log in</button>}
            </div>
        </div>
    </header>
);

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout:  () => dispatch(startLogout()),
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginFacebook: () => dispatch(startLoginFacebook())
});



export default connect(mapStateToProps, mapDispatchToProps)(Header);

