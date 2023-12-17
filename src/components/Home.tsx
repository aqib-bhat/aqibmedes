import '../App.css';
import React from 'react';
import { ReactComponent as DisplayPic } from "../logo.svg";

class Home extends React.Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
                <DisplayPic style={{ height: 200 }} />
                <h1>Aqib's personal website</h1>
                <p>
                    Brief notes about me
                </p>
                <p>
                    1. LinkedIn
                    2. Resume
                    3. Portfolio
                    4. Blog
                </p>
            </header>
          </div>  
        );
    }

}

export default Home;