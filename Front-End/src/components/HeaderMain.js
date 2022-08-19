import Header from "./Header";
import "../styles/headerMain.css";

export default function HeaderMain() {
  const text = document.querySelectorAll("#transitionText");
  const strText = text.textContent;
  text.textContent = "";
  console.log(strText);

  return (
    <div className="mainHeader">
      <div className="container">
        <Header />
        <div className="mainText mt-md-5 ms-4 ms-md-0 d-flex flex-column">
          <div id="welcomeToMyWorld">
            <h3>WELCOME TO MY WORLD</h3>
          </div>
          <div id="hiIm">
            <h2>Hi, I'm Myagmarjargal</h2>
          </div>
          <div>
            <h2 className="transitionText t1">Back-End</h2>
          </div>
          <div>
            <h2 className="transitionText t2">Front-End</h2>
          </div>
          <div id="hiIm" className="hiIm">
            <h2>based in Mongolia.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
