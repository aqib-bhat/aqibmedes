import React from 'react';
import { Link, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

class Contact extends React.Component {
    render() {
        return (
            <div>
                <h2>Contact Me</h2>
                <main>
                    <Stack spacing={2}>
                        <Item><Link href='https://www.linkedin.com/in/aqibbhat' target="_blank" rel="noopener" underline="hover">My LinkedIn profile</Link></Item>
                        <Item><strong>Email and mobile number:</strong> Shared on request through LinkedIn.</Item>
                        <Item><Link href='https://github.com/aqib-bhat' target="_blank" rel="noopener" underline="hover">My GitHub profile</Link></Item>
                    </Stack>
                </main>
            </div>
        )
    }
}

export default Contact;