import Image from 'next/image';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Nav />
      <section className="header16 cid-tOWsbJhqQR" id="header16-l">
        <div className="text-center container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-lg-8">
              <div className="image-wrap">
                <img
                  width={848}
                  height={565.33}
                  src="/assets/images/10.jpg"
                  alt="Mobirise Website Builder"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12 content-head">
              <h1 className="mbr-section-title mbr-fonts-style mt-4 display-2">
                <strong>Good Bye, Burnout</strong>
              </h1>
              <p className="mbr-text mbr-fonts-style mt-4 display-7">
                You can love the dating journey if you focus on the right
                things.
              </p>
              <div className="row-links mt-4">
                <ul className="header-menu">
                  <li className="header-menu-item mbr-fonts-style display-5">
                    Authenticity
                  </li>
                  <li className="header-menu-item mbr-fonts-style display-5">
                    Mindfulness
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features9 cid-tOWtxz20l2" id="features09-m">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 mb-5 content-head">
              <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>We help you focus on</strong>
              </h3>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-8 card">
              <div className="card-wrap card1">
                <div className="image-wrap">
                  <img
                    src="/assets/images/facets-horizontal.png"
                    alt="Mobirise Website Builder"
                  />
                  <div className="title-row display-7">
                    <h5 className="card-title1 mbr-fonts-style align-left m-0 display-2">
                      &nbsp;
                    </h5>
                  </div>
                </div>
                <div className="content-wrap">
                  <p className="card-text1 mbr-fonts-style align-left display-7">
                    Create a profile that reflects who you are while increasing
                    your self-awareness.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-12 col-lg-4 card">
              <div className="card-wrap card2">
                <div className="content-wrap">
                  <h5 className="card-title2 mbr-fonts-style align-left pb-4 display-5">
                    <strong>AUTHENTICITY</strong>
                  </h5>

                  <p className="card-text2 mbr-fonts-style align-left display-7">
                    Online to Offline transitions will be smooth when you align
                    your true self with your profile.
                    <br />
                    <br />
                    Most people feel <strong>deceived </strong>when{' '}
                    <strong>mismatch </strong>occurs, reducing trust in their
                    dating partner.
                    <br />
                    <br />
                    Focus on critical <strong>feedback</strong> and iterate
                    using <strong>Facets</strong>.<br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-12 col-lg-4 card">
              <div className="card-wrap card3">
                <div className="content-wrap">
                  <h5 className="card-title3 mbr-fonts-style align-left pb-4 display-5">
                    <strong>MINDFULNESS</strong>
                  </h5>

                  <p className="card-text3 mbr-fonts-style align-left display-7">
                    Being ghosted, lack of a deep connection with your date,
                    misalignment with values, and personality mismatch are tough
                    outcomes to endure while dating.
                    <br />
                    <br />
                    Through four core pillars of Acceptance and Commitment
                    Therapy, a proven intervention to reduce stress and anxiety,
                    you can navigate your journey without letting negative
                    experiences takeover.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-12 col-lg-8 card">
              <div className="card-wrap card4">
                <div className="image-wrap">
                  <img
                    src="/assets/images/facets-horizontal-1.png"
                    alt="Mobirise Website Builder"
                  />
                  <div className="title-row display-7">
                    <h5 className="card-title4 mbr-fonts-style align-left m-0 display-2">
                      &nbsp;
                    </h5>
                  </div>
                </div>
                <div className="content-wrap">
                  <p className="card-text4 mbr-fonts-style align-left display-7">
                    Our snippet-based curriculum includes thoughtful exercises,
                    personality quizzes and practical examples for you to
                    practice and gain self-awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        data-bs-version="5.1"
        className="info1 cid-tOWzR7dAxx"
        id="info1-n"
      >
        <div
          className="mbr-overlay"
          style={{ opacity: '0.6', backgroundColor: 'rgb(178, 67, 80)' }}
        ></div>
        <div className="align-center container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h3 className="mbr-section-title mb-4 mbr-fonts-style display-1">
                <strong>Love yourself.</strong>
                <br />
                <strong>Love the Journey.</strong>
              </h3>

              <div className="mbr-section-btn">
                <Link
                  className="btn btn-primary display-4"
                  href="https://forms.gle/RkxRxAJQTJZLVKeF7"
                >
                  Join the Waitlist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
