import React from 'react';
import { Link, Paper, Stack, Typography } from '@mui/material';
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
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Contact Me</Typography>
                <main>
                    <Stack spacing={2} sx={{ margin: 2 }}>
                        <Item>
                            <Typography variant="h5" gutterBottom>
                                <Link href='https://www.linkedin.com/in/aqibbhat' target="_blank" rel="noopener" underline="hover">My LinkedIn profile</Link>
                            </Typography>
                        </Item>
                        <Item>
                            <Typography variant="h5" gutterBottom>
                                <strong>Email and mobile number:</strong> Shared on request through LinkedIn.
                            </Typography>
                        </Item>
                        <Item>
                            <Typography variant="h5" gutterBottom>
                                <Link href='https://aqibbhat.wordpress.com/contact/' target="_blank" rel="noopener" underline="hover">My blog's Contact page</Link>
                            </Typography>
                        </Item>
                    </Stack>
                </main>
            </div>
        )
    }
}

export default Contact;