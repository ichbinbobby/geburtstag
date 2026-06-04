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
            5 Raidpässe gratis
          </div>
          <p className="text-inherit">
            Wir treffen uns vor dem dm Drogeriemarkt am Alex und spielen den Mega-Raid-Tag. Danach können wir uns irgendwo hinpflanzen und chillen.
          </p>
        </div>

        <div className="mt-4">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d171.48480150181575!2d13.41273871731954!3d52.52156776653275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sde!2sde!4v1780577469673!5m2!1sde!2sde" 
            width="600" 
            height="450" 
            style={{ border: 0 }}
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>
    </>
  );
}
