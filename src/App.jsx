import "./App.css";
import Porfile from "./assets/naveen.png";
import Project1 from "./assets/project1.png";
import CRMProject from "./assets/crmProject.png";
import ERPProject from "./assets/ERP.png";
import FishFarmProject from "./assets/firshfarmingIot.png";
import SavingsTracker from "./assets/savingsTracker.png";
import TicketClassification from "./assets/ticket_classification.png";
import GrainHumidityPrediction from "./assets/grainHumidityPrediction.png";
import CancerClassification from "./assets/cancer_classification.jpeg";
import LeetCode from "./assets/leetcode.svg";
import GitHub from "./assets/github.svg";
import PhoneIconSVG from "./assets/mobile.svg";
import EmailIconSVG from "./assets/email.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Resume from "./assets/Resume_Naveen_Kumar.pdf";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [isPhoneCopied, setIsPhoneCopied] = useState(false);
  const [isEmailCopied, setIsEmailCopied] = useState(false);
  const BeProjectList = [
    {
      image: Project1,
      title: "PortFolio",
      techStack: "Node js, Express js",
      description: "This personal project, built with Node.js and Express.js, seamlessly integrates the LeetCode API and GitHub API into my portfolio. By doing so, it enables me to showcase my daily coding work and demonstrate consistency in practice. Through the integration of the LeetCode API and GitHub API, my portfolio dynamically displays my daily coding activities and projects. This not only highlights my commitment to continuous learning and improvement but also provides tangible evidence of my coding proficiency and dedication to growth.",
    },
    {
      image: ERPProject,
      title: "Enterprise resource planning(ERP)",
      techStack: "Node js, Express js, Mongo DB",
      description: "Single-handedly developed a comprehensive system for user attendance, finance management, report generation, and material handling to efficiently manage large-scale products throughout the end-to-end dyeing enterprise process.",
    },
    {
      image: FishFarmProject,
      title: "Fish Farming IOT",
      techStack: "Node js, Express js, Postgres SQL",
      description: "Enhancing Fish Farming Through IoT: Leveraging IoT technology to monitor and manage environmental factors crucial for fish growth, ensuring optimal conditions and improving overall efficiency.",
    },
    {
      image: CRMProject,
      title: "Plato - CRM Tool",
      techStack: "PHP Laravel, PHP YII, MySql",
      description: "A Vital Internal CRM Tool at Pickyourtrail, a Leading Tourism Brand in India. Spearheaded the migration from the YII(1.0) framework to Laravel(8), optimizing performance and scalability. Overhauled the database architecture to accommodate a surge in user volume. Collaborated cross-functionally to implement innovative features like Lead Allocation across Sales, Customer Happiness, and Visa Teams.",
    },
  ];

  const MlProjectList = [
     {
      image: CancerClassification,
      title: "Multi model Cancer Classification",
      techStack: "Python, Multimodel, Cascade Of Expert, ResNet, Knn, SVM ",
      gitLink: "https://github.com/naveenkumarkk/multimodel",
      description: "Multi-Model Cancer Classification system using a Cascade of Experts approach. The pipeline was designed to handle two types of inputs: images and CSV files. For image inputs, the system first routes the image to a domain expert such as Brain, Kidney, Pancreas, or Skin. If the image belongs to one of these categories, a specialized classifier is applied to identify the specific tumor type within that organ. If the image does not match any of the supported domains, the output is returned as “Unspecified.” For CSV inputs, the pipeline routes the data to cancer-related classifiers, with current support for general cancer classification and Breast Cancer classification. This setup essentially functions as a router–expert system, where the router determines the input type and category before delegating the prediction to a specialized model.",
    },
    {
      image: TicketClassification,
      title: "Ticket Classification",
      techStack: "Python, Django",
      gitLink:"https://github.com/naveenkumarkk/ticket-classification",
      description: "In any machine learning task, cleaning or preprocessing the data is as important as model building if not more. And when it comes to unstructured data like text, this process is even more important. I have implemented preprocessing steps such as Lower casing,Removal of Punctuations,Removal of Stopwords,Removal of Frequent words,Removal of Rare words,Number to words/ignoring numbers,Stemming,Lemmatization,Removal of emojis,Removal of emoticons,Conversion of emoticons to words,Conversion of emojis to words,Removal of URLs,Removal of HTML tags,Chat words conversion,Spelling correction and used supervised learning to find the classification of the query.",
    },
    {
      image: GrainHumidityPrediction,
      title: "Grain Humidity Prediction",
      techStack: "Python",
      gitLink: "https://github.com/naveenkumarkk/grain_humidity",
      description: "This project aims to address the challenge of predicting grain moisture content during the drying process. Currently, the drying process is controlled manually, which often results in either over-drying (wasting energy) or under-drying (requiring additional drying time). By accurately predicting the moisture content at various time points, we can optimize the drying process, improving efficiency and saving energy. This problem is especially relevant for industries involved in grain storage and processing, where maintaining proper moisture levels is crucial for preventing spoilage.",
    },
  ];


  const copyPhoneNumberToClipboard = () => {
    navigator.clipboard.writeText('+372 53706256');
    setIsPhoneCopied(true);
    setTimeout(() => setIsPhoneCopied(false), 2000); // Reset copied state after 2 seconds
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('naveenkumar@ut.ee');
    setIsEmailCopied(true);
    setTimeout(() => setIsEmailCopied(false), 2000); // Reset copied state after 2 seconds
  };


  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  const handleDropdownClick = () => {
    const dropdown = document.getElementById("projects");
    const button = document.querySelector(".dropdown-button");

    if (dropdown && button) {
      dropdown.classList.toggle("hidden");
      button.classList.toggle("dropdown-open");
    }
  };

  const handleProjectClick = (projectId) => {
    const project = document.getElementById(projectId);
    if (project) {
      window.scrollTo({
        top: project.offsetTop - 100, // Adjust this value as needed
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
              <h1 className="font-bold text-2xl">Naveen Portfolio</h1>
            </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <div className="relative">
                    <button className="relative bg-gradient-to-t from-yellow-300 to-yellow-500 text-black px-4 py-2 rounded-full dropdown-button hover:text-white" onClick={handleDropdownClick}>
                      Projects <span className="caret"></span>
                    </button>
                    <ul className="absolute hidden bg-gray-800 text-white py-2 rounded-md shadow-lg left-0 top-full w-full" id="projects">
                      <li onClick={() => handleProjectClick("be-projects")}>ML Projects</li>
                      <li onClick={() => handleProjectClick("fe-projects")}>FE Projects</li>
                      <li onClick={() => handleProjectClick("be-projects")}>BE Projects</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-200 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-200 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
                {/* GitHub and LeetCode icons */}
                <li className="hidden sm:flex" title="LeetCode">
                  <a href="https://leetcode.com/naveenpranesh" target="_blank" rel="noopener noreferrer">
                    <img src={LeetCode} alt="LeetCode" className="w-8 h-8" />
                  </a>
                </li>
                <li className="hidden sm:flex" title="GitHub">
                  <a href="https://github.com/naveenkumarkk" target="_blank" rel="noopener noreferrer">
                    <img src={GitHub} alt="GitHub" className="w-8 h-8" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>


      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm Naveen Kumar,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">AI/ML developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-200">
                  Welcome to my portfolio website! As a dedicated AI/ML and backend  developer proficient in Python, PHP, Laravel, and Node.js, I bring a wealth of experience and expertise to every project I undertake. While continuously expanding my skill set, I'm currently delving into the realms of React.js, further enriching my toolkit for building robust and dynamic applications.
                </p>
                <a href={Resume} download>
                  <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 hover:from-yellow-300 hover:to-yellow-500 text-black hover:text-white">
                    Download resume
                  </button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
              <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                <div className="tooltip" title="Click to copy mobile number">
                  <div className="relative" onClick={copyPhoneNumberToClipboard}>
                    <img src={PhoneIconSVG} className="h-6 w-6 cursor-pointer" />
                    {isPhoneCopied && <span className="absolute bg-gray-800 text-white text-sm px-2 py-1 rounded-md -top-6 right-[-24px]">Phone Number Copied!</span>}
                  </div>
                </div>
                <div className="tooltip" title="Click to copy email">
                  <div className="relative" onClick={copyEmailToClipboard}>
                    <img src={EmailIconSVG} className="h-6 w-6 cursor-pointer" />
                    {isEmailCopied && <span className="absolute bg-gray-800 text-white text-sm px-2 py-1 rounded-md -top-6 left-[-24px]">Email Copied!</span>}
                  </div>
                </div>
                <div>
                  <a href="https://www.instagram.com/naveen_pranesh/" target="_blank" className="text-gray-400 hover:text-white" title="Instagram">
                    <img src={Instagram} alt="Instagram" className="w-6 h-6" />
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/in/naveen-kumar-kk" target="_blank" className="text-gray-400 hover:text-white" title="LinkedIn">
                    <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>


          </div>
        </section>

        {/* Projects section */}
        <section id="projects">
          <section id='ml-projects'>
          <div className="container m-auto px-2 sm:py-12">
              <h2 className="text-2xl font-semibold">Machine Learning Projects:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                {MlProjectList.map((project, index) => (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    techStack={project.techStack}
                    gitLink={project.gitLink}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </section>
          <section id="be-projects">
            <div className="container m-auto px-2 sm:py-12">
              <h2 className="text-2xl font-semibold">BackEnd-Projects:</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                {BeProjectList.map((project, index) => (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    techStack={project.techStack}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </section>
          <section id="fe-projects">
            <div class="container m-auto px-4 sm:py-12">
              <h2 class="text-2xl font-semibold">Front-End Projects:</h2>
              <div class="flex flex-col sm:flex-row gap-10 mt-11">
                <div class="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project1} class="w-full h-auto" />
                  <h3 class="text-2xl font-semibold mt-8">PortFolio</h3>
                  <p class="text-gray-300  mt-2"><strong className="text-gray-200 font-semibold mb-3">Tech Stack: </strong>React Js</p>
                  <p class="text-gray-300  mt-2"><strong className="text-gray-200 font-semibold mb-3">Description: </strong>Personal Portfolio Website to show case my skills and experience</p>
                  <div className="flex mt-12 gap-2">
                    <button className="flex-1 text-sm py-3 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 hover:from-yellow-300 hover:to-yellow-500">
                      <a href="#">
                        Live preview
                      </a>
                    </button>

                    <button className="flex-1 text-sm py-3 border rounded-full hover:border-violet-500 hover:text-purple-500">
                      <a href="https://github.com/naveenkumarkk/portfolio" target="_blank" rel="noopener noreferrer">
                        Checkout github
                      </a>
                    </button>
                  </div>
                </div>
                <div class="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={SavingsTracker} class="w-full h-auto blur" />
                  <h3 class="text-2xl font-semibold mt-8">Savings Tracker: A Fun Project for Financial Goal Achievement</h3>
                  <p class="text-gray-300 text-sm mt-2">This project is my personal endeavor aimed at tracking and managing my savings goals. The idea is to monitor my spending habits and exercise self-control to achieve financial milestones. By calculating my savings progress, it provides insights into how long it will take for me to reach my desired financial goals.</p>
                  <div class="flex gap-2 mt-12">
                    <button class="flex-1 text-sm py-3 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 cursor-not-allowed text-black font-semibold">Coming Soon</button>
                  </div>
                </div>
              </div>
              {/* <div class="flex flex-col sm:flex-row  gap-10 mt-11">
                <div class="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project3} class="w-full h-auto blur" />
                  <h3 class="text-2xl font-semibold mt-8">Landing page for front-end developer</h3>
                  <p class="text-gray-400 text-sm mt-2">Responsive HTML/CSS layout for landing page for front-end developer. HTML5, CSS3 (SCSS)</p>
                  <div class="flex gap-4 mt-12">
                    <button class="flex-1 text-sm py-3 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 cursor-not-allowed text-black font-semibold">Coming Soon</button>
                  </div>
                </div>
                <div class="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project4} class="w-full h-auto blur" />
                  <h3 class="text-2xl font-semibold mt-8">Website redesign for The Venus project</h3>
                  <p class="text-gray-400 text-sm mt-2">Responsive HTML/CSS layout for The Venus project. HTML5, CSS3 (SCSS)</p>
                  <div class="flex gap-2 mt-12">
                    <button class="flex-1 text-sm py-3 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 cursor-not-allowed text-black font-semibold">Coming Soon</button>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </section>


        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-bold">Technologies</h2>
            <div className="mt-14">
              <div >
                <div className="flex justify-between items-center">
                  <h2 className="font-bold">PHP Laravel</h2>
                  <p className="text-gray-450">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold">Core PHP</h2>
                  <p className="text-gray-450">Intermediate</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold">Node Js</h2>
                  <p className="text-gray-450">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-bold">Python Django</h2>
                  <p className="text-gray-450">Advanced</p>
                </div>
                <span className="w-[25%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">HTML,CSS, Sass & Bootstrap</h2>
                <p className="text-gray-450">Advanced</p>
              </div>
              <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">
                  JavaScript, JQuery
                </h2>
                <p className="text-gray-450">Advanced</p>
              </div>
              <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-bold">React</h2>
                <p className="text-gray-450">Beginner</p>
              </div>
              <span className="w-[20%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
            </div>



          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Git
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Jira
                </p>
              </div>

              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 English
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  A1 German
                </p>
              </div>

            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>

              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Intrests
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  AI
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  ML
                </p>
              </div>

              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Web Development
                </p>
              </div>
            </div>

          </div>
        </section>
        {/* About Me */}
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2016</h3>
                <p className="text-gray-300">
                  <strong className="text-gray-200">Bachelor of Engineering - Computer Science</strong>: Kongu Engineering College, Tamilnadu, India (July 2016 - June 2020)
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p className="text-gray-300">
                  <strong className="text-gray-200">Paper Presentation</strong>: Prediction of Adverse Glycemic Event using continuous monitoring Signal (December 2019)
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
                <p className="text-gray-300">
                  <ul>
                    <li>
                      <strong className="text-gray-200">Degree</strong>: <span className="text-sm text-gray-300">Graduated as B.E. Computer Science Engineer with 6.1 CGPA</span>
                    </li>
                    <li>
                      <strong className="text-gray-200">Experience</strong>: Back-end Developer (Intern) at Adash Business Analytic (January 2020 - November 2020)
                    </li>
                    <li>
                      <strong className="text-gray-200">Project</strong>: Dyeing ERP - Enterprise Resource Planning tool (January 2020)
                    </li>
                    <li>
                      <strong className="text-gray-200">Project</strong>: Fish Farm - IOT (Handling mid-scale fish farm using IOT) (June 2020)
                    </li>
                  </ul>
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2021</h3>
                <p className="text-gray-300">
                  <ul>
                    <li>
                      <strong className="text-gray-200">Experience</strong>: Full-stack Developer (Intern) at Mobile Tutor Pvt (December 2020 - June 2021)
                    </li>
                    <li>
                      <strong className="text-gray-200">Project</strong>: Report Generation APP (Mobile App Development, Back-end) (May 2021)
                    </li>
                  </ul>
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2024</h3>
                <p className="text-gray-300">
                  <ul>
                    <li>
                      <strong className="text-gray-200">Experience</strong>: Backend Developer at Pickyourtrail
                    </li>
                    <li>
                      <strong className="text-gray-200">Project</strong>: Plato - Customer Relationship Management Tool (Web Development) (July 2021 - August 2024)
                    </li>
                  </ul>
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2025</h3>
                <p className="text-gray-300">
                  <ul>
                    <li>
                      <strong className="text-gray-200">Position</strong>: Master's student
                    </li>
                    <li>
                      Started my Master's in Computer Science at the University of Tartu (August 2024)
                    </li>
                  </ul>
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2024</p>
          </div>
          <div>
            <ul className="flex gap-4">

              <li>
                <a href="https://www.linkedin.com/in/naveen-kumar-kk" target="_blank" className="text-gray-400 hover:text-white" title="LinkedIn">
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/naveen_pranesh/" target="_blank" className="text-gray-400 hover:text-white" title="Instagram">
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
