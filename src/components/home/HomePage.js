import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return (
            <div className="jumbotron">
            <h1>Puralsight</h1>
            <p>ba</p>
            <Link to="about" classname="btn">Linkje</Link>
            </div>

        );
    }
}

export default HomePage;
