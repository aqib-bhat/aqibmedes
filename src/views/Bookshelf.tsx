import React from 'react';
import { Typography } from '@mui/material';

class Bookshelf extends React.Component {
    render() {
        return (
            <div>
                <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>Bookshelf</Typography>
                <main>
                    <Typography variant="subtitle1" gutterBottom>
                        Books that I have read / reading / recommend.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        This section will be updated soon!
                    </Typography>
                </main>
            </div>
        )
    }
}

export default Bookshelf;