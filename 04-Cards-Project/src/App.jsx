import React from "react";
import Card from './Components/card'
import card from "./Components/card";
function App() {

const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    companyName: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://thumbs.dreamstime.com/b/amazon-logo-white-background-montreal-canada-july-printed-paper-98221126.jpg",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Cloud Support Associate",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBW9gugHuiK0748qr9vZHrlIqdiDdfuEYVw&s",
    companyName: "Google",
    datePosted: "10 weeks ago",
    post: "AI Research Intern",
    tag1: "Part Time",
    tag2: "Intern Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u8BZcgcIxcfgSJsas_HDf2pfYTBlmo2q3g&s",
    companyName: "Microsoft",
    datePosted: "8 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$88/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/1200px-Nvidia_logo.svg.png",
    companyName: "NVIDIA",
    datePosted: "3 weeks ago",
    post: "ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$110/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    companyName: "Tesla",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$90/hr",
    location: "California, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mjZn-Td9DEGdhY6T54VkVgt7F4gENQejIw&s",
    companyName: "OpenAI",
    datePosted: "6 weeks ago",
    post: "Research Scientist",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://cdn.worldvectorlogo.com/logos/adobe-2.svg",
    companyName: "Adobe",
    datePosted: "2 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Noida, India"
  }
];


  return (
    <div className="parent">
      { 
        jobOpenings.map(function(elem,idx){
          return <div key={idx}>
            <Card company = {elem.companyName} image = {elem.brandLogo } date = {elem.datePosted}
          post = {elem.post} type={elem.tag1} salary={elem.pay}  position={elem.tag2} location ={elem.location}  />
          </div> ;  
        })   
      }       
    </div>
   
  );
}

export default App;
