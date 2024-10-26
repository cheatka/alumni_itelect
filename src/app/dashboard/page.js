"use client"; // Add this to mark the component as a Client Component
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Grid,
  Link,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import React, { useState } from 'react';
import Image from 'next/image';

export default function HomePage() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ backgroundColor: '#333' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Image src="/logo.png" alt="Logo" width={50} height={50} style={{ marginRight: '10px' }} />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Alumni Management System
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/alumni">Alumni</Button>
          <Button color="inherit" href="/about">About</Button>

          <Button color="inherit" onClick={handleMenuOpen}>
            Mariah Arceta
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Manage Account</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(/cover.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '64px',
        }}
      >
        <Typography variant="h3" color="white">
          Welcome to Alumni Management System
        </Typography>
      </Box>

      {/* Main Content */}
      <Container sx={{ my: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Explore our Alumni Community
        </Typography>
        <Typography variant="body1" align="center">
          Connect, grow, and stay updated with alumni news and events.
        </Typography>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#000', color: 'white', py: 5 }}>
        <Container>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4} textAlign="center">
              <Typography variant="h6">Contact Us</Typography>
              <PhoneIcon sx={{ fontSize: 40, mb: 2 }} />
              <Typography>+63 9912 022 252</Typography>
            </Grid>
            <Grid item xs={12} sm={4} textAlign="center">
              <EmailIcon sx={{ fontSize: 40, mb: 2 }} />
              <Link href="mailto:Alumni@gmail.com" color="inherit" underline="hover">
                Alumni@gmail.com
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
