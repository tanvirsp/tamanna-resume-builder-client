import '../../styles/template4.css';
import linePic from '../../assets/line.jpg';
import pic2 from '../../assets/demo.png'


import { Box, Button, Paper, Typography, CircularProgress } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { saveAs } from "file-saver";
import Confetti from "react-confetti";
import github from "../../assets/github.png";
import leetcode from "../../assets/leetcode.png";
import codechef from "../../assets/codechef.png";
import codeforces from "../../assets/codeforces.png";
import DownloadIcon from "@mui/icons-material/Download";
import "../../styles/resumetemplate1.css";
import { Link, useNavigate } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import moment from "moment";
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
// import { saveAs } from "file-saver";
import html2pdf from "html2pdf.js";
import Feedback from "../Feedback";
import '../../styles/template3.css'
import cvPic from '../../assets/cv-pic.jpg'

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';



const Template4 = () => {



     const ref = useRef();
      const profile = useSelector((state) => state.profileDetails);
      const education = useSelector((state) => state.educationDetails);
      const projects = useSelector((state) => state.projectDetails);
      const experience = useSelector((state) => state.experienceDetails);
      const extraDetails = useSelector((state) => state.extraDetails);
      const [congratsVisible, setCongratsVisible] = useState(false);
      const [loading, setLoading] = useState(false);
      const [open, setOpen] = useState(false);
      const [feedbackShown, setFeedbackShown] = useState(false);
    
      const nagivate = useNavigate()
    
      useEffect(() => {
        const feedbackAlreadyShown = localStorage.getItem('feedbackShown');
        if (feedbackAlreadyShown) {
          setFeedbackShown(true);
        }
      }, []);
    
      
    

const handleDownload = async () => {
  try {
    const resumeContainer = document.querySelector(".print-area");
    const img = resumeContainer.querySelector(".imgBB");

    if (resumeContainer && img && img.src) {
      setLoading(true);

      // Convert image to Base64 and update src
      const base64Image = await getBase64ImageFromURL(img.src);
      img.setAttribute("src", base64Image);

      const opt = {
        margin: 0.1,
        filename: 'user-resume.pdf',
        image: { type: 'jpeg', quality: 1.00 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' },
      };

      html2pdf().set(opt).from(resumeContainer).save().then(() => {
        setLoading(false);
        setCongratsVisible(true);
        setTimeout(() => setCongratsVisible(false), 5000);
      });
    } else {
      console.error("Print Area or image not found.");
      setLoading(false);
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
    setLoading(false);
  }
};


  const getBase64ImageFromURL = async (url) => {
  const res = await fetch(url, { mode: 'cors' });
  const blob = await res.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
};



  return (
    <section className="resume-container">
    <div className='print-area'>

      <div >
        <div className="name-title">
          <div>
             <img className='imgBB' style={{borderRadius: "20px"}}  width="130px" src={profile?.picture} alt="Profile picture" />
          </div>
          <div>
            <h1>{profile?.firstName} {profile?.lastName} </h1>
            <p className="job-title">{education?.branch}</p>
          </div>
        </div>
      </div>
      <div>
        <img width="100%" src={linePic} alt="line" />
      </div>
      

      <div className="content">
        <div className="left-column">
          <section>
            <h2>About Me</h2>
             <p style={{marginTop: "20px"}}>{profile.aboutMe}</p>
          </section>

        { /*  Achievement */}

          {
             extraDetails?.achievements?.length > 0 && 
             <section>
              <h2>Achievements</h2>
              <ul>
                 {
                    extraDetails?.achievements?.map((other, index) => (
                        <li style={{padding:"5px 0"}} key={index}>  {other}  </li>  
                    ))
                  }
              </ul>
            </section>
          }



        { /* Other Skills  */}

          {
             extraDetails?.skills.other?.length > 0 && 
             <section>
              <h2>Skills</h2>
              <ul>
                 {
                    extraDetails?.skills.other?.map((other, index) => (
                        <li style={{padding:"5px 0"}} key={index}>  {other}  </li>  
                    ))
                  }
              </ul>
            </section>
          }


  
           {/* Languages */}
          {
             extraDetails?.skills?.languages?.length > 0 && 
             <section>
              <h2>Languages</h2>
              <ul>
                 {
                    extraDetails?.skills?.languages?.map((item, index) => (
                        <li style={{padding:"5px 0"}} key={index}>  {item}  </li>  
                    ))
                  }
              </ul>
            </section>
          }




        {/* extra Co Curricular */}
          {
             extraDetails?.extraCoCurricular?.length > 0 && 
             <section>
              <h2>Extra Curricular Activities</h2>
              <ul>
                 {
                    extraDetails?.extraCoCurricular?.map((item, index) => (
                        <li style={{padding:"5px 0"}} key={index}>  {item}  </li>  
                    ))
                  }
              </ul>
            </section>
          }
          
{/* Contact Section */}
          <section>
            <h2>Contact</h2>
            <p style={{padding: "5px 0", marginTop: "10px" }}> <PhoneAndroidIcon fontSize="10px" /> {profile?.mobile}</p>
            <p style={{padding: "5px 0"}}> <MailOutlineIcon fontSize='10px' /> {profile?.email}</p>
            <p style={{padding: "5px 0"}}>  <LocationOnIcon fontSize='10px' /> {profile?.address}</p>
     
          </section>
        </div>

        <div className="right-column">
          <section>
            <h2>Education</h2>
           
              <div className="entry">
                <p className="duration">{education?.startYear}- {education?.endYear}</p>
                <p><strong>{education?.college}</strong></p>
                <p style={{padding: "3px 0"}}>Field of Study: {education?.field}</p>
                <p style={{padding: "3px 0"}}>Branch: {education?.branch}</p>
                <p style={{padding: "3px 0"}}> <span>City: {education?.city} </span> | <span>CGPA: {education?.grades}</span></p>
              </div>
              <hr />
              <div className="entry">
                <p className="duration">{education?.startYear2}- {education?.endYear2}</p>
                <p><strong>{education?.higherCollege}</strong></p>
                <p style={{padding: "3px 0"}}> <span>Board: {education?.board1} </span> | <span>GPA: {education?.hscGPA}</span></p>
                <p style={{padding: "3px 0"}}> City: {education?.city2} </p>
              </div>
                <hr />
              <div className="entry">
                <p className="duration">{education?.startYear3}- {education?.endYear3}</p>
                <p><strong>{education?.school}</strong></p>
                <p style={{padding: "3px 0"}}> <span>Board: {education?.board2} </span> | <span>GPA: {education?.sscGPA}</span></p>
                <p style={{padding: "3px 0"}}> City: {education?.city2} </p>
              </div>
           
           
          </section>

          <section>
            {
              experience?.length > 0 && <div>
               <h2>Work Experience</h2>
               {
                experience?.map( (item, index) =>(
                  <div key={index} className="entry">
                    <p className="duration">{item?.start_date}- {item?.end_date}</p>
                    <p  style={{fontSize: "18px",  }}><strong>{item?.institute}</strong></p>
                    <p style={{fontStyle: "italic", marginBottom: "5px"}}>{item?.role}</p>
                    <p>{item?.desc}</p>
                    <br />
                    <hr />
                  </div>
                  
                ))
               }
              </div>
      
            }
           

          </section>
        </div>
      </div>
    </div>

     {/* Footer Button */}
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <Button
            onClick={()=>nagivate("/templates")}
            variant="contained"
            sx={{
            margin: "20px",
            borderRadius: "20px",
            width: "12rem",
            backgroundColor: "var(--btn)",
            color: 'black',
            '&:hover': { backgroundColor: "var(--btnHover)" }
            }}
            >
            Change Template
            </Button>
            <Button
            variant="contained"
            sx={{
                margin: "20px",
                borderRadius: "20px",
                width: "12rem",
                backgroundColor: "var(--btn)",
                color: 'black',
                '&:hover': { backgroundColor: "var(--btnHover)" }
            }}
            onClick={handleDownload}
            endIcon={<DownloadIcon />}
            className="download-button"
            disabled={loading} // Disable button while loading
            >
            {loading ? ( // Conditionally render loading indicator
                <CircularProgress size={24} color="inherit" />
            ) : (
                "Download"
            )}
            </Button>
        </div>
    </section>
  );
};

export default Template4;
