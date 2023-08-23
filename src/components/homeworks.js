
import React from 'react';
import { useHistory } from 'react';

function Homeworks() {
    const history = useHistory();

    const redirectToHomePage = () => {
        history.push('/');
    };

    return (
        <div>
            <h1>Homeworks Page</h1>
            <button onClick={redirectToHomePage}>Go to Homepage</button>
        </div>
    );
}

export default Homeworks;
