import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCart } from '../features/cartSlice';

const styles = {
    navigationContainer: {
      backgroundColor:'black',
  },
    link: {
        textDecoration:'none',
        color: 'white',
        fontSize:'18px',
    },
    linkMenu:{
      textDecoration:'none',
      color: 'black',
      fontSize:'18px',
    }
}


const Nav = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const cartSelected = useSelector(selectCart);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={styles.navigationContainer} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
         { /*<Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            LOGO
          </Typography> */}

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu} style={styles.menuItem}>
                <Typography textAlign="center">
                    <Link to="/" style={styles.linkMenu}>
                       Home
                    </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} style={styles.menuItem}>
                <Typography textAlign="center">
                    <Link to="/products" style={styles.linkMenu}>
                       Products
                    </Link>
                </Typography>
              </MenuItem>

              <MenuItem onClick={handleCloseNavMenu} style={styles.menuItem}>
                <Typography textAlign="center">
                    <Link to="/about" style={styles.linkMenu}>
                       About
                    </Link>
                </Typography>

              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu} style={styles.menuItem}>
                <Typography textAlign="center">
                    <Link to="/contact" style={styles.linkMenu}>
                       Contact
                    </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/*<Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            LOGO
          </Typography>*/}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/" style={styles.link}>
                  Home
                </Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/products" style={styles.link}>
                  Products
                </Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/about" style={styles.link}>
                  About
                </Link>
              </Button>
              <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                <Link to="/contact" style={styles.link}>
                  Contact
                </Link>
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 , display:'flex', marginLeft:'15%'}}>
            <Button onClick={handleCloseNavMenu}>
                <Link to="/favorites" style={styles.link}>
                Favorites
                ({cartSelected.favorites.length !== 0 ? cartSelected.favorites.length : 0})
                </Link>
            </Button> 
            <Button onClick={handleCloseNavMenu}>
                <Link to="/cart" style={styles.link}>
                <ShoppingCartIcon fontSize="small" sx={{marginLeft:1, verticalAlign:'middle'}}/>
                 Cart 
                ({cartSelected.cart.length !== 0 ? cartSelected.cart.length : 0})
                </Link>
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;