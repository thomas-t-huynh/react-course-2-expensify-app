// Higher Order Componenet (HOC)) - A component that renders another component.
// Reuse code
// render hijacking
// prop manipulation
// abstract state 

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p> This is private info.</p>}
            <WrappedComponent { ...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>This is private Info</p> }
        </div>    
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(Info);


ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the deets" />, document.getElementById("app"));
// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the component getting renderd" /> , document.getElementById("app"));