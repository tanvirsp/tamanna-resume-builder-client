import '../../styles/template4.css';
import linePic from '../../assets/line.jpg'


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
    
    
      const handleDownload = () => {
        try {
          const resumeContainer = document.querySelector(".print-area");
          if (resumeContainer) {
            setLoading(true);
            const opt = {
              margin: 0.1,
              filename: 'user-resume.pdf',
              image: { type: 'jpeg', quality: 1.00 },
              html2canvas: { scale: 4 },
              jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
              // pagebreak: { mode: ['avoid-all', 'css', 'legacy'] } // Ensure proper page breaks
            };
    
            html2pdf().set(opt).from(resumeContainer).save().then(() => {
              setLoading(false); // End loading state after PDF is generated
              setCongratsVisible(true); // Trigger Confetti effect
    
              // Reset confetti after 5 seconds
              setTimeout(() => {
                setCongratsVisible(false);
              }, 5000);
            });
          } else {
            console.error("Print Area not found.");
            setLoading(false);
          }
        } catch (error) {
          console.error("Error generating PDF:", error);
          setLoading(false);
        }
      };
    






  return (
    <section className="resume-container">
        <main className='print-area'>

       
      <div >
        <div className="name-title">
          <h1>Robert Williams</h1>
          <p className="job-title">EMERGENCY NURSE</p>
        </div>
      </div>
      <div>
        <img width="100%" src={linePic} alt="" />
      </div>

      <div className="content">
        <div className="left-column">
          <section>
            <h2>About Me</h2>
            <p><strong>The origins of the first constellations dateback to prehistoric times.</strong></p>
            <p>Their purpose was to tell stories of their beliefs, experiences, creation, or mythology. The recognition of constellations has changed over time. They varied in size or shape, others became popular and then were forgotten, and some were limited to a single culture.</p>
          </section>

          <section>
            <h2>Skills</h2>
            <ul>
              <li>Clinical Skills</li>
              <li>Empathy and Compassion</li>
              <li>Teamwork</li>
              <li>Attention to Detail</li>
              <li>Ethical Practice</li>
            </ul>
          </section>

          <section>
            <h2>References</h2>
            <p>Name Surname / Position<br />00 111 222 333</p>
            <p>Name Surname / Position<br />00 111 222 333</p>
            <p>Name Surname / Position<br />00 111 222 333</p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>000 111 222 333</p>
            <p>youremail@email.com</p>
            <p>www.website.com</p>
          </section>
        </div>

        <div className="right-column">
          <section>
            <h2>Education</h2>
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="entry">
                <p className="duration">2022-2024</p>
                <p><strong>Title Name / Place Name</strong></p>
                <p>The origins of the first constellations dateback to prehistoric times. Their purpose was to tell stories of their beliefs, experiences, creation, or mythology.</p>
              </div>
            ))}
          </section>

          <section>
            <h2>Work Experience</h2>
            {[1, 2, 3, 4].map((_, i) => (
              <div key={i} className="entry">
                <p className="duration">2022-2024</p>
                <p><strong>Work Position / Company Name</strong></p>
                <p>The origins of the first constellations dateback to prehistoric times. Their purpose was to tell stories of their beliefs, experiences, creation, or mythology.</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>

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
