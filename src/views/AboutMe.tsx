import React from 'react';
import { Divider, Link, Typography } from '@mui/material';
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
                    </Typography>
                    <br/><Divider></Divider><br/>
                    <Typography variant="subtitle1" align='left' sx={{ fontWeight: 'bold' }}>Professional bio</Typography>
                    <Typography variant="body1" align='left' gutterBottom>
                        I am a software engineer with over 10 years of experience working in multiple business domains and locations.
                        I have worked in big and small companies, and hence, able to thrive in different environments.<br/>
                        I have done full-stack work but focussed more on the backend, setup infrastructure, written automation and integration tests, created dashboards and alarms, been on-call, perfomed project planning, code-reviews, blameless investigations of incidents, and handled communications.
                        I have worked on performance optimization of software applications as well as improving the UI/UX.
                        I like to learn new technologies and areas of work in order to pragmattically get things done. I learned React to build this website (<Link href="https://github.com/aqib-bhat/aqibmedes" target="_blank" rel="noopener" underline="hover">GtHub repo</Link>)<br/>
                        I have been been a part of, and lead small and big projects. I get involved in all aspects of software engineering from understanding the business domain and synthesizing requirements to making the developer experience better and ensuring the sound monitoring of systems.
                        I like to take ownership while building good relationships. I have myself implemented software services as well as handled the testing and DevOps/SRE aspects, and so, coordinating with the Product/QA/DevOps/SRE/Other teams and customers is something that I do in a prompt and respectful way.
                        I like to ensure that things are made clear, and good principles are applied in a balanced way so that everyone from a newcomer to an experienced person, the on-call engineer to the customer, all have a delightful experience.<br/>
                        For more information, check the <StyledRouterLink to="/resume">Resume</StyledRouterLink> page.
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