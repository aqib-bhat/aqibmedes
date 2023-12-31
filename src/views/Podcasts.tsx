import React from 'react';
import { Typography } from '@mui/material';

class Podcasts extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Podcasts</Typography>
                <main>
                    <Typography variant="body1" gutterBottom>
                        Coming soon!
                    </Typography>
                </main>
            </div>
        )
    }
}

export default Podcasts;