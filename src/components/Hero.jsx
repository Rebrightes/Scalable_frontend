import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Box from "@mui/material/Box";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import hero1 from "../assets/images/gettyimages-577325078-612x612.jpg";
import hero2 from "../assets/images/gettyimages-1393890923-612x612.jpg";

const Hero = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
      {[hero1, hero2].map((hero, index) => (
        <Box
          key={index}
          sx={{
            height: "60vh",
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1)), url(${hero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "left",
            color: "white",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            variant={isSmallScreen ? "h6" : "h2"}
            component="h1"
            sx={{
              backgroundColor: "rgba(255, 254, 254, 0.5)",
              padding: "10px 20px",
              borderRadius: "5px",
              color: "black",
            }}
          >
            Watch the best movies and TV shows
          </Typography>
        </Box>
      ))}
    </Carousel>
  );
};

export default Hero;
