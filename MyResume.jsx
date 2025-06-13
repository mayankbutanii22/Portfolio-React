// src/pages/MyResume.jsx

import React from 'react';

function MyResume() {
  return (
   <section>
  <h1>MyResume</h1>
  <p>Download my resume or view it below:</p>
  <ul>
    <li><strong>Education:</strong> Web Development Course</li>
    <li><strong>Experience:</strong> 1 year of frontend development</li> 
    <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Redux</li>
    <li><strong>Certifications:</strong> React Developer Certification</li>
    <li><strong>Achievements:</strong> Successfully launched 6 projects</li> 
    <li><strong>Projects:</strong> 
      <ul>
        <li><a href="https://vercel.com/mayank-butanis-projects" target="_blank">Project 1</a></li>
        <li><a href="https://vercel.com/mayank-butanis-projects" target="_blank">Project 2</a></li>
        <li><a href="https://vercel.com/mayank-butanis-projects" target="_blank">Project 3</a></li>
        <li><a href="https://vercel.com/mayank-butanis-projects" target="_blank">Project 4</a></li>
        <li><a href="https://vercel.com/mayank-butanis-projects" target="_blank">Project 5</a></li>
        <li><a href="https://vercel.com/mayank-butanis-projects" target="_blank">Project 6</a></li>
      </ul>
    </li>
    <li><strong>Resume:</strong> <a href="path-to-your-resume.pdf" download>Download</a></li>
  </ul>
</section>

  );
}

export default MyResume;

