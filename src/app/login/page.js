"use client"; // Add this to mark the component as a Client Component

import { useState } from "react";
import { Box, Button, Container, TextField, Typography, Link } from "@mui/material";
import { useRouter } from "next/navigation"; // Correct import for App Router

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login with:", { email, password });
    // Implement authentication logic here
    router.push("/dashboard"); // Example: redirect to dashboard after login
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
            Login
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
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
          <Typography variant="body2" color="black" sx={{ mt: 2 }}>
            Don't have an account?{" "}
            <Link href="/signup" underline="hover">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
