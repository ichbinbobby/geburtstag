import Head from "next/head";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  // Define variables for repeated strings
  const pageTitle = "Bobby's Geburtstag im James-Simon-Park";
  const pageDescription =
    "Feiere Bobby's Geburtstag im James-Simon-Park. Keine Geschenke, nur Lebensmittel, Spiele und Decken.";
  const pageUrl = "https://geburtstag.ichbinbobby.de/";
  const thumbnailUrl = "/thumbnail.jpg";

  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>{pageTitle}</title>
        <meta content={pageDescription} name="description" />

        {/* Open Graph Meta Tags */}
        <meta content={pageTitle} property="og:title" />
        <meta content={pageDescription} property="og:description" />
        <meta content={thumbnailUrl} property="og:image" />
        <meta content={pageUrl} property="og:url" />
        <meta content="website" property="og:type" />

        {/* Twitter Card Meta Tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={pageTitle} name="twitter:title" />
        <meta content={pageDescription} name="twitter:description" />
        <meta content={thumbnailUrl} name="twitter:image" />
      </Head>

      <section className="flex flex-col items-center justify-center gap-2">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Feiere&nbsp;</span>
          <span className={title({ color: "violet" })}>Bobby&apos;s&nbsp;</span>
          <br />
          <span className={title()}>Geburtstag im</span>
          <br />
          <span className={title()}>James-Simon-Park</span>
          <div className={subtitle({ class: "mt-4" })}>
            Keine Geschenke. Nur Lebensmittel, Spiele und Decken.
          </div>
          <p className="text-inherit">
            Bis jetzt plane ich den Start zwischen 14 Uhr und 16 Uhr, je nachdem
            ob ich ein Pokemon Go Meetup habe an dem Tag.
          </p>
        </div>

        <div className="mt-4">
          <iframe
            allowFullScreen // React uses camelCase for this attribute
            className="rounded-lg" // Tailwind CSS class for rounded corners
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" // React uses camelCase here too
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d429.1488320607003!2d13.399095629731885!3d52.52199144430723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ddfe609d3b%3A0xf14557b8dbb549fe!2sJames-Simon-Park!5e0!3m2!1sde!2sde!4v1746715274564!5m2!1sde!2sde"
            style={{ border: 0 }}
            title="Google Maps - James-Simon-Park"
            width="600"
          />
        </div>
      </section>
    </>
  );
}
