import Image from 'next/image';
import Link from 'next/link';

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
              <Link href="/">
                <Image
                  width={50}
                  height={50}
                  src="/assets/images/facets-logo.png"
                  alt="Facets Logo"
                />
              </Link>
            </span>
            <span className="navbar-caption-wrap">
              <Link
                href="/"
                className="navbar-caption text-black text-primary display-4"
              >
                Facets
              </Link>
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
                <Link
                  className="nav-link link text-black text-primary display-4"
                  href="/product"
                >
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link link text-black text-primary display-4"
                  href="/thejourney"
                >
                  The Journey
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link link text-black text-primary display-4"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>

            <div className="navbar-buttons mbr-section-btn">
              <Link
                className="btn btn-primary display-4"
                href="/waitlist"
              >
                Waitlist
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
