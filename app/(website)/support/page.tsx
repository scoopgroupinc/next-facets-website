import Image from 'next/image';
import Nav from '@/app/components/Nav';
import Footer from '@/app/components/Footer';
import Link from 'next/link';

export default function Support() {
  return (
    <>
      <Nav />
      <section
        data-bs-version="5.1"
        className="header12 cid-tOWAXr5sga"
        id="header12-o"
      >
        <div className="text-center container">
        <div className="row justify-content-center">
            <div className="col-md-12 content-head">
              <h1 className="mbr-section-title mbr-fonts-style mb-4 display-1">
                <strong>Welcome to Facets Support</strong>
              </h1>
              <p className="mbr-text mbr-fonts-style mb-4 display-7">
                Is something not working as expected?
                <br/>
                <br/>
                Send an email to our support team and we&#39;ll
                get back at you within 2 business days.
                <br/>
                <br/>
                
                <Link
                      className="btn btn-primary display-4"
                      href="mailto:support@facets.one"
                    >
                      support@facets.one
                </Link>
              </p>
            </div>
          </div>
          <div className="row mb-4 justify-content-center">
            <div className="col-12 col-md-8">
              <img
                width={940}
                height={788}
                className="w-100"
                src="/assets/images/support-facets.png"
                alt="Facets Support"
              />
            </div>
          </div>

        </div>
      </section>


      <Footer />
    </>
  );
}
