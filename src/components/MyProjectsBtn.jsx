import React from 'react';
import { Link } from 'react-router-dom';

const MyProjectsBtn = ({ onClick }) => {
  return (
    <Link id="MyProjectsBtn" to="/SH-CV/projects" onClick={onClick}>
      My Portfolio <span className="arrow">→</span>
    </Link>
  );
};

export default MyProjectsBtn;