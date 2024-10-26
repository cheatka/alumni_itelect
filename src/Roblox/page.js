// pages/index.js
"use client"; // Add this to mark the component as a Client Component
import { useState } from 'react';
import { Box, Button, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark', // Dark mode theme like in your reference
    primary: {
      main: '#fff',
    },
  },
});

export default function SignUp() {
  const [formData, setFormData] = useState({
    month: '',
    day: '',
    year: '',
    username: '',
    password: '',
    gender: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            backgroundImage: 'url("/image/image2.png")', // Add your image path here
            backgroundSize: 'cover', // Ensures the image covers the whole background
            backgroundPosition: 'center', // Centers the background image
            backgroundRepeat: 'no-repeat', // Prevents tiling of the background image
        }}
      >
        <Box
          sx={{
            backgroundColor: '#333',
            padding: 4,
            borderRadius: 2,
            width: '400px',
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            SIGN UP AND START HAVING FUN!
          </Typography>

          <Grid container spacing={2}>
            {/* Birthday Fields */}
            <Grid item xs={4}>
              <Select
                fullWidth
                name="month"
                value={formData.month}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>Month</MenuItem>
                <MenuItem value="January">January</MenuItem>
                <MenuItem value="February">February</MenuItem>
                {/* Add other months here */}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                fullWidth
                name="day"
                value={formData.day}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>Day</MenuItem>
                {[...Array(31)].map((_, index) => (
                  <MenuItem key={index} value={index + 1}>{index + 1}</MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Select
                fullWidth
                name="year"
                value={formData.year}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>Year</MenuItem>
                {/* Generate a list of years */}
                {[...Array(100)].map((_, index) => (
                  <MenuItem key={index} value={2023 - index}>{2023 - index}</MenuItem>
                ))}
              </Select>
            </Grid>

            {/* Username Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Don't use your real name"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Password Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 8 characters"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>

            {/* Gender Field */}
            <Grid item xs={12}>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant={formData.gender === 'male' ? 'contained' : 'outlined'}
                  onClick={() => setFormData({ ...formData, gender: 'male' })}
                  fullWidth
                  sx={{ mr: 1 }}
                >
                  Male
                </Button>
                <Button
                  variant={formData.gender === 'female' ? 'contained' : 'outlined'}
                  onClick={() => setFormData({ ...formData, gender: 'female' })}
                  fullWidth
                  sx={{ ml: 1 }}
                >
                  Female
                </Button>
              </Box>
            </Grid>

            {/* Terms and Sign-Up Button */}
            <Grid item xs={12}>
              <Typography variant="body2" align="center">
                By clicking Sign Up, you are agreeing to the{' '}
                <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>
                  Terms of Use
                </a>{' '}
                and{' '}
                <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>
                  Privacy Policy
                </a>.
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
