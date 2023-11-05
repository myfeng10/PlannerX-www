import React from 'react';
import './App.css';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import AlertMessages from './components/AlertMessages';
import { JumbotronComponent, FeatureCard, TutorialSection } from './pages/Home/Home';
function App() {

  return (
    <div>
      {/* Pass the loggedIn status as a prop */}
      <Topbar />
      <div className='main'>
      <AlertMessages messages={["Our database is NOW updated to Spring 2024. Let's plan it out!", "Remember our NEW website link: www.myplannerx.com"]} />
      <JumbotronComponent />
      <div className="col-md-9 mx-auto">
        <div style={{ height: '50px' }}></div>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="h3 mb-0 text-white font-weight-bold">Key Features</div>
        </div>
        <div className="row">
          <FeatureCard title="Massive Data" description={['Over 4k courses recorded per semester', 'Over 3k prof data from RateMyProfessor']} icon="fa-database" />
          <FeatureCard title="Easy to Use" description={['Take 5 min to fill in a few blanks', 'Get up to 1k schedules in 1 sec']} icon="fa-check" />
          <FeatureCard title="Smart Algorithm" description={['Auto-schedule classes w/o time conflict', 'Auto-rank schedules to find the best one']} icon="fa-code" />
          <FeatureCard title="Visualization" description={['Intuitionistic time table for each schedule', 'Easily save schedule images for sharing']} icon="fa-calendar-days" />
        </div>
        <div style={{ height: '50px' }}></div>
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="h3 mb-0 text-white font-weight-bold">How to Use?</div>
        </div>
        <div className="row">
          <TutorialSection />
        </div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default App;
