import Image from 'next/image';

export default function Nav() {
  return (
    <section
      //data-bs-version="5.1"
      className="menu menu1 cid-tOObho9ZUw"
      // once="menu"
      id="menu01-0"
    >
      <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-logo">
              <a href="https://mobiri.se">
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/scoop-mockups-6.png"
                  alt="Mobirise Website Builder"
                />
              </a>
            </span>
            <span className="navbar-caption-wrap">
              <a
                className="navbar-caption text-black text-primary display-4"
                href="index.html"
              >
                Facets
              </a>
            </span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="hamburger">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav nav-dropdown" data-app-modern-menu="true">
              <li className="nav-item">
                <a
                  className="nav-link link text-black text-primary display-4"
                  href="product.html"
                >
                  Product
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link link text-black text-primary display-4"
                  href="thejourney.html"
                >
                  The Journey
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link link text-black text-primary display-4"
                  href="aboutus.html"
                >
                  About Us
                </a>
              </li>
            </ul>

            <div className="navbar-buttons mbr-section-btn">
              <a
                className="btn btn-primary display-4"
                href="https://forms.gle/RkxRxAJQTJZLVKeF7"
              >
                Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
