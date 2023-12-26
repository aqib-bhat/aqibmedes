import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Person';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooksTwoTone';
import BlogsIcon from '@mui/icons-material/LineWeightSharp';
import PodcastsIcon from '@mui/icons-material/Mic';

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main website pages">
        <Link to="/">
            <ListItemButton selected={selectedIndex === 1} onClick={(event) => handleListItemClick(event, 0)} >
                <ListItemIcon>
                    <HomeIcon />
                </ListItemIcon>
                <ListItemText>Home</ListItemText>
            </ListItemButton>
        </Link>
        <Link to="/about">
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 1)} >
                <ListItemIcon>
                    <AboutIcon />
                </ListItemIcon>
                <ListItemText>About</ListItemText>
            </ListItemButton>
        </Link>
        <Link to="/resume">
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 2)} >
                <ListItemIcon>
                    <FileOpenIcon />
                </ListItemIcon>
                <ListItemText>Resume</ListItemText>
            </ListItemButton>
        </Link>
        <Link to="/contact">
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 3)} >
                <ListItemIcon>
                    <ContactPageIcon />
                </ListItemIcon>
                <ListItemText>Contact</ListItemText>
            </ListItemButton>
        </Link>
        <Link to="/bookshelf">
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 4)} >
                <ListItemIcon>
                    <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText>Bookshelf</ListItemText>
            </ListItemButton>
        </Link>
        <Link to="/blogs">
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 5)} >
                <ListItemIcon>
                    <BlogsIcon />
                </ListItemIcon>
                <ListItemText>Blogs</ListItemText>
            </ListItemButton>
        </Link>
        <Link to="/podcasts">
            <ListItemButton selected={selectedIndex === 0} onClick={(event) => handleListItemClick(event, 6)} >
                <ListItemIcon>
                    <PodcastsIcon />
                </ListItemIcon>
                <ListItemText>Podcasts</ListItemText>
            </ListItemButton>
        </Link>   
      </List>
    </Box>
  );
}
