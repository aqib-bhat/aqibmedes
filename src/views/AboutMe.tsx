import React from 'react';
import { Divider, Typography } from '@mui/material';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>About Me</Typography>
                <main>
                    <Typography variant="body1" align='left' gutterBottom>
                        A software engineer currently based in the Greater Vancouver Area in Canada.
                        Software Engineering has taught me a lot about how to get things done and life in general as well.
                        I am also interested in a host of other things, from science and spirituality to sports and comedy.
                    </Typography>
                    <br/><Divider></Divider><br/>
                    <Typography variant="subtitle1" align='left' sx={{ fontWeight: 'bold' }}>Brief professional bio</Typography>
                    <Typography variant="body1" align='left' gutterBottom>
                        xyz
                    </Typography>
                    <br/><Divider></Divider><br/>
                    <Typography variant="subtitle1" align='left' sx={{ fontWeight: 'bold' }}>Interests outside of work</Typography>
                    <Typography variant="body1" align='left' gutterBottom>
                        xyz
                    </Typography>
                    <br/><Divider></Divider><br/>
                </main>
            </div>
        )
    }
}

export default AboutMe;