import React from 'react';
import myImage from "./1000015783[1].jpg";

import githubLogo from './image.png'; 
import vercelLogo from '../assets/image.png'; 

const Home = () => (
  <section >
    <img src={myImage} alt="My Image" style={{ width: '300px', height: '300px', borderRadius: '50%' }} />  
    <h1>I am Mayank Butani</h1>
    <p>
      I am Frontend Developer with a focus on clean UI and smooth UX. I have a passion for creating
      visually appealing and user-friendly websites. I like to keep up with the latest trends and
      technologies in the field of web development. I like dabbling in various parts of frontend
      development and like to learn about new technologies, write articles on them, and implement
      them into my projects.
    </p>

    <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '30px' }}>
      <a href="https://github.com/mayankbutanii22" target="_blank">
        <img src={githubLogo} alt="GitHub" style={{ width: '40px' }} />
      </a>
      <a href="https://vercel.com/mayank-butanis-projects" target="_blank">
        <img src={vercelLogo} alt="Vercel" style={{ width: '40px' }} />
      </a>
    </div>
  </section>
);

export default Home;

