import { Button,  CircularProgress } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import Confetti from "react-confetti";

import DownloadIcon from "@mui/icons-material/Download";
import "../../styles/resumetemplate1.css";
import { useNavigate } from "react-router-dom";
import moment from "moment";

import html2pdf from "html2pdf.js";
import '../../styles/template3.css'

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';



export default function Template3() {
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
    <>
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        numberOfPieces={congratsVisible ? 600 : 0}
      />

      <section className=" template3 ">
        <div className="print-area ">
            <div className="template3-container">
                <div className="top-section-left">
                    <img className="profile3 imgBB" src={profile?.picture} alt="Profile picture" />

                    <div className="contact3">
                        <h4 className="section-title-3">Contact</h4>
                        <div className="lineOne3"></div>
                            <p style={{marginTop: "10px" }}> <PhoneAndroidIcon fontSize="10px" /> {profile?.mobile}</p>
                            <p> <MailOutlineIcon fontSize='10px' /> {profile?.email}</p>
                            <p>  <LocationOnIcon fontSize='10px' /> {profile?.address}</p>
                        <br />


                        

                        <div className="lineTwo3"></div>
                    </div>
                </div>
                <div className="top-section-right" >
                    <h2 className="t-name-3"> {profile.firstName} <br /> <span style={{fontWeight:"600"}}>{profile.lastName}</span> </h2>
                    <div className="lineTwo3"></div>
                    <br />
                    <br />
                    <h4 className="section-title-3">About</h4>
                    <div className="lineOne3"></div>
                    <p style={{marginTop: "20px"}}>{profile.aboutMe}</p>
                </div>
                 
            </div>
            <div className="template3-container">
                <div className="bottom-section-left">
                     {/* Language  */}
                   {
                    extraDetails?.extraCoCurricular?.length > 0 && 
                     <div>
                        <div className="skill-section-3">
                            <h4 className="skill-title-3">Language</h4>
                            <div style={{height: "1px",width: "70%",  backgroundColor: "rgb(131, 129, 129)"}}></div>                         
                        </div>
                        <ul className="t-3-other">
                             {
                                extraDetails?.extraCoCurricular?.map((item, index) => (
                                    <li key={index}>  {item}  </li>
                                    
                                ))
                            }
                        </ul>
                    </div>
                   }

                    <br />
                   {/* Other Skills  */}
                   {
                    extraDetails?.skills.other?.length > 0 && 
                     <div>
                        <div className="skill-section-3">
                            <h4 className="skill-title-3">Other Skills</h4>
                             <div style={{height: "1px",width: "65%",  backgroundColor: "rgb(131, 129, 129)"}}></div>
                                                      
                        </div>
                        <ul className="t-3-other">
                             {
                                extraDetails?.skills.other?.map((other, index) => (
                                    <li key={index}>  {other}  </li>  
                                ))
                            }
                        </ul>
                    </div>
                   }
                            <br />
                   {/* Achivement  */}
                   {
                    extraDetails?.achievements?.length > 0 && 
                     <div>
                        <div className="skill-section-3">
                            <h4 className="skill-title-3">Achivement</h4>
                             <div style={{height: "1px",width: "65%",  backgroundColor: "rgb(131, 129, 129)"}}></div>
                        </div>
                        <ul className="t-3-other">
                             {
                                extraDetails.achievements?.map((item, index) => (
                                    <li key={index}>  {item}  </li>   
                                ))
                            }
                        </ul>
                    </div>
                   }
                            <br />
                   {/* Extra Curricular  */}
                   {
                    extraDetails?.extraCoCurricular?.length > 0 && 
                     <div>
                        <div className="skill-section-3">
                            <h4 className="skill-title-3">Extra Curricular</h4>
                            <div style={{height: "1px",width: "54%",  backgroundColor: "rgb(131, 129, 129)"}}></div>                         
                        </div>
                        <ul className="t-3-other">
                             {
                                extraDetails?.extraCoCurricular?.map((item, index) => (
                                    <li key={index}>  {item}  </li>
                                    
                                ))
                            }
                        </ul>
                    </div>
                   }
                   
                </div>
                <div className="bottom-section-right" >
                {/* Education */}

                <div className="edu-section">
                    <div className="skill-section-3">
                        <h4 className="skill-title-3">Education</h4>
                        <div style={{height: "1px",width: "74%",  backgroundColor: "rgb(131, 129, 129)"}}>        </div>                         
                    </div>
                    <br />
                    {/* Part 1 */}
                    <div className="clg-section-1">
                    <div className="info-1">
                        <div className="clg-name">
                        <p>{education?.college}</p>
                        </div>
                        <div className="degree">
                        <p>{education.field && education.branch && `${education.field} in ${education.branch}`}</p>
                        </div>
                    </div>
                    <div className="info-2">
                        <div className="year">
                        <p>{education.startYear && education.endYear && `${education.startYear} - ${education.endYear}`}</p>

                        </div>
                        <div className="cgpa">
                        {education?.grades && <p>CGPA: {education?.grades}</p>}
                        </div>
                    </div>
                    </div>
                    <hr />
                    {/* Part 2 */}
                    <div className="clg-section-2">
                    <div className="info-1">
                        <div className="clg-name">
                        <p>{education?.higherCollege}</p>
                        </div>
                        <div className="degree">
                        <p>{education?.board1}</p>
                        </div>
                    </div>
                    <div className="info-2">
                        <div className="year">
                        <p>{education.startYear2 && education.endYear2 && `${education.startYear2} - ${education.endYear2}`}</p>
                        </div>
                        <div className="cgpa">
                        {education.percentage && <p>Per: {education.percentage}%</p>}
                        </div>
                    </div>
                    </div>
                    <hr />
                    {/* Part 3 */}
                    <div className="clg-section-3">
                    <div className="info-1">
                        <div className="school-name">
                        <p>{education?.school}</p>
                        </div>
                        <div className="degree">
                        <p>{education?.board2}</p>
                        </div>
                    </div>
                    <div className="info-2">
                        <div className="year">
                        <p>{education.startYear3 && education.endYear3 && `${education.startYear3} - ${education.endYear3}`}</p>

                        </div>
                        <div className="cgpa">
                        {education.percentage2 && <p>Per: {education.percentage2}%</p>}
                        </div>
                    </div>
                    </div>
                </div>
                {/* Experience */}
                <br />
                
                    {experience.length > 0 && (
                        <div>
                            <div className="skill-section-3">
                                <h4 className="skill-title-3">Experience</h4>
                                <div style={{height: "1px",width: "74%",  backgroundColor: "rgb(131, 129, 129)"}}>        </div>                         
                            </div>
                            <br />
                            <div className="expr">                        
                                <div className="expr-section">
                                {experience.map((exp, index) => (
                                    <div key={index}>
                                    <div className='role-date'>
                                        <p id="role">{exp.role}</p>
                                        <p id="date">
                                        {moment(exp.start_date).format("MMM-YYYY")} - {moment(exp.end_date).format("MMM-YYYY")}
                                        </p>
                                    </div>
                                    <div className="company">
                                        <p>At {exp.institute}</p>
                                    </div>
                                    <div className="expr-desc">
                                        <ul>
                                        {exp?.desc?.split('\n')?.map((line, index) => (
                                            <li key={index}>{line}</li>
                                        ))}
                                        </ul>
                                    </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    )}
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
     
    </>
  );
}
