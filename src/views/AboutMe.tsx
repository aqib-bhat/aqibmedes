import React from 'react';
import { Typography } from '@mui/material';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>About Me</Typography>
                <main>
                    <p>A software engineer currently based in the Greater Vancouver Area in Canada.</p>
                    <p>Thought process</p>
                    <p>Interests outside of work</p>
                </main>
            </div>
        )
    }
}

export default AboutMe;