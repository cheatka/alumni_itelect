import { AppBar, Toolbar, Typography, Container, Link, Box, Divider } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Home() {
  return (
    
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "gray.900", color: "white" }}>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: "gray.800" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ ml: 2 }}>
              AMS Alumni
            </Typography>
          </Box>
          <Box>
            <Link href="/" color="inherit" underline="hover" sx={{ mx: 2 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="hover" sx={{ mx: 2 }}>
              About
            </Link>
            <Link href="/login" color="inherit" underline="hover" sx={{ mx: 2 }}>
              Login
            </Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", py: 8, backgroundColor: "gray.700" }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Alumni Management System
        </Typography>
        <Divider sx={{ width: "100px", borderColor: "blue.500", my: 2 }} />
      </Container>

      {/* Footer (Contact Section at the Bottom) */}
      <Box sx={{ backgroundColor: "black", py: 4, textAlign: "center" }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact us
        </Typography>
        <Divider sx={{ width: "100px", borderColor: "blue.500", my: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon />
            <Typography>+63 9912 022 252</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon />
            <Link href="mailto:Alumni@gmail.com" color="inherit" underline="hover">
              Alumni@gmail.com
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
