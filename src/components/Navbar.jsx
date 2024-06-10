import * as React from 'react';
import PropTypes from 'prop-types';
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
import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import Options from '../components/Options'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const drawerWidth = 240;
const navItems = [<Button />, <a href="Domů">Domů</a>, <a href="OObci">O Obci</a>, <a href="Dokumenty">Dokumenty</a>, <a href="https://gis.kr-stredocesky.cz/js/reg_up/?extent=-735315.9615%2C-1005398.2856%2C-719145.9082%2C-997613.297%2C102067">Územní Plány obce Dobřeň</a>, <a href="Fotogalerie"><a href="https://www.google.com/maps/place/Dob%C5%99e%C5%88/@50.4795699,14.5554433,1659m/data=!3m1!1e3!4m6!3m5!1s0x47095e2bcb589fa5:0x46625fe84c9a6b84!8m2!3d50.4794052!4d14.5567115!16s%2Fm%2F06w8vfl?entry=ttu">Mapy</a></a>, <Options />];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center'}}>
      <Typography variant="h6" sx={{ my: 2 }}>
      OBEC DOBŘEŇ <br /> Oficiální Web
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav" style={{boxShadow:"none"}}>
        <Toolbar sx={{bgcolor:'#2e3944'}}>
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
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            OBEC DOBŘEŇ <br /> Oficiální Web
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
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
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;