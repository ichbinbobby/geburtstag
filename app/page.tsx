import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-2">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Feiere&nbsp;</span>
          <span className={title({ color: "violet" })}>Bobby&apos;s&nbsp;</span>
          <br />
          <span className={title()}>Geburtstag beim </span>
          <br />
          <span className={title()}>Mega-Raid-Tag</span>
          <br />
          <span className={title()}>am Alexanderplatz</span>
          <div className={subtitle({ class: "mt-4" })}>
            Oder 16 Uhr im James-Simon-Park
          </div>
          <p className="text-inherit">
            Wir treffen uns 14 Uhr vor dem dm Drogeriemarkt am Alex und spielen
            den Mega-Raid-Tag oder 16 Uhr auf ner Wiese im James-Simon-Park. Ich
            bringe Decken zum Sitzen mit. Bitte bringt euer eigenes Essen und
            Trinken mit. In der nähe gibt es ein Rewe. Keine materiellen
            Geschenke bitte.
          </p>
        </div>

        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.1937619936602!2d13.398854487968153!3d52.521902352403174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ddfe609d3b%3A0xf14557b8dbb549fe!2sJames-Simon-Park!5e1!3m2!1sde!2sde!4v1782128738658!5m2!1sde!2sde"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
