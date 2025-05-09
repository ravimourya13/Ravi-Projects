import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  CircularProgress,
  TextField,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import { Email, Phone, LocationOn, Send } from '@mui/icons-material';
import axios from 'axios';

const Contact = () => {
  const [adminInfo, setAdminInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    fetchAdminInfo();
  }, []);

  const fetchAdminInfo = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/admin/info');
      setAdminInfo(response.data);
    } catch (error) {
      console.error('Error fetching admin info:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="80vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: 'background.default', py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ fontWeight: 700, mb: 6 }}
          color="black"
        >
          Contact Us
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Have questions about our toys or need assistance with your order? We're here to help!
                </Typography>

                <Box sx={{ mt: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <LocationOn sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Visit Us
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Andheri , Mumbai - 400099
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Phone sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Call Us
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        (+91) 1234567890
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Email sx={{ color: 'primary.main', mr: 2, fontSize: 28 }} />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        Email Us
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ravimourya0604@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider sx={{ my: 4 }} />

                <Typography variant="h6" gutterBottom>
                  Store Hours
                </Typography>
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Monday - Friday: 9:00 AM - 8:00 PM
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 1 }}>
                    Saturday: 10:00 AM - 6:00 PM
                  </Typography>
                  <Typography variant="body1">
                    Sunday: 11:00 AM - 5:00 PM
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Send Us a Message
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Fill out the form below and we'll get back to you as soon as possible.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    margin="normal"
                    required
                  />

                  <TextField
                    fullWidth
                    label="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    margin="normal"
                    required
                  />

                  <TextField
                    fullWidth
                    label="Your Message"
                    multiline
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    margin="normal"
                    required
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<Send />}
                    sx={{ mt: 3 }}
                    fullWidth
                  >
                    Send Message
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {adminInfo && (
          <Paper sx={{ mt: 4, p: 3, bgcolor: 'primary.light', color: 'white' }}>
            <Typography variant="h6" gutterBottom>
              Store Manager
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  Name: {adminInfo.username}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="body1">
                  Email: {adminInfo.email}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        )}

        <Card sx={{ mt: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              About Our Store
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome to Toy Store, your one-stop destination for all things fun and educational! We pride ourselves on offering a wide selection of high-quality toys for children of all ages.
            </Typography>
            <Typography variant="body1" paragraph>
              Our mission is to provide a safe and enjoyable shopping experience while helping children learn and grow through play. We carefully select each toy in our inventory to ensure it meets our high standards for quality, safety, and educational value.
            </Typography>
            <Typography variant="body1">
              Whether you're looking for educational toys, action figures, dolls, or outdoor play equipment, we have something for every child's interests and developmental needs.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};

export default Contact; 