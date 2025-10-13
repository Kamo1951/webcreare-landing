import Navbar from "../components/navbar/Navbar";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>

          <h2 className="text-2xl font-semibold mt-8">Angaben gemäß § 5 DDG</h2>
          <p className="text-[var(--paragraph-text-color)]">
            Mikolaj Spruch &amp; Oliwer Keskin GbR
            <br />
            Perronstraße 6B
            <br />
            83684 Tegernsee
          </p>

          <h2 className="text-2xl font-semibold mt-8">Vertreten durch</h2>
          <p className="text-[var(--paragraph-text-color)]">
            Mikolaj Spruch
            <br />
            Oliwer Keskin
          </p>

          <h2 className="text-2xl font-semibold mt-8">Umsatzsteuer-ID</h2>
          <p className="text-[var(--paragraph-text-color)]">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
            DE369911978
          </p>

          <h2 className="text-2xl font-semibold mt-8">Haftung für Links</h2>
          <p className="text-[var(--paragraph-text-color)]">
            Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p className="text-[var(--paragraph-text-color)]">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Urheberrecht</h2>
          <p className="text-[var(--paragraph-text-color)]">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p className="text-[var(--paragraph-text-color)]">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Datenschutz</h2>
          <p className="text-[var(--paragraph-text-color)]">
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p className="text-[var(--paragraph-text-color)]">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
          <p className="text-[var(--paragraph-text-color)]">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
        </div>
      </div>
    </>
  );
}
