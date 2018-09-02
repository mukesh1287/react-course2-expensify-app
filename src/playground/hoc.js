import React from 'react';
import ReactDOM from 'react-dom';

const UserInfo = (props) => (
    <div>
    <h1>
    User Info
    </h1>
    <p> The info is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info. Dont share it</p>}
        <WrappedComponent {...props} />
        </div>
    );
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}
        
        </div>
    );
}

const AdminInfo = withAdminWarning(UserInfo);
const AuthInfo = requireAuthentication(UserInfo);
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />,document.getElementById('app'));