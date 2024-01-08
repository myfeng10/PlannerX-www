

import React, {useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/home.css';
import BULogo from '../static/img/BULogo.png';
import Container from '../components/Container';
import Button from '../components/Button'; 
import { useAuth } from '../AuthContext';

const JumbotronTop = () => {
  const navigate = useNavigate();
  const { isLoggedIn, login } = useAuth();
  const handleClick = ()=>{
    if (!isLoggedIn){
      login();
    }else{
      navigate('/dashboard');
    }
  };
  return (
    <div className="bg-opacity-75 font-sans flex flex-row justify-between fixed w-full bg-bg-primary text-white p-3">
      <div className="col-span-3 flex items-center">
        <img src={BULogo} alt="BU Logo" className="mr-4 w-10 h-10" />
        <span className="text-3xl font-extrabold text-rwhite">BU x PlannerX</span>
      </div>
      <Button onClick={handleClick} label={isLoggedIn ? 'Enter' : 'Login'} size="sm" color="red" />
    </div>
  );
};
  
const JumbotronSection = ({ isLoggedIn, onLearnMoreClick }) => {
  const navigate = useNavigate();
  const handleClick = ()=>{
    if (!isLoggedIn){
      navigate('/login');
    }else{
      navigate('/AddPlan');
    }
  };

  return (
    <section className="pt-14 bg-center bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 w-full  bg-blend-multiply">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Your Ultimate Course Planning Tool! 
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
        Our database is NOW updated to Spring 2024. Let's plan it out! <br /> 
Remember our NEW website link: www.myplannerx.com
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <div className="mr-4"> 
              <Button onClick={handleClick} label="Get Started" size='lg'>
                  <svg className="w-3.5 h-3.5 ml-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </Button>
          </div>
          <div> 
              <Button onClick={onLearnMoreClick} label="Learn More" variant="secondary" size='lg' />
          </div>
        </div>


       
      </div>
    </section>
  );
}

const FeatureCard = ({ title, description, icon, color }) => {
    return (
      <Container color={color}>
      <div className="flex items-center">
        <div className="pl-4">
          <div className="text-xl font-bold uppercase text-text-secondary mb-1">{title}</div>
          <ul className="text-white list-disc ml-3 text-xl">
            {description.map((desc, index) => (
              <li key={index} className={index === 0 ? "mb-1" : "mb-0"}>{desc}</li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <i className={`fas ${icon} fa-2x text-gray-300`}></i>
        </div>
      </div>
    </Container>
    );
  };
  
  
const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn,login } = useAuth();

  const handleClick = ()=>{
    if (!isLoggedIn){
      login();
    }else{
      navigate('/AddPlan');
    }
  };

  const featureCardSectionRef = useRef(null);
  const scrollToFeatureCardSection = () => {
    const yOffset = -60; // height of the topbar
    const y = featureCardSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  return (
        <div className="bg-bg-primary">
        
                <JumbotronTop />
                <JumbotronSection isLoggedIn={isLoggedIn} onLearnMoreClick={scrollToFeatureCardSection}  /> 
                <div ref={featureCardSectionRef} className="mx-0 flex justify-center flex-col items-center w-full mt-5">
                    <div className="flex flex-col justify-center items-center mt-10 w-full">
                        <div className="mb-4 text-white font-extrabold text-3xl">Key Features</div>
                    
                      <div  className="grid grid-cols-2 grid-rows-2 gap-4 w-9/12">
                          <FeatureCard title="Massive Data" description={['Over 4k courses recorded per semester', 'Over 3k prof data from RateMyProfessor']} icon="fa-database" color="border-accent-1" />
                          <FeatureCard title="Easy to Use" description={['Take 5 min to fill in a few blanks', 'Get up to 1k schedules in 1 sec']} icon="fa-check" color="border-accent-2" />
                          <FeatureCard title="Smart Algorithm" description={['Auto-schedule classes w/o time conflict', 'Auto-rank schedules to find the best one']} icon="fa-code" color="border-accent-3" />
                          <FeatureCard title="Visualization" description={['Intuitionistic time table for each schedule', 'Easily save schedule images for sharing']} icon="fa-calendar-days" color="border-accent-4" />
                      </div>
                    </div>
                    <div className="justify-center items-center pt-10">
                    <Button onClick={handleClick} label={isLoggedIn ? 'Start Planning' : 'Try For Free'} size="lg" color="red" />
                  </div>
              
                    <div className="flex flex-col justify-center items-center mt-10 pb-10 w-full">
                        <div className="mb-4 text-white font-extrabold text-3xl">How to Use?</div>
                        <div className="relative w-9/12" style={{ paddingBottom: '35%' }}>
                          <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src="https://www.youtube.com/embed/sVn-aOEmzCI"
                            allowFullScreen
                          ></iframe>
                        </div>
                    </div>
              
                </div>
        </div>
  )
};


export default Home;