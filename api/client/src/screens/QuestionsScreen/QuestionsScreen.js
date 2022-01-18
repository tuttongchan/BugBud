import React from 'react';
import Dashboard from '../../components/dashboard/Dashboard';
import TabQuestions from '../../components/tabQuestions/TabQuestions';
import Topbar from '../../components/topbar/Topbar';
import './questionsScreen.css';

const QuestionsScreen = () => {

  return (
    <div className="questionsscreen-container">
      <Topbar />
      <div className="bottom-container">
        <Dashboard />
        <TabQuestions />
      </div>
    </div>
  );
};

export default QuestionsScreen;
