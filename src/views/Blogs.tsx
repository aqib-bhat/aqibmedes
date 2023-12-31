import React from 'react';
import { Link, Typography } from '@mui/material';

class Blogs extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Blogs</Typography>
                <main>
                    <Typography variant="body1" gutterBottom>
                        <Link href='https://aqibbhat.wordpress.com/' target="_blank" rel="noopener" underline="hover">Main blog on Wordpress</Link>
                    </Typography>
                </main>
            </div>
        )
    }
}

export default Blogs;