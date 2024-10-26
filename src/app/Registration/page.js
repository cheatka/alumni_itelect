"use client"; // Add this to mark the component as a Client Component

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Link,
  InputAdornment,
  Select,
  MenuItem,
  FormGroup,
  FormControl,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);
  const [location, setLocation] = useState('Philippines');

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url("/image/razer2.jpg")', // Add your image path here
        backgroundSize: 'cover', // Ensures the image covers the whole background
        backgroundPosition: 'center', // Centers the background image
        backgroundRepeat: 'no-repeat', // Prevents tiling of the background image
      }}
    >
      <Box
        sx={{
          width: 400,
          padding: 3,
          backgroundColor: '#111',
          color: 'white',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Typography variant="h5" align="center" gutterBottom>
          CREATE RAZER ID ACCOUNT
        </Typography>
        <Typography variant="body2" align="center">
          Razer ID is a unified account for all Razer services.
        </Typography>

        {/* Social Login Buttons */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 1 }}>
          {['apple', 'google', 'facebook', 'twitch'].map((platform) => (
            <Button
              key={platform}
              sx={{
                flex: 1,
                marginX: 0.5,
                border: '1px solid white',
                borderRadius: 2,
                height: 50,
                backgroundColor: '#222',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src={`/images/${platform}.png`} // Correct image path
                alt={`${platform} login`}
                style={{ height: 30 }}
              />
            </Button>
          ))}
        </Box>

        <Typography align="center" sx={{ my: 1 }}>
          — OR —
        </Typography>

        {/* Form Inputs */}
        <TextField
          fullWidth
          label="Razer ID (Your Gamer Name)"
          variant="outlined"
          InputProps={{ sx: { backgroundColor: '#fff', color: 'black' } }}
        />

        <FormControl fullWidth>
          <Select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            sx={{ backgroundColor: '#fff', color: 'black' }}
          >
            <MenuItem value="Philippines">Philippines</MenuItem>
            <MenuItem value="USA">USA</MenuItem>
            <MenuItem value="Japan">Japan</MenuItem>
          </Select>
        </FormControl>

        <TextField
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
          InputProps={{ sx: { backgroundColor: '#fff', color: 'black' } }}
        />

        <TextField
          fullWidth
          label="Email Address"
          type="email"
          variant="outlined"
          InputProps={{ sx: { backgroundColor: '#fff', color: 'black' } }}
        />

        <TextField
          fullWidth
          label="Password"
          type={showPassword ? 'text' : 'password'}
          variant="outlined"
          InputProps={{
            sx: { backgroundColor: '#fff', color: 'black' },
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Email Preferences */}
        <FormGroup>
          {[
            'Razer.com',
            'Razer Gold & Silver',
            'Razer Cortex and Razer Game Deals',
            'New Razer Product and Services Information',
            'RazerStore Rewards',
          ].map((option) => (
            <FormControlLabel
              key={option}
              control={<Checkbox defaultChecked />}
              label={option}
            />
          ))}
        </FormGroup>

        {/* Terms and Conditions */}
        <Typography variant="body2">
          Based on your consent, we will customize advertisements and
          recommendations that may match your interests.
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Razer respects your privacy; thus, your consent settings can be
          changed at any time on your Razer ID profile page.
        </Typography>

        <FormControlLabel
          control={<Checkbox />}
          label="Do you accept the Terms of Service and Privacy Policy?"
        />

        {/* Submit Button */}
        <Button
          variant="contained"
          color="success"
          sx={{ mt: 2 }}
          fullWidth
        >
          ACCEPT AND CREATE
        </Button>

        <Typography align="center" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Link href="#" color="success">
            Log in
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
