
import React from 'react';
import { useHistory } from 'react';

function Activity() {
    const history = useHistory();

    const redirectToHomePage = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>Activity Page</h1>
            <button onClick={redirectToHomePage}>Go to Homepage</button>
        </div>
    );
}

export default Activity;
