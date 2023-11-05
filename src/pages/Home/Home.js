
import React from 'react';
import '../../styles/home.css';
import backgroundImage from '../../static/img/bluedark.jpg'; // Import the image

export const JumbotronComponent = () => {
    return (
      <div className="mx-2 jumbotron bg-blue" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-md-9 mb-4">
                <div className="h1 mb-0 font-weight-bold text-white">Welcome to BU PlannerX</div>
                <div className="h2 mb-0 font-weight-normal text-warning font-italic font">
                  <br />
                  Your ultimate course planning tool!
                </div>
              </div>
              <div className="col-md-3 align-items-center justify-content-center">
                <a href="/dashboard" className="btn">
                  <span className="h5 text-info pr-2 font-weight-bold">Start My Plan</span>
                  <div className="btn-info btn-circle btn-lg">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export const FeatureCard = ({ title, description, icon }) => {
    return (
      <div className="col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2 bg-gray-900 border-0">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-lg font-weight-bold text-info text-uppercase mb-1">{title}</div>
                <div className="h5 mb-0 text-white">
                  {description.map((desc, index) => (
                    <li key={index} className={index === 0 ? "mb-1" : ""}>{desc}</li>
                  ))}
                </div>
              </div>
              <div className="col-auto">
                <i className={`fas ${icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
export const TutorialSection = () => {
    return (
      <div className="col-12 mb-4">
        <div className="card shadow mb-4 bg-gray-800 border-0">
          <div className="card-header py-3  bg-gray-900 border-0">
            <h6 className="m-0 font-weight-bold text-info">BU PlannerX Quick Start Tutorial</h6>
          </div>
          <div className="card-body">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/sVn-aOEmzCI" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    );
  };
  