import "./App.css";
import Porfile from "./assets/naveen.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const BeProjectList = [
    {
      image: Project1,
      title: "Project 1 Title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: Project2,
      title: "Project 2 Title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: Project3,
      title: "Project 3 Title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      image: Project4,
      title: "Project 4 Title",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ];


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
        <h2 className="font-bold text-4xl mt-1 gradiant-text">Backend developer</h2>
      </div>
      <div>
        <p className="mt-4 text-gray-400">
          Welcome to my portfolio website! As a dedicated backend developer proficient in PHP, Laravel, and Node.js, I bring a wealth of experience and expertise to every project I undertake. While continuously expanding my skill set, I'm currently delving into the realms of Python and React.js, further enriching my toolkit for building robust and dynamic applications.
        </p>
        <a href="/assets/Resume_Naveen_Kumar.pdf" download="Resume_Naveen_Kumar.pdf">
          <button className="px-8 shadow-gray-500 shadow-md py-5 mt-5 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 hover:from-yellow-300 hover:to-yellow-700 text-black">
            Download resume
          </button>
        </a>
      </div>
    </div>
    <div className="relative">
      <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />
    </div>
  </div>
</section>

        {/* Projects section */}
        <section id="projects">
          <section id="be-projects">
            <div className="container m-auto px-2 sm:py-12">
              <h2 className="text-2xl font-semibold">Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-8">
                {BeProjectList.map((project, index) => (
                  <ProjectCard
                    key={index}
                    image={project.image}
                    title={project.title}
                    description={project.description}
                  />
                ))}
              </div>
            </div>
          </section>
          <section id="fe-projects">
            <div class="container m-auto px-4 sm:py-12">
              <h2 class="text-2xl font-semibold">Front-End Projects</h2>
              <div class="flex flex-col sm:flex-row gap-10 mt-11">
                <div class="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project1} class="w-full h-auto blur" />
                  <h3 class="text-2xl font-semibold mt-8">Furniture store landing page</h3>
                  <p class="text-gray-400 text-sm mt-2">Responsive HTML/CSS layout for online furniture store. HTML5, CSS3 (SCSS)</p>
                  <div class="flex mt-12 gap-2">
                    <button class="flex-1 text-sm py-3 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 cursor-not-allowed text-black font-semibold">Coming Soon</button>
                  </div>
                </div>
                <div class="border border-gray-500 rounded-md p-5 flex-1">
                  <img src={Project2} class="w-full h-auto blur" />
                  <h3 class="text-2xl font-semibold mt-8">Designer furniture store landing page</h3>
                  <p class="text-gray-400 text-sm mt-2">Responsive HTML/CSS layout for online store of designer furniture. HTML5, CSS3 (SCSS)</p>
                  <div class="flex gap-2 mt-12">
                    <button class="flex-1 text-sm py-3 bg-gradient-to-t from-yellow-300 rounded-full to-yellow-500 cursor-not-allowed text-black font-semibold">Coming Soon</button>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row  gap-10 mt-11">
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
              </div>
            </div>
          </section>
        </section>


        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div >
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">PHP Laravel</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Core PHP</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node Js</h2>
                  <p className="text-gray-500">Intermediate</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Python</h2>
                  <p className="text-gray-500">Beginner</p>
                </div>
                <span className="w-[25%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
              </div>
            </div>

            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">HTML,CSS, Sass & Bootstrap</h2>
                <p className="text-gray-500">Advanced</p>
              </div>
              <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">
                  JavaScript, JQuery
                </h2>
                <p className="text-gray-500">Advanced</p>
              </div>
              <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-yellow-300 to-yellow-500 block rounded-md" />
            </div>
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold">React</h2>
                <p className="text-gray-500">Beginner</p>
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
                  Wordpress
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
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Engagement
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  B2 english
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  RWD
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Graduated KTC (Krasnodar Technical College) and for about two
                  years worked with high voltage (35, 110kV) substations as the
                  specialty electrician of emergency mobile crew. Later
                  qualified as a Crossfit trainer.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Underwent a digital marketing course and started to work as a
                  PPC and project manager in a local web studio. After 3 months
                  started my own freelance practice.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Became more interested in IT and decided to try programming.
                  Underwent Java course and made a project.
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-yellow-300 before:to-yellow-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2015</h3>
                <p>
                  Worked out in which field I want to build a developer's career
                  and started to learn Frontend Development.
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
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
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
