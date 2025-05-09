import { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  Box,
  CircularProgress,
  TextField,
  InputAdornment,
  Chip,
  Stack,
  Pagination,
} from '@mui/material';
import { Search, ShoppingCart } from '@mui/icons-material';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';

const toys = [
  {
    id: 1,
    name: "LEGO Classic Creative Bricks",
    price: 2499,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Building Blocks",
    ageRange: "4-99 years"
  },
  {
    id: 2,
    name: "Barbie Dreamhouse",
    price: 12999,
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Dolls",
    ageRange: "3-10 years"
  },
  {
    id: 3,
    name: "Hot Wheels Track Set",
    price: 1999,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Vehicles",
    ageRange: "4-12 years"
  },
  {
    id: 4,
    name: "Remote Control Drone",
    price: 4999,
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Electronics",
    ageRange: "8-14 years"
  },
  {
    id: 5,
    name: "Art & Craft Kit",
    price: 899,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "Creative",
    ageRange: "5-12 years"
  },
  // Add more toys here...
];

const Toys = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const { isAuthenticated } = useAuth();

  const handleAddToCart = async (toyId) => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/cart/add', {
        toyId,
        quantity: 1,
      });
      alert('Added to cart successfully!');
    } catch (error) {
      alert(error.response?.data?.error || 'Failed to add to cart');
    }
  };

  const filteredToys = toys.filter(toy =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    toy.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredToys.length / itemsPerPage);
  const displayedToys = filteredToys.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <Box sx={{ py: 4, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 600 }}>
            Our Toy Collection
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search toys..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{
              bgcolor: 'white',
              borderRadius: 2,
              '& .MuiOutlinedInput-root': {
                '& fieldset': { border: 'none' },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {displayedToys.map((toy) => (
            <Grid item key={toy.id} xs={12} sm={6} md={4} lg={3}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                  },
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
                  <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                    <Chip
                      label={toy.category}
                      size="small"
                      sx={{ bgcolor: 'primary.light', color: 'white' }}
                    />
                    <Chip
                      label={toy.ageRange}
                      size="small"
                      sx={{ bgcolor: 'secondary.light', color: 'white' }}
                    />
                  </Stack>
                  <Typography variant="h6" color="primary">
                    ₹{toy.price.toLocaleString('en-IN')}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<ShoppingCart />}
                    onClick={() => handleAddToCart(toy.id)}
                    sx={{
                      bgcolor: 'secondary.main',
                      '&:hover': { bgcolor: 'secondary.dark' },
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {totalPages > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={(e, value) => setPage(value)}
              color="primary"
              size="large"
            />
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Toys; 