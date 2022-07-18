import "../styles/header.css";

export default function Header() {
  return (
    
    <div className="header h-100 col-lg-12 d-flex justify-content-around">
      <div className="headerMain col-lg-6 d-none d-lg-flex">
        <ul className="d-flex col-lg-10 justify-content-around">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/service">Service</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      <div className="headerIcons col-lg-6 col-md-11 col-11 justify-content-end d-flex">
        <a
          className="iconFb"
          target="_blank"
          rel="noreferrer"
          href="http://www.facebook.com/z1kkan"
        >
          <i class="fa-brands fa-lg fa-facebook-f"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.instagram.com/zkkan"
        >
          <i class="fa-brands fa-lg fa-instagram"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="http://www.instagram.com/zkkan"
        >
          <i class="fa-brands fa-lg fa-twitter"></i>
        </a>
        <div className="headerCanvas d-lg-none">
        <i class="fa-solid fa-lg fa-bars"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        ></i>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
        <ul className="offCanvasMain d-flex flex-column">
          <li>
            <a href="/">Home</a>
          </li>
          <hr />
          <li>
            <a href="/about">About</a>
          </li>
          <hr />
          <li>
            <a href="/service">Service</a>
          </li>
          <hr />
          <li>
            <a href="/contact">Contact</a>
          </li>
          <hr />
        </ul>
        </div>
      </div>
      </div>
    </div>
    
  );
}
