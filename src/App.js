// src/App.js
import React from 'react';
import RecruitmentForm from './components/RecruitmentForm';
import './index.css';
import ManageCandidate from './components/ManageCandidate'

function App() {
  return (
    <div className="App">
      {/* <RecruitmentForm /> */}
      <ManageCandidate />
    </div>
  );
}

export default App;
