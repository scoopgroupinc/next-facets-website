import Script from "next/script";
import Head from "next/head";
import "public/assets/web/assets/mobirise-icons2/mobirise2.css";
import "public/assets/bootstrap/css/bootstrap.min.css";
import "public/assets/bootstrap/css/bootstrap-grid.min.css";
import "public/assets/bootstrap/css/bootstrap-reboot.min.css";
import "public/assets/web/assets/gdpr-plugin/gdpr-styles.css";
import "public/assets/dropdown/css/style.css";
import "public/assets/socicon/css/styles.css";
import "public/assets/theme/css/style.css";
import "public/assets/mobirise/css/mbr-additional.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Facets Authentic & Mindful Dating",
  description:
    "Find true love. We are a wellness app for singles navigating the dating space. We combine the latest research & psychology to help people build stronger and deeper connections.",

  itunes: {
    appId: "1578651315",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <body>
        {children}
        <Script
          id="segment-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on","addSourceMiddleware","addIntegrationMiddleware","setAnonymousId","addDestinationMiddleware"];analytics.factory=function(e){return function(){if(window.analytics.initialized)return window.analytics[e].apply(window.analytics,arguments);var i=Array.prototype.slice.call(arguments);i.unshift(e);analytics.push(i);return analytics}};for(var i=0;i<analytics.methods.length;i++){var key=analytics.methods[i];analytics[key]=analytics.factory(key)}analytics.load=function(key,i){var t=document.createElement("script");t.type="text/javascript";t.async=!0;t.src="https://cdn.segment.com/analytics.js/v1/" + key + "/analytics.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n);analytics._loadOptions=i};analytics._writeKey="XJz0zyd78BLKvCM2qPTq0pGE775JgOlh";;analytics.SNIPPET_VERSION="4.16.1";
          analytics.load("XJz0zyd78BLKvCM2qPTq0pGE775JgOlh");
          analytics.page();
          }}();
        `,
          }}
        />
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8994148854330146"
        />
        <Script src="/assets/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/smoothscroll/smooth-scroll.js"></Script>
        <Script src="/assets/ytplayer/index.js"></Script>
        <Script src="/assets/dropdown/js/navbar-dropdown.js"></Script>
        <Script src="/assets/embla/embla.min.js"></Script>
        <Script src="/assets/embla/script.js"></Script>
        <Script src="/assets/theme/js/Script.js"></Script>
      </body>
    </>
  );
}
