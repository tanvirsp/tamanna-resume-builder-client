import React, { useEffect, useState } from 'react';
import ResumeTemplate1 from '../components/ResumeTemplates/Template1';
import ResumeTemplate2 from '../components/ResumeTemplates/Template2';
import { useParams } from 'react-router-dom';
import Template3 from '../components/ResumeTemplates/Template3';
import Template4 from '../components/ResumeTemplates/Template4';

export default function Resume() {
  const [selectedTemplate, setSelectedTemplate] = useState(1);
  const { template } = useParams();

  useEffect(() => {
    if (template) {
      // Extract the template number from the URL
      const templateNumber = parseInt(template.split('=')[1]);
      setSelectedTemplate(templateNumber);
    }
  }, [template]);

  return (
    <>
  {(() => {
    switch (selectedTemplate) {
      case 1:
        return <ResumeTemplate1 />;
      case 2:
        return <ResumeTemplate2 />;
      case 3:
        return <Template3 />;
      case 4:
        return <Template4 />;
      // Add more cases as needed
      default:
        return <div>Please select a template</div>;
    }
  })()}
</>
    // <>
    //   {selectedTemplate === 1 ? (
    //     <ResumeTemplate1 />
    //   ) : (
    //     <ResumeTemplate2 />
    //   )}
    // </>
  );
}
