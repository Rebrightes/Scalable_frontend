import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const token = localStorage.getItem("token");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "var(--primary-color)", maxheight: "64px" }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{ paddingLeft: "16px", paddingRight: "16px" }}
        >
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              padding: "0 5px",
              color: "var(--secondary-color)",
              width: "fit-content",
              textDecoration: "none",
              marginRight: isMobile ? "auto" : "16px",
              borderBottom: "2px dotted var(--secondary-color)",
            }}
          >
            Sovies
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleMenuOpen}
                sx={{ marginLeft: "auto" }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                slotProps={{
                  paper: {
                    sx: {
                      width: "150px",
                    },
                  },
                }}
              >
                <MenuItem onClick={handleMenuClose} component={Link} to="/">
                  Home
                </MenuItem>
                <MenuItem
                  onClick={handleMenuClose}
                  component={Link}
                  to="/videos"
                >
                  All Videos
                </MenuItem>

                <Box
                  sx={{ width: "100%", borderBottom: "1px solid #ccc", my: 1 }}
                />
                {!token ? (
                  <>
                    <MenuItem
                      onClick={handleMenuClose}
                      component={Link}
                      to="/signup"
                    >
                      <Button
                        color="inherit"
                        sx={{
                          color: "var(--primary-color)",
                          backgroundColor: "var(--secondary-color)",
                          width: "100%",
                          textAlign: "left",
                          justifyContent: "flex-start",
                        }}
                      >
                        Sign Up
                      </Button>
                    </MenuItem>
                    <MenuItem
                      onClick={handleMenuClose}
                      component={Link}
                      to="/login"
                    >
                      <Button
                        color="inherit"
                        sx={{
                          color: "var(--primary-color)",
                          backgroundColor: "var(--secondary-color)",
                          width: "100%",
                          textAlign: "left",
                          justifyContent: "flex-start",
                        }}
                      >
                        Login
                      </Button>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem onClick={handleLogout}>
                    <Button
                      color="inherit"
                      sx={{
                        color: "var(--primary-color)",
                        backgroundColor: "var(--secondary-color)",
                        width: "100%",
                      }}
                    >
                      Logout
                    </Button>
                  </MenuItem>
                )}
              </Menu>
            </>
          ) : (
            <>
              <Box
                sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}
              >
                <Button
                  sx={{ color: "var(--secondary-color)" }}
                  component={Link}
                  to="/"
                >
                  Home
                </Button>
                <Button
                  sx={{ color: "var(--secondary-color)" }}
                  component={Link}
                  to="/videos"
                >
                  All Videos
                </Button>
              </Box>
              {!token ? (
                <>
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                  <Button color="inherit" component={Link} to="/signup">
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              )}
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
