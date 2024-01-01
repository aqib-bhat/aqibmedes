import React from 'react';
import { Divider, Typography } from '@mui/material';
import { StyledRouterLink } from '../components/StyledRouterLink';

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
                        For professional information, check the <StyledRouterLink to="/resume">Resume</StyledRouterLink> page.
                    </Typography>
                    <br/><Divider></Divider><br/>
                    <Typography variant="subtitle1" align='left' sx={{ fontWeight: 'bold' }}>Some interests outside of work</Typography>
                    <Typography variant="body1" align='left' gutterBottom>
                        Sports | Logic, Science, Engineering, Education | Humor, Wit, Comedy<br/>
                        Mental and Physical Health | Spirituality | History, Economics, Justice<br/>
                        Well, that covers almost everything! 😺 The thing is, if you care to find the beauty behind any thing, you will start to appreciate it.
                        You also have to seek (and share) guidance to balance your thoughts and keep your biases in check. 
                    </Typography>
                    <br/><Divider></Divider><br/>
                </main>
            </div>
        )
    }
}

export default AboutMe;