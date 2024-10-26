"use client"; // Mark this as a Client Component

import { useState } from "react";
import { Box, Button, Container, TextField, Typography, Link, Divider } from "@mui/material";
import { Facebook, Google, Twitter } from "@mui/icons-material"; // Social icons
import { useRouter } from "next/navigation"; // For routing

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Sign-up with:", { email, password });
    router.push("/login"); // Redirect to login after sign-up
  };

  const handleSocialLogin = (platform) => {
    console.log(`Logging in with ${platform}`);
    // Add authentication logic for each platform here
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `linear-gradient(
          135deg, 
          rgba(33, 150, 243, 0.85) 0%, 
          rgba(156, 39, 176, 0.85) 50%, 
          rgba(255, 87, 34, 0.85) 100%
        ), 
        url('/path/to/your/background-image.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", textAlign: "center" }}>
          <Typography variant="h4" color="black" gutterBottom>
            Sign Up
          </Typography>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            fullWidth
            margin="normal"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Sign Up
          </Button>

          <Divider sx={{ my: 2 }} >OR</Divider>

          <Typography variant="body2" color="black" gutterBottom>
            Sign up with
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between", gap: 1, mb: 2 }}>
            <Button
              onClick={() => handleSocialLogin("Facebook")}
              variant="outlined"
              fullWidth
              startIcon={<Facebook />}
              sx={{ textTransform: "none" }}
            >
              Facebook
            </Button>
            <Button
              onClick={() => handleSocialLogin("Google")}
              variant="outlined"
              fullWidth
              startIcon={<Google />}
              sx={{ textTransform: "none" }}
            >
              Google
            </Button>
            <Button
              onClick={() => handleSocialLogin("Twitter")}
              variant="outlined"
              fullWidth
              startIcon={<Twitter />}
              sx={{ textTransform: "none" }}
            >
              Twitter
            </Button>
          </Box>

          <Typography variant="body2" color="black">
            Already have an account?{" "}
            <Link href="/login" underline="hover">
              Login
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
