import React, { useState,useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import InputSection from '../components/InputSection';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const InputScreenPage = ({ data }) => {
  const [formData, setFormData] = useState(data);
  const navigate = useNavigate()

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  const handleChange = (e, section, index, key) => {
    const value = e.target.value;
    if (section === "personal") {
      setFormData((prevState) => ({
        ...prevState,
        personal: {
          ...prevState.personal,
          [e.target.name]: value,
        },
      }));
    } else if (Array.isArray(formData[section])) {
      const updatedSection = [...formData[section]];
      updatedSection[index][key] = value;
      setFormData((prevState) => ({
        ...prevState,
        [section]: updatedSection,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [section]: value,
      }));
    }
  };

  const addField = (section, fieldTemplate) => {
    setFormData((prevState) => ({
      ...prevState,
      [section]: [...prevState[section], fieldTemplate],
    }));
  };

  const removeField = (section, index) => {
    setFormData((prevState) => {
      const updatedSection = prevState[section].filter((_, i) => i !== index);
      return {
        ...prevState,
        [section]: updatedSection,
      };
    });
  };

  const handleSubmit = async() => {
    console.log("Form Data Submitted:", formData);
    let userId = localStorage.getItem("userid")
    formData.technical_skills = formData.technical_skills.split(',');
    let payload = {...formData,userid:userId }
    try {
      const response = await axios.post('http://localhost:5000/portfolio/resume_updates', payload);
      
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='input-screen-container'>
      <Button variant="contained" color="primary" onClick={()=>navigate("/",{ replace: true })}>Go to Home Page</Button>
      <Container maxWidth="md" sx={{ mt: 4, p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#f9f9f9"}}>
      <Typography variant="h4" gutterBottom align="center" color='red'>
        Resume Input Form
      </Typography>

      <Box mb={3}>
        <Typography variant="h6" color='red'>Technical Skills</Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Enter technical skills separated by commas"
          value={formData.technical_skills}
          onChange={(e) => handleChange(e, "technical_skills")}
          variant="outlined"
          sx={{ mt: 1 }}
        />
      </Box>

      <InputSection
        title="Experience"
        items={formData.experience}
        fields={[
          { label: "Company", key: "company" },
          { label: "Location", key: "location" },
          { label: "Role", key: "role" },
          { label: "Duration", key: "duration" },
          {
            label: "Projects",
            key: "projects",
            isNested: true, // Indicate nested data
            fields: [
              { label: "Project Name", key: "name" },
              { label: "Responsibilities", key: "responsibilities" },
              { label: "Technologies Used", key: "technologies" },
            ], // Use projectFields for nested projects
          },
        ]}
        handleChange={handleChange}
        addField={() =>
          addField("experience", {
            company: "",
            location: "",
            role: "",
            duration: "",
            projects: [
              { name: "", responsibilities: "", technologies: "" },
            ],
          })
        }
        removeField={removeField}
/>


      <InputSection
        title="Education"
        items={formData.education}
        fields={[
          { label: "Degree", key: "degree" },
          { label: "Institution", key: "institution" },
          { label: "Duration", key: "duration" },
        ]}
        handleChange={handleChange}
        addField={() => addField("education", { degree: "", institution: "", duration: "" })}
        removeField={removeField}
      />

      <Box mb={3}>
        <Typography variant="h6" color='red'>Personal Details</Typography>
        {[
          { label: "Name", key: "name" },
          { label: "Experience (in years)", key: "experience" },
          { label: "One-Line Description", key: "one_line" },
          { label: "Preferred Roles", key: "role" },
          { label: "Role Heading", key: "role_heading" },
        ].map(({ label, key }) => (
          <TextField
            key={key}
            fullWidth
            label={label}
            name={key}
            value={formData.personal[key]}
            onChange={(e) => handleChange(e, "personal")}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        ))}
      </Box>

      <Box textAlign="center">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>
      </Container>
    </div>
   
  );
};

export default InputScreenPage;
