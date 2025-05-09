import { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  TextField,
  Divider,
  IconButton,
  CircularProgress,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import {
  Delete,
  Add,
  Remove,
  ShoppingCart,
  Payment,
  LocalShipping,
  CheckCircle,
} from "@mui/icons-material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const steps = ["Cart Review", "Shipping Details", "Payment", "Confirmation"];

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/cart");
      setCartItems(response.data);
      calculateTotal(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
    }
  };

  const calculateTotal = (items) => {
    const sum = items.reduce((acc, item) => {
      return acc + item.toy.price * item.quantity;
    }, 0);
    setTotal(sum);
  };

  const handleQuantityChange = async (toyId, newQuantity) => {
    if (newQuantity < 1) return;

    try {
      await axios.put(`http://localhost:5000/api/cart/update/${toyId}`, {
        quantity: newQuantity,
      });
      fetchCart();
    } catch (error) {
      alert(error.response?.data?.error || "Failed to update quantity");
    }
  };

  const handleRemoveItem = async (toyId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/remove/${toyId}`);
      fetchCart();
    } catch (error) {
      alert(error.response?.data?.error || "Failed to remove item");
    }
  };

  const handleNext = () => {
    if (activeStep === 0) {
      // Validate cart items
      if (cartItems.length === 0) {
        alert("Your cart is empty. Please add items before proceeding.");
        return;
      }
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 1) {
      // Validate shipping information
      if (
        !billingInfo.name ||
        !billingInfo.address ||
        !billingInfo.city ||
        !billingInfo.state ||
        !billingInfo.zipCode
      ) {
        alert("Please fill in all shipping details before proceeding.");
        return;
      }
      setActiveStep((prevStep) => prevStep + 1);
    } else if (activeStep === 2) {
      // Validate payment information
      if (
        !billingInfo.cardNumber ||
        !billingInfo.expiryDate ||
        !billingInfo.cvv
      ) {
        alert("Please fill in all payment details before proceeding.");
        return;
      }
      handleCheckout();
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/checkout",
        {
          billingInfo,
        }
      );
      alert("Order placed successfully!");
      setCartItems([]);
      setTotal(0);
      setActiveStep(3);
      // Redirect to home page after successful checkout
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      alert(error.response?.data?.error || "Checkout failed");
    }
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: 'white', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Shopping Cart
        </Typography>

        <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            {cartItems.length === 0 ? (
              <Paper sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                  Your cart is empty
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => navigate("/")}
                  sx={{ mt: 2 }}
                >
                  Continue Shopping
                </Button>
              </Paper>
            ) : (
              cartItems.map((item) => (
                <Card key={item.toy._id} sx={{ mb: 2 }}>
                  <CardContent>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={3}>
                        <CardMedia
                          component="img"
                          height="120"
                          image={item.toy.image}
                          alt={item.toy.name}
                          sx={{ borderRadius: 1 }}
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6">{item.toy.name}</Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          gutterBottom
                        >
                          {item.toy.category}
                        </Typography>
                        <Typography variant="h6" color="primary">
                          ₹{item.toy.price.toLocaleString("en-IN")}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            bgcolor: "grey.100",
                            borderRadius: 1,
                            p: 0.5,
                          }}
                        >
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(
                                item.toy._id,
                                item.quantity - 1
                              )
                            }
                          >
                            <Remove />
                          </IconButton>
                          <Typography sx={{ mx: 2 }}>
                            {item.quantity}
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={() =>
                              handleQuantityChange(
                                item.toy._id,
                                item.quantity + 1
                              )
                            }
                          >
                            <Add />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton
                          color="error"
                          onClick={() => handleRemoveItem(item.toy._id)}
                          sx={{ "&:hover": { bgcolor: "error.light" } }}
                        >
                          <Delete />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))
            )}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ position: "sticky", top: 24 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                <Box sx={{ my: 2 }}>
                  <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid item>
                      <Typography variant="body1">Subtotal</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">
                        ₹{total.toLocaleString("en-IN")}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
                    <Grid item>
                      <Typography variant="body1">Shipping</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="body1">₹0.00</Typography>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 2 }} />
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Total</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6" color="primary">
                        ₹{total.toLocaleString("en-IN")}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>

                {activeStep === 0 && (
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={handleNext}
                    disabled={cartItems.length === 0}
                  >
                    Proceed to Shipping
                  </Button>
                )}

                {activeStep === 1 && (
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                      Shipping Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Full Name"
                          value={billingInfo.name}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              name: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Address"
                          value={billingInfo.address}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              address: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="City"
                          value={billingInfo.city}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              city: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="State"
                          value={billingInfo.state}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              state: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="ZIP Code"
                          value={billingInfo.zipCode}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              zipCode: e.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                      <Button variant="outlined" onClick={handleBack} fullWidth>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        fullWidth
                      >
                        Continue to Payment
                      </Button>
                    </Box>
                  </Box>
                )}

                {activeStep === 2 && (
                  <Box>
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                      Payment Information
                    </Typography>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Card Number"
                          value={billingInfo.cardNumber}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              cardNumber: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="Expiry Date"
                          value={billingInfo.expiryDate}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              expiryDate: e.target.value,
                            })
                          }
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          fullWidth
                          label="CVV"
                          value={billingInfo.cvv}
                          onChange={(e) =>
                            setBillingInfo({
                              ...billingInfo,
                              cvv: e.target.value,
                            })
                          }
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                      <Button variant="outlined" onClick={handleBack} fullWidth>
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        onClick={handleCheckout}
                        fullWidth
                      >
                        Place Order
                      </Button>
                    </Box>
                  </Box>
                )}

                {activeStep === 3 && (
                  <Box sx={{ textAlign: "center", py: 4 }}>
                    <CheckCircle
                      sx={{ fontSize: 64, color: "success.main", mb: 2 }}
                    />
                    <Typography variant="h6" gutterBottom>
                      Order Placed Successfully!
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ mb: 3 }}
                    >
                      Thank you for your purchase. Your order has been
                      confirmed.
                    </Typography>
                    <Button
                      variant="contained"
                      onClick={() => navigate("/")}
                      fullWidth
                    >
                      Continue Shopping
                    </Button>
                  </Box>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Cart;
