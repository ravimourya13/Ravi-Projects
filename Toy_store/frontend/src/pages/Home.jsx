import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  TextField,
  Box,
  CircularProgress,
  Snackbar,
  Alert,
  Pagination
} from '@mui/material';
import axios from 'axios';

const Home = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const itemsPerPage = 12;

  useEffect(() => {
    fetchToys();
  }, []);

  const fetchToys = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/toys');
      setToys(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch toys. Please try again later.');
      console.error('Error fetching toys:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (toyId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        setSnackbar({
          open: true,
          message: 'Please login to add items to cart',
          severity: 'warning'
        });
        return;
      }

      await axios.post(
        'http://localhost:5000/api/cart/add',
        { toyId, quantity: 1 },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      setSnackbar({
        open: true,
        message: 'Item added to cart successfully',
        severity: 'success'
      });
    } catch (err) {
      setSnackbar({
        open: true,
        message: err.response?.data?.error || 'Failed to add item to cart',
        severity: 'error'
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const filteredToys = toys.filter(toy =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    toy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedToys = filteredToys.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Box mb={4}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search toys by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ mb: 2 }}
          />
        </Box>

        <Grid container spacing={3}>
          {paginatedToys.map((toy) => (
            <Grid item key={toy._id} xs={12} sm={6} md={4} lg={3}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: 3
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={toy.image}
                  alt={toy.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="h2">
                    {toy.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {toy.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Age Range: {toy.ageRange}
                  </Typography>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ₹{toy.price}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={() => handleAddToCart(toy._id)}
                    sx={{
                      fontWeight: 700,
                      bgcolor: '#ff6f61',
                      color: '#fff',
                      '&:hover': { bgcolor: '#ff3d2f' }
                    }}
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredToys.length > itemsPerPage && (
          <Box display="flex" justifyContent="center" mt={4}>
            <Pagination
              count={Math.ceil(filteredToys.length / itemsPerPage)}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
            />
          </Box>
        )}

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Home; 