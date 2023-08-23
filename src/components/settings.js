
import React from 'react';
import { useHistory } from 'react';

function Settings() {
    const history = useHistory();

    const redirectToHomePage = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>Settings Page</h1>
            <button onClick={redirectToHomePage}>Go to Homepage</button>
        </div>
    );
}

export default Settings;
