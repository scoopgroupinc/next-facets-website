import Footer from '@/app/components/website/Footer';
import Nav from '@/app/components/website/Nav';

export default function Waitlist() {
  // note sourced from https://docs.google.com/forms/d/1SeIMGNDFm3PwOb7VLHifNarrEcyOylmIMNESZQSfvII/edit
  return (
    <>
      <Nav />
      <div style={{ paddingTop: 100 }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfCtfqzQsW1soTfnoNKHToXbNFAbCjI3v4FVP-Qf-80ppyfbA/viewform?embedded=true"
          width="640"
          height="2984"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
      <Footer />
    </>
  );
}
