import React from 'react';
import { Typography } from '@mui/material';

class Bookshelf extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Bookshelf</Typography>
                <main>
                    <p>Books that I have read / reading / recommend.</p>
                </main>
            </div>
        )
    }
}

export default Bookshelf;