import React from 'react';
import { Link } from '@mui/material';

export default function Resume() {  
    return (
      <div>
        <h2>Resume</h2>
        <main>
          <p>
            <Link href="https://drive.google.com/file/d/1RrRZMGCUz-WRt7RiErpvCS845IYPx3fE/view?usp=sharing" target="_blank" rel="noopener" underline="hover">
              Résumé PDF available on GoogleDrive
            </Link><br/>
            Curriculum Vitae (CV) with detailed work history is available on request.
          </p>
        </main>
      </div>
    );
};
