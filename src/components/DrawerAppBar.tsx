import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AboutIcon from '@mui/icons-material/Person';
import ResumeIcon from '@mui/icons-material/FileOpen';
import ContactIcon from '@mui/icons-material/ContactPage';
import BookshelfIcon from '@mui/icons-material/LibraryBooksTwoTone';
import BlogsIcon from '@mui/icons-material/LineWeightSharp';
import PodcastsIcon from '@mui/icons-material/Mic';

const drawerWidth = 240;
const navItems = [
    { name: 'Home', route: '/', icon: 'HomeIcon' },
    { name: 'About', route: '/about', icon: 'HomeIcon' },
    { name: 'Contact', route: '/contact', icon: 'HomeIcon' },
    { name: 'Resume', route: '/resume', icon: 'HomeIcon' },
    { name: 'Bookshelf', route: '/bookshelf', icon: 'HomeIcon' },
    { name: 'Blogs', route: '/blogs', icon: 'HomeIcon' },
    { name: 'Podcasts', route: '/podcasts', icon: 'HomeIcon' },
  ];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const getNavItemIcon = (navItemName: string) => {
    switch ( navItemName ) {
        case 'About':
            return <AboutIcon color='success'/>;
        case 'Contact':
            return <ContactIcon color='primary'/>;
        case 'Resume':
            return <ResumeIcon color='success'/>;
        case 'Bookshelf':
            return <BookshelfIcon color='primary'/>;
        case 'Blogs':
            return <BlogsIcon color='success'/>;
        case 'Podcasts':
            return <PodcastsIcon color='primary'/>;
        default:
            return <HomeIcon color='primary'/>;
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding sx={{ display: 'inline' }}>
            <Link to={item.route}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                {getNavItemIcon(item.name)}
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
          >
            <Link to="/">Aqib Niaz Bhat</Link>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Link to={item.route} key={item.name}>
                <Button sx={{ color: '#fff' }}>
                  {getNavItemIcon(item.name)}&nbsp;&nbsp;
                  {item.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
