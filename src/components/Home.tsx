import '../App.css';
import React from 'react';
import displayPic from "../assets/images/Aqib_DP.jpeg";
import { Avatar } from '@mui/material';

class Home extends React.Component {
    render() {
        return (
          <div className="App">
            <Avatar
                    alt="Aqib"
                    src={displayPic}
                    sx={{ width: 200, height: 200 }}
                    variant="square"
            ></Avatar>
            <p>
                Howdy! This is Aqib, What this site is all about.
            </p>
          </div>  
        );
    }

}

export default Home;