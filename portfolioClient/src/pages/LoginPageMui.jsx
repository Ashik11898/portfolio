import React, { useState } from "react";
import {Container,TextField,Button,Box,CssBaseline} from "@mui/material";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LoginPageMui = ({setShowInputScreen,closePopup}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate()
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (validateForm()) {
      // Perform login logic
      console.log("Login successful with data:", formData);
      try {
        const response = await axios.post('http://localhost:5000/portfolio_api/login', formData);
        let {_id}=response.data?.userdata
        localStorage.setItem("userid",_id)
        // setShowInputScreen(true)
        navigate("/edit-screen")
        console.log('Response:', response.data.userdata);
      } catch (error) {
        console.error('Error:', error);
        localStorage.removeItem("userid")
      }

    }
  };

  return (
    <div className="login-parent-container">
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          padding:2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:"#f4f4f4"
        }}
      >
        
       
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 3, width: "100%" }}
        >
          <TextField
            margin="normal"
            className="input-field-login"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}

          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              bgcolor: "primary.main",
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Sign In
          </Button>
          
        </Box>
      </Box>
      </Container>
    </div>
  
  );
};

export default LoginPageMui;
