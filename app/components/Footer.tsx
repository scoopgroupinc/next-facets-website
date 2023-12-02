import Link from "next/link";

function Footer() {
  return (
    <section className="footer3 cid-tOWHoKY82E" id="footer3-r">
      <div className="container">
        <div className="navbar-caption text-white display-7 align-center mb-4">
          <a href="mailto:support@facets.one">Get in touch</a>
        </div>
        <div className="media-container-row align-center mbr-white">
          <div className="row row-links">
            <ul className="foot-menu">
              <li className="foot-menu-item mbr-fonts-style display-7">
                <Link href="/product" className="text-primary">
                  Product
                </Link>
              </li>
              <li className="foot-menu-item mbr-fonts-style display-7">
                <Link href="/thejourney" className="text-primary">
                  The Journey
                </Link>
              </li>
              <li className="foot-menu-item mbr-fonts-style display-7">
                <Link href="/about" className="text-primary">
                  About Us
                </Link>
              </li>
              <li className="foot-menu-item mbr-fonts-style display-7">
                <Link href="/privacy" className="text-primary">
                  Privacy
                </Link>
              </li>
              <li className="foot-menu-item mbr-fonts-style display-7">
                <Link href="/terms" className="text-primary">
                  Terms
                </Link>
              </li>
              <li className="foot-menu-item mbr-fonts-style display-7">
                <Link href="/waitlist" className="text-primary">
                  Waitlist
                </Link>
              </li>
            </ul>
          </div>
          <div className="row social-row">
            <div className="social-list align-right pb-2">
              <div className="soc-item">
                <Link href="https://www.facebook.com/facetsmindfuldating/" target="_blank">
                  <span className="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                </Link>
              </div>
              <div className="soc-item">
                <Link href="https://www.instagram.com/facets.mindful.dating/" target="_blank">
                  <span className="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                </Link>
              </div>
              <div className="soc-item">
                <Link
                  href="https://www.tiktok.com/@facets.mindfuldating?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                >
                  <span className="socicon-tiktok socicon mbr-iconfont mbr-iconfont-social"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row row-copirayt">
            <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
              © Copyright 2023 Facets™. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
