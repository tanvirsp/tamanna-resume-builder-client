import React, { useState } from 'react';
import resume1 from '../assets/resume_template1.jpg';
import resume2 from '../assets/resume_template2.jpg';
import resume3 from '../assets/resume_template3.jpg';
import resume4 from '../assets/resume_template4.jpg';
import { useNavigate } from 'react-router-dom';
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import '../styles/template.css';

const Templates = () => {
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [template, setTemplate] = useState(1);
    const navigate = useNavigate();

    const handleTemplateClick = (template) => {
        setSelectedTemplate(template);
    };

    const handleClose = () => {
        setSelectedTemplate(null);
    };

    const handleResumeClick = (templateNumber) => {
        navigate(`/resume/template=${templateNumber}`);
    };

    return (
        <div className='container'>
            <h2 className='heading'>Choose A Templates</h2>
            <div className="template-container">
                <div className='template-item' onClick={() => handleTemplateClick(resume1)}>
                    <img src={resume1} alt="Template 1"  />
                    <button onClick={() => handleResumeClick(1)}>Use Template</button>
                </div>
                <div className='template-item' onClick={() => handleTemplateClick(resume2)}>
                    <img src={resume2} alt="Template 2"  />
                    <button onClick={() => handleResumeClick(2)}>Use Template</button>
                </div>
                <div className='template-item' onClick={() => handleTemplateClick(resume3)}>
                    <img src={resume3} alt="Template 3"  />
                    <button onClick={() => handleResumeClick(3)}>Use Template</button>
                </div>
                <div className='template-item' onClick={() => handleTemplateClick(resume4)}>
                    <img src={resume4} alt="Template 4"  />
                    <button onClick={() => handleResumeClick(4)}>Use Template</button>
                </div>
                
              
            </div>
            {selectedTemplate && (
                <div className="template-preview-overlay" onClick={handleClose}>
                    <div className="template-preview">
                        <IconButton onClick={handleClose} style={{ position: "absolute", top: "10px", right: "10px" }}>
                            <CloseIcon />
                        </IconButton>
                        <img src={selectedTemplate} alt="Selected Template" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Templates;
