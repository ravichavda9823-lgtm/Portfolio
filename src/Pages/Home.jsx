import React from "react";

function Home() {
  return (
    <>
      {/* banner section start */}
      <section className="banner-sec max-width d-flex">
        <div className="banner">
          <h1>Hi,I AM </h1>
          <h1>RAVI CHAVDA</h1>
          <p>
            <b style={{ color: "red", fontWeight: "900px" }}>
              Full Stack Developer{" "}
            </b>
            specializing in React, focused on building fast, scalable, and
            user-friendly web applications. I work across both frontend and
            backend, creating clean code, secure APIs, and optimized solutions
            that deliver smooth and reliable experiences.I work with tools like
            HTML, CSS, JavaScript and React to build responsive anddynamic
            websites.
          </p>
          <div className="contact d-flex">
            <a
              href="https://www.linkedin.com/in/ravi-chavda-415994392/"
              target="_blank"
            >
              {" "}
              <span className="fa fa-linkedin" />
            </a>
            <a href="https://github.com/" target="_blank">
              <span className="fa  fa-github" />
            </a>
            <a href="tel:+919876543210" target="_blank">
              <button>CONTACT ME</button>
            </a>
          </div>
        </div>
        <div className="photo text-center ">
          <img src="/images/photo.png" alt />
        </div>
      </section>

      {/* banner section ends */}

      <div classname="banner-hr">
        <hr />
      </div>

      {/* about section start  */}

      <section className="about-section max-width">
        <div className="about-container">
          {/* LEFT IMAGE */}
          <div className="about-left">
            <div className="about-image">
              <div className="about-overlay" />
              <img src="/images/photo.png" alt="About Image" />
            </div>
          </div>
          {/* RIGHT CONTENT */}
          <div className="about-right">
            <h2 className="small-title">About Me</h2>
            <p className="about-text">
              We are Full Stack Developers who build complete, high-performance
              web applications with modern frontends and powerful backends.
            </p>
            <ul className="about-info">
              <li>
                <span>Name:</span>Ravi Chavda
              </li>
              <li>
                <span>Date of birth:</span> January 04, 2005
              </li>
              <li>
                <span>Address:</span>Navranpura Fire Station, 120/A,Ahemdabad
              </li>
              <li>
                <span>Email:</span>{" "}
                <a  href="https://mail.google.com/mail/?view=cm&fs=1&to=ravichavda9823@gmail.com"  target="_blank" style={{ color: "white" }}>
                  <u style={{textDecoration:"none"}}>ravichavda9823@gmail.com</u>
                </a>
              </li>
                  <li>
                <span>Phone:</span>{" "}
                <a  href="tel:+917046749636" style={{ color: "white" }}>
                  <u style={{textDecoration:"none"}}>+91 7046749636</u>
                </a>
              </li>
            </ul>
            <div className="counter">
              <a
                href="/resume/Ravi_Chavda_Resume.pdf"
                download="Ravi_Chavda_Resume"
                className="cv-btn"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* about section ends */}

      <div classname="banner-hr">
        <hr />
      </div>

      {/* projects section  start*/}

      <section className="Project-sec max-width">
        <div className="head">
          <h1>FEATURED PROJECTS</h1>
          <p>
            Here are some of the selected projects that showcase my passion for
            <br /> Full Stack development.
          </p>
        </div>

        <div className="projects d-flex">
          <div className="projects-images">
            <div className="color">
              <a href="https://konicha.onrender.com/" target="_blank">
                <img src="/images/recipe.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="projects-content">
            <h2>KONICHA RECIPE PROJECT</h2>
            <p>
              Konicha Recipes is a modern and user-friendly recipe browsing
              platform designed to help users discover, save, and share
              delicious dishes from around the world. Users can easily search
              recipes by name, cuisine, or ingredients, and each recipe page
              includes images, preparation time, and difficulty level. Konicha
              Recipes aims to create a smooth and enjoyable cooking experience
              with intuitive navigation and visually appealing design.
            </p>

            <h5>PROJECT INFO</h5>
            <div className="project-hr">
              <hr />
            </div>
            <div className="years d-flex">
              <h5>year</h5>
              <h6>2025</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>
            <div className="role d-flex">
              <h5>Role</h5>
              <h6>React Project</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>

            <div className="ancore d-flex">
              <a href="https://konicha.onrender.com/" target="_blank">
                LIVE DEMO <span className="fa fa-location-arrow"></span>
              </a>
              <a
                href="https://github.com/ravichavda9823-lgtm/Konicha"
                target="_blank"
              >
                {" "}
                SEE ON GITHUB <span className="fa fa-github"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Project1-sec max-width ">
        <div className="projects d-flex project-reverse">
          <div className="projects-content">
            <h2>ANIME FINDER PROJECT</h2>
            <p>
              This Anime Project is a modern and user-friendly platform where
              users can easily search for their favorite anime. It provides
              essential details such as genre, rating, release year, and
              character information with a clean and attractive UI. The
              application features a responsive design that offers a smooth
              experience across all devices. API integration is used to provide
              updated and reliable anime information.
            </p>

            <h5>PROJECT INFO</h5>
            <div className="project-hr">
              <hr />
            </div>
            <div className="years d-flex">
              <h5>year</h5>
              <h6>2025</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>
            <div className="role d-flex">
              <h5>Role</h5>
              <h6>React Project</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>

            <div className="ancore d-flex">
              <a href="https://animenova.onrender.com/" target="_blank">
                LIVE DEMO <span className="fa fa-location-arrow"></span>
              </a>
              <a
                href="https://github.com/ravichavda9823-lgtm/AnimeNova"
                target="_blank"
              >
                {" "}
                SEE ON GITHUB <span className="fa fa-github"></span>
              </a>
            </div>
          </div>
          <div className="projects-images">
            <div className="color">
              <a href="https://animenova.onrender.com/" target="_blank">
                <img src="/images/animee.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Project1-sec max-width">
        <div className="projects d-flex">
          <div className="projects-images">
            <div className="color">
              <a href="https://dailyexercise-84dh.onrender.com" target="_blank">
                <img src="/images/exercise.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="projects-content">
            <h2>DAILY WORKOUT PROJECT</h2>
            <p>
              This Exercise Project is designed to motivate users to stay active
              with structured workout plans. It offers clear instructions,
              organized categories, and easy progress tracking. The interface is
              simple yet engaging, making every workout session enjoyable. Users
              can access routines anytime with a fully responsive layout.
            </p>

            <h5>PROJECT INFO</h5>
            <div className="project-hr">
              <hr />
            </div>
            <div className="years d-flex">
              <h5>year</h5>
              <h6>2025</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>
            <div className="role d-flex">
              <h5>Role</h5>
              <h6>React Project</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>

            <div className="ancore d-flex">
              <a href="https://dailyexercise-84dh.onrender.com" target="_blank">
                LIVE DEMO <span className="fa fa-location-arrow"></span>
              </a>
              <a
                href="https://github.com/ravichavda9823-lgtm/DailyExercise"
                target="_blank"
              >
                {" "}
                SEE ON GITHUB <span className="fa fa-github"></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Project1-sec max-width ">
        <div className="projects d-flex project-reverse">
          <div className="projects-content">
            <h2>TODAY DAILY NEWS </h2>
            <p>
              This project focuses on analyzing a major recent news event and
              understanding its impact on society. It explains the background of
              the incident, the key facts reported by news agencies, and the
              response from authorities. The project also studies public
              reactions and how the event influences social, political, or
              environmental conditions.
            </p>

            <h5>PROJECT INFO</h5>
            <div className="project-hr">
              <hr />
            </div>
            <div className="years d-flex">
              <h5>year</h5>
              <h6>2025</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>
            <div className="role d-flex">
              <h5>Role</h5>
              <h6>React Project</h6>
            </div>
            <div className="project-hr">
              <hr />
            </div>

            <div className="ancore d-flex">
              <a href="https://dailynews-z3q3.onrender.com/" target="_blank">
                LIVE DEMO <span className="fa fa-location-arrow"></span>
              </a>
              <a
                href="https://github.com/ravichavda9823-lgtm/DailyNews"
                target="_blank"
              >
                {" "}
                SEE ON GITHUB <span className="fa fa-github"></span>
              </a>
            </div>
          </div>
          <div className="projects-images">
            <div className="color">
              <a href="https://todaynews-f3rt.onrender.com/" target="_blank">
                <img src="/images/News.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* projects section ends */}

      <div className="banner-hr">
        <hr />
      </div>

      {/* education details */}
      <section className="education-section max-width">
        <h2 className="education-title"> My Education</h2>
        <p className="education-subtitle">
          My academic journey – 12th, Bachelor's and Master's.
        </p>
        {/* 12th */}
        <div className="edu-item">
          <div className="edu-card">
            <div className="edu-level">12th (Higher Secondary)</div>
            <div className="edu-degree">Commerce Stream</div>
            <div className="edu-institute">Manglam Vidhyalay-Halvad</div>
            <div className="edu-year">Passed Out: 2020</div>
            <div className="edu-year">Percentage: 84.73%</div>
          </div>
        </div>
        {/* Bachelor's */}
        <div className="edu-item">
          <div className="edu-card">
            <div className="edu-level">Bachelor's</div>
            <div className="edu-degree">
              Bachelor of Computer Applications (BCA)
            </div>
            <div className="edu-institute">
              {" "}
              N.P. College Of Computer Studies and Mangement
            </div>
            <div className="edu-year">2021 - 2025</div>
            <div className="edu-year">CPI: 8.43</div>
          </div>
        </div>
        {/* Master's */}
        <div className="edu-item">
          <div className="edu-card">
            <div className="edu-level">Master's</div>
            <div className="edu-degree">
              Master of Computer Applications (MCA)
            </div>
            <div className="edu-institute">
              Dr. Babasaheb Ambedkar Open University
            </div>
            <div className="edu-year">2025 - 2027(Ranning)</div>
          </div>
        </div>
      </section>
      {/* education section ends */}

      <div className="banner-hr">
        <hr />
      </div>

      {/* about me start */}

      <section class="skills-section max-width">
        <div class="skills-heading">
          <h1>FULL STACK SKILLS</h1>
          <p>
            Technologies and tools that I use to build modern and scalable web
            applications.
          </p>
        </div>

        <div class="skills-container">
          <div class="skill-card">
            <i class="fa-solid fa-code skill-icon"></i>
            <h2>Frontend Development</h2>
            <p>Responsive UI using HTML, CSS, JavaScript, Bootstrap & React.</p>
           
          </div>

          <div class="skill-card">
            <i class="fa-solid fa-server skill-icon"></i>
            <h2>Backend Development</h2>
            <p>Secure backend using Node.js & REST APIs.</p>
           
          </div>

          <div class="skill-card">
            <i class="fa-solid fa-database skill-icon"></i>
            <h2>Database</h2>
            <p> MongoDB and optimized database architecture.</p>
           
          </div>
        </div>
      </section>

      {/* about me ends */}

      <div className="banner-hr">
        <hr />
      </div>

      {/* contact section start */}
      <section className="contact-sec max-width">
        <div className="contact-head">
          <h1>LET’S CONTACT</h1>
          <h3>
            Say hello at <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ravichavda9823@gmail.com"   target="_blank" >ravichavda9823@gmail.com</a>
          </h3>
          <h3>
            For more info, here’s my <a href="">resume</a>
          </h3>
        </div>

        <div className="contact-form ">
          <form action="">
            <label style={{ marginRight: "1000px" }}>Name</label>
            <br />
            <input type="text" />
            <br />
            <label style={{ marginRight: "1010px" }}>Email</label>
            <br />
            <input type="email" />
            <br />
            <label style={{ marginRight: "990px" }}>Subject</label>
            <br />
            <input type="text" />
            <br />
            <label style={{ marginRight: "970px" }}>Message</label>
            <br />
            <textarea name="" id="" />
            <br />
            <button>SUBMIT</button>
          </form>
        </div>
      </section>

      {/* contact section ends */}

      <div className="banner-hr">
        <hr />
      </div>
    </>
  );
}

export default Home;
