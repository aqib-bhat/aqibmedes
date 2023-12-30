import React from 'react';
import { Typography } from '@mui/material';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>About Me</Typography>
                <main>
                    <p>
                        A software engineer currently based in the Greater Vancouver Area in Canada.<br/>
                        Software Engineering has taught me a lot about how to get things done and life in general as well.<br/>
                        I am also interested in a host of other things, from science and spirituality to sports and comedy.
                    </p>
                    <p><strong>Brief professional bio:</strong> ABC</p>
                    <p>
                        Thought process<br/>
                        Conceptual clarity | Empathy, Justice, and Logic
                    </p>
                    <p>Interests outside of work</p>
                    <p>
                        Motto: Leave things in a better place than you find them.<br/>
                    </p>
                </main>
            </div>
        )
    }
}

export default AboutMe;