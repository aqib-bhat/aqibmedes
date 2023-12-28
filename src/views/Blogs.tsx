import React from 'react';
import Link from '@mui/material/Link';

class Blogs extends React.Component {
    render() {
        return (
            <div>
                <h2>Blogs</h2>
                <main>
                    <p>
                        <Link href='https://aqibbhat.wordpress.com/' target="_blank" rel="noopener" underline="hover">Main blog on Wordpress</Link>
                    </p>
                </main>
            </div>
        )
    }
}

export default Blogs;