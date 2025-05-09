import { AppBar, Toolbar, Typography, Button, IconButton, Badge, Box, Container } from '@mui/material';
import { ShoppingCart, Home, ContactMail, Logout, Toys } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to logout?')) {
      await logout();
      navigate('/login');
    }
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#1a1a1a', boxShadow: 2 }}>
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': { opacity: 0.8 },
            }}
            onClick={() => navigate('/')}
          >
            <Toys sx={{ fontSize: 32, mr: 1, color: '#FF6B6B' }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                letterSpacing: 0.5,
                background: 'linear-gradient(45deg, #FF6B6B 30%, #4ECDC4 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Toy Store
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              color="inherit"
              startIcon={<Home />}
              onClick={() => navigate('/')}
              sx={{ 
                color: 'white',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: '#FF6B6B'
                } 
              }}
            >
              Home
            </Button>

            <Button
              color="inherit"
              startIcon={<ContactMail />}
              onClick={() => navigate('/contact')}
              sx={{ 
                color: 'white',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  color: '#FF6B6B'
                } 
              }}
            >
              Contact
            </Button>

            {isAuthenticated ? (
              <>
                <IconButton
                  color="inherit"
                  onClick={() => navigate('/cart')}
                  sx={{
                    color: 'white',
                    '&:hover': { 
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: '#FF6B6B',
                      transform: 'scale(1.1)' 
                    },
                    transition: 'transform 0.2s',
                  }}
                >
                  <Badge badgeContent={0} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>

                <Button
                  color="inherit"
                  startIcon={<Logout />}
                  onClick={handleLogout}
                  sx={{ 
                    color: 'white',
                    '&:hover': { 
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: '#FF6B6B'
                    } 
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => navigate('/login')}
                  sx={{
                    color: 'white',
                    borderColor: 'white',
                    '&:hover': {
                      borderColor: '#FF6B6B',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: '#FF6B6B'
                    },
                  }}
                >
                  Login
                </Button>
                <Button
                  color="inherit"
                  variant="contained"
                  onClick={() => navigate('/register')}
                  sx={{
                    bgcolor: '#FF6B6B',
                    color: 'white',
                    '&:hover': { 
                      bgcolor: '#E64A4A',
                      color: 'white'
                    },
                  }}
                >
                  Register
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 