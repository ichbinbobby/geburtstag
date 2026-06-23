import { title, subtitle } from "@/components/primitives";
import { FoodList } from "@/components/food-list";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row gap-8 items-start lg:h-full lg:min-h-0 py-6">
      <div className="flex flex-col items-center gap-4 w-full lg:flex-1 lg:h-full lg:min-h-0">
        <div className="text-center max-w-xl shrink-0">
          <span className={title()}>Feiere&nbsp;</span>
          <span className={title({ color: "violet" })}>Bobby&apos;s&nbsp;</span>
          <br />
          <span className={title()}>Geburtstag am </span>
          <br />
          <span className={title()}>Sonntag den 19. Juli</span>
          <br />
          <span className={title()}>im James-Simon-Park</span>
          <div className={subtitle({ class: "mt-4" })}>
            Bring dein Trinken und Essen mit
          </div>
          <p className="text-inherit">
            Wir treffen uns 14 Uhr auf der Wiese im James-Simon-Park. Ich
            bringe Decken zum Sitzen mit. Bitte bringt euer eigenes Essen und
            Trinken mit. Am Hackeschen Markt gibt es Döner, Pizza, Pommes, Banh
            Mi, Bubble Tea usw. Keine materiellen Geschenke bitte.
          </p>
        </div>

        <div className="w-full lg:flex-1 lg:min-h-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d338.1937619936602!2d13.398854487968153!3d52.521902352403174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851ddfe609d3b%3A0xf14557b8dbb549fe!2sJames-Simon-Park!5e1!3m2!1sde!2sde!4v1782128738658!5m2!1sde!2sde"
            className="w-full h-64 lg:h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full lg:w-96 lg:h-full lg:min-h-0">
        <h2 className={subtitle({ class: "shrink-0" })}>Essen in der Nähe</h2>
        <div className="lg:flex-1 lg:min-h-0 flex flex-col">
          <FoodList />
        </div>
      </div>
    </section>
  );
}
