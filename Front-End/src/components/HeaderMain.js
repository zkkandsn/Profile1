import Header from "./Header";
import "../styles/headerMain.css";

export default function HeaderMain() {
  const text = document.querySelectorAll("#transitionText");
  const strText = text.textContent;
  text.textContent = "";
  console.log(strText);

  return (
    <div className="mainHeader">
      <div className="container"></div>
      <Header />
      <div className="mainText ms-4 d-flex flex-column">
        <div id="welcomeToMyWorld">
          <h3>WELCOME TO MY WORLD</h3>
        </div>
        <div id="hiIm">
          <h2>Hi, I'm Myagmarjargal</h2>
        </div>
        <div>
          <h2 id="transitionText">Back-End</h2>
        </div>
        <div>
          <h2>Front-End</h2>
        </div>
        <div id="hiIm">
          <h2>based in Mongolia.</h2>
        </div>
      </div>
    </div>
  );
}
