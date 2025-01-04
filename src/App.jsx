import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VideoDetails from "./pages/VideoDetails";
import AllVideosPage from "./pages/AllVideosPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UploadVideoPage from "./pages/admin/UploadVideoPage";
import "./App.css";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin/*"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        >
          <Route path="upload-video" element={<UploadVideoPage />} />
        </Route>
        <Route
          path="*"
          element={
            <>
              <Header />
             
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/video/:id" element={<VideoDetails />} />
                  <Route path="/videos" element={<AllVideosPage />} />
                  
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />
                </Routes>
              
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
