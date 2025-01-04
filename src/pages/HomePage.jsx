import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import VideoPlayer from "../components/VideoPlayer";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import { fetchVideos } from "../services/api";

const HomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isVerySmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [videoData, setVideoData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const videos = await fetchVideos();
        setVideoData(videos);
        console.log("Videos: ", videos);
      } catch (error) {
        setError("Failed to load videos");
        console.error("Error loading videos:", error);
      }
    };

    loadVideos();
  }, []);

  return (
    <div className="home-page">
      <Hero />
      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, paddingTop: "16px", paddingBottom: "16px" }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginBottom: 4 }}
        >
          <Grid size={12} marginTop={4}>
            <h2>Guest Favourites </h2>
          </Grid>
          {videoData.slice(0, 4).map((video) => (
            <Grid key={video.id} size={{ xs: 12, sm: 6, md: 4 }}>
              {error && (
                <Typography
                  color="error"
                  variant={
                    isVerySmallScreen ? "body2" : isSmallScreen ? "h6" : "h4"
                  }
                  sx={{ fontSize: "12px" }}
                >
                  {error}
                </Typography>
              )}
              <VideoPlayer video={video} />
            </Grid>
          ))}
          <Grid size={12} sx={{ textAlign: "center", marginTop: 2 }}>
            <Button
              variant="contained"
              component={Link}
              to="/videos"
              sx={{
                marginLeft: "16px",
                color: "var(--primary-color)",
                backgroundColor: "var(--primary-color-light)",
                "&:hover": {
                  backgroundColor: "var(--primary-color-light)",
                },
                borderRadius: "0px",
              }}
            >
              Go to videos
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
