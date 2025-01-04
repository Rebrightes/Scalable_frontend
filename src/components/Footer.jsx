
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "var(--primary-color)",
        color: "var(--secondary-color)",
        padding: "16px 0",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
            }}
          >
            <Link
              href="/about"
              color="inherit"
              sx={{
                marginBottom: { xs: "8px", md: "0" },
                marginRight: { md: "16px" },
              }}
            >
              About
            </Link>
            <Link
              href="/contact"
              color="inherit"
              sx={{
                marginBottom: { xs: "8px", md: "0" },
                marginRight: { md: "16px" },
              }}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              color="inherit"
              sx={{ marginBottom: { xs: "8px", md: "0" } }}
            >
              Privacy Policy
            </Link>
          </Box>
          <Typography
            variant="body2"
            sx={{ marginTop: { xs: "16px", md: "0" } }}
          >
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
