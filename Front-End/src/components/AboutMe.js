import "../styles/aboutme.css";
import { useState } from "react";

export default function AboutMe() {
  const [activer, setActiver] = useState(["skills", "awards", "experience"]);

  return (
    <div className="aboutme">
      <div className="container">
        <div className="aboutMeContainer">
          <div className="aboutMeImg d-flex flex-column align-items-center">
            <img className="mt-5 col-12" src="./pictures/about.JPG" alt="" />
          </div>
          <div
            id="aboutmeText"
            className="d-flex flex-column align-item-center"
          >
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              sapiente consequatur, explicabo cumque eum pariatur? Quas fugit
              id, itaque cum tenetur consectetur voluptatum libero aut accusamus
              minima iste. Voluptates, veniam?
            </p>
          </div>
          <div className="aboutTabs d-flex col-12 justify-content-between align-items-center">
            <div id="aboutTab">
              <h3
                className={activer === "skills" ? "aboutMeActiver" : ""}
                onClick={() => {
                  setActiver("skills");
                }}
              >
                Skills
              </h3>
            </div>
            <div id="aboutTab">
              <h3
                className={activer == "awards" ? "aboutMeActiver" : ""}
                onClick={() => {
                  setActiver("awards");
                }}
              >
                Awards
              </h3>
            </div>
            <div id="aboutTab">
              <h3
                className={activer == "experience" ? "aboutMeActiver" : ""}
                onClick={() => {
                  setActiver("experience");
                }}
              >
                Experience
              </h3>
            </div>
          </div>
          <div>
            <p className="d-none aboutMeText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              commodi obcaecati nobis rem eaque modi. Totam illo maiores,
              provident, labore quam voluptatem aspernatur neque rem corporis
              nesciunt molestiae, ipsam numquam?
            </p>
            <p className="d-none aboutMeText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              commodi obcaecati nobis rem eaque modi. Totam illo maiores,
              provident, labore quam voluptatem aspernatur neque rem corporis
              nesciunt molestiae, ipsam numquam?
            </p>
            <p className="d-none aboutMeText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
              commodi obcaecati nobis rem eaque modi. Totam illo maiores,
              provident, labore quam voluptatem aspernatur neque rem corporis
              nesciunt molestiae, ipsam numquam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
