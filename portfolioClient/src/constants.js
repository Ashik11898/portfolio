export const RESUME_JSON= {
    "technical_skills": [
      "HTML5", "CSS3", "JAVASCRIPT", "jquery","TYPESCRIPT", "PHP", "NODE JS","Express js", "Mongo DB", "BOOTSTRAP", "MUI", "SCSS","tailwind css", 
        "REACT JS", "REDUX", "REACT QUERY","NEXT JS", "REST API", "GIT", 
       , "Responsive Web Design","Figma"
    ],
    "experience": [
      {
        "company": "BROADBIL TECHNOLOGIES",
        "location": "Mauritius",
        "role": "REACT JS DEVELOPER",
        "duration": "AUG 2023 - PRESENT",
        "projects":[{
          "name":"Mautourco-B2B",
          "responsibilities": [
            "Developed a B2B travel booking platform for seamless agency and client reservations.",
            "Enabled internal user functionality for managing bookings on behalf of agencies.",
            "Integrated a notification system for automated task alerts across departments.",
            "Designed a user-centric interface to enhance booking management and stakeholder communication.",
            "Improved operational efficiency and client satisfaction through streamlined processes.",
          ],
          "technologies": ["Typescript", "React", "Redux", "React-Query", "MUI", "SCSS"]
        }],
       
      },
      {
        "company": "TATA ELXSI",
        "location": "India",
        "role": "UI DEVELOPER",
        "duration": "JAN 2022 - JULY 2023",
        "projects": [
          {
            "name": "Truckonnect",
            "responsibilities": [
              "Delivered responsive, cross browser compatible product by gathering requirements from PM/PO team",
              "Involved in Sprint Planning and provided proper estimates for the requirements",
              "Responsible for implementing Secure code with industry standards for the product and responsible for PR approvals for the front-end code base",
              "Implemented Google Maps API and Google Analytics in the product",
              "Using Google Maps for Live tracking the current locations of the truck and implemented features for viewing the history of a truck’s route.",
              "Reduced page load time using Caching concepts by using react-query for optimal user perform",
            ],
            "technologies": ["Javascript", "React", "Redux", "Node"]
          }
        ]
      },

      {
        "company": "GP STRATEGIES INDIA PVT LTD",
        "location": "India",
        "role": "E-LEARNING DEVELOPER",
        "duration": "JULY 2019 - DEC 2021",
        "projects": [
          {
            "name": "Ralph Lauren",
            "responsibilities": [
              "Proficient in creating web pages as per client’s design." ,
              "Developing audio synchronization with text and animation",
              "Developing click and drag-drop games. ",
              "Extensively worked on animation related interaction using jQuery without plugins.",
              "Have extensive experience in designing and development of UI for Mobile/iPad device",
            ],
            "technologies": ["HTML", "CSS", "JavaScript", "jQuery"]
          },
          {
            "name": "Rolls-Royce",
            "responsibilities": [
              "ROLLS - ROYCE - Rolls-Royce Motor Cars Limited is a British Luxury automobile maker. We developed an e learning Project for their employees to learn about their companyproductivity, safety measures and show some demo How to handle their company tools .", 
              "Proficient in creating web pages as per client’s design." ,
              "Developing audio synchronization with text and animation",
              "Developing click and drag-drop games. ",
            ],
            "technologies": ["HTML", "CSS", "JavaScript", "jQuery"]
          }
        ]
      },



      {
        "company": "HCL TECHNOLOGIES",
        "location": "India",
        "role": "SENIOR FRONTEND DEVELOPER",
        "duration": "FEB 2021 - JAN 2022",
        "projects": [
          {
            "name": "RM Banking Application - CITI Bank",
            "responsibilities": [
              "Translated wireframes into high-quality, reusable code using HTML5 and CSS3.",
              "Implemented custom business logic through Backbone while adhering to coding standards.",
              "Developed responsive and cross-browser compatible web applications for RM users in the banking domain.",
              "Conducted end-to-end unit testing for all modules to ensure functionality before handing over to the testing team.",
              "Delivered seamless user experiences by ensuring UI/UX consistency and responsiveness across devices.",
              "Prepared and maintained test scripts to support robust unit testing processes.",
            ],
            "technologies": ["HTML5", "CSS3", "Backbone"]
          }
        ]
      },
      {
        "company": "HOGARTH WORLDWIDE",
        "location": "India",
        "role": "ASSOCIATE FRONTEND DEVELOPER",
        "duration": "Aug 2021 - Jun 2022",
        "projects": [
          {
            "name": "BAYER",
            "responsibilities": [
              "Migrated old web app to new Angular app",
              "Developed reusable code and enhanced UI/UX",
              "Mentored junior developers"
            ],
            "technologies": ["Javascript", "React", "Redux", "Node"]
          },
          {
            "name": "RM Banking Application",
            "responsibilities": [
              "Developed responsive web application",
              "Handled unit testing before handover"
            ],
            "technologies": ["Javascript", "React", "Redux", "Node"]
          }
        ]
      },
     
     
     
    ],
    "education": [
      {
        "degree": "MSc Computer Science",
        "institution": "University of Madras",
        "duration": "2019 - 2021"
      },
      {
        "degree": "BSc Computer Science",
        "institution": "University of Madras",
        "duration": "2016 - 2019"
      },
      {
        "degree": "Higher Secondary Education",
        "institution": "St Sebastian Matriculation Higher Secondary School",
        "duration": "2015 - 2016"
      }
    ],
    "personal":{
        "name":"MOHAMED ASHIK",
        "experience":"5.5",
        "one_line":"Building Seamless Frontend & Robust Backend with Modern JavaScript Technologies",
        "role":["React Developer","Web Developer","Frontend Developer","Full stack Developer","MERN Stack developer"],
        "role_heading":["Expert React & MERN Stack Developer: Crafting Scalable Frontend and Robust Backend for Dynamic Web Solutions."]
    }
}
export const FIELDS=[
  {id:1,type:"text",placeholder:"Your Name",label:"Name",required:true},
  {id:2,type:"email",placeholder:"Your@email.com",label:"Email",required:true},
]
export const INITIAL_RESUME_FIELDS = {
  technical_skills: "",
  experience: [
    { 
      company: "", 
      location: "",
       role: "", 
       duration: "" ,
       projects:[{
          name: "",
          responsibilities: "",
          technologies: "",
      }]
    }
  ],
  education: [{ degree: "", institution: "", duration: "" }],
  personal: {
    name: "",
    experience: "",
    one_line: "",
    role: "",
    role_heading: "",
  },

}

  

