import { useState } from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { uploadVideo } from "../../services/api";

const categories = [
  "Comedy",
  "Action",
  "Drama",
  "Horror",
  "Sci-Fi",
  "Thriller",
];

const UploadVideoPage = () => {
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!title || !category || !file) {
      setError("All fields are required");
      return;
    }

    const videoData = {
      title,
      category,
      video: file,
    };

    setLoading(true);
    try {
      await uploadVideo(videoData, location.pathname);
      setSuccess("Video uploaded successfully");
      setError("");
      setTitle("");
      setCategory("");
      setFile(null);
      setVideoPreview(null);
    } catch (error) {
      setError("Error uploading video");
      console.error("Error uploading video:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setFile(file);
      setVideoPreview(URL.createObjectURL(file));
    } else {
      setError("Please upload a valid video file");
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{ flexGrow: 1, paddingTop: "32px", paddingBottom: "32px" }}
    >
      <Card sx={{ padding: "32px", boxShadow: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "32px" }}>
          Upload Video
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            marginBottom: "24px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "var(--primary-color)",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "var(--primary-color)",
              },
            },
          }}
        />
        <TextField
          select
          label="Category"
          variant="outlined"
          fullWidth
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            marginBottom: "24px",
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "var(--primary-color)",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "var(--primary-color)",
              },
            },
          }}
        >
          {categories.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        {videoPreview && (
          <CardMedia
            component="video"
            controls
            src={videoPreview}
            sx={{ marginBottom: "24px", borderRadius: "8px" }}
          />
        )}
        <Box sx={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
          <Button
            variant="contained"
            component="label"
            sx={{
              color: "white",
              backgroundColor: "var(--primary-color)",
              "&:hover": {
                backgroundColor: "var(--primary-color)",
              },
            }}
          >
            Upload File
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          <Button
            variant="contained"
            onClick={handleUpload}
            sx={{
              color: "white",
              backgroundColor: "var(--primary-color)",
              "&:hover": {
                backgroundColor: "var(--primary-color)",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
        </Box>
        {error && (
          <Typography variant="body1" color="error" sx={{ marginTop: "16px" }}>
            {error}
          </Typography>
        )}
        {success && (
          <Typography
            variant="body1"
            color="success"
            sx={{ marginTop: "16px" }}
          >
            {success}
          </Typography>
        )}
      </Card>
    </Container>
  );
};

export default UploadVideoPage;
