import React from "react";
import Popup from "../../ui/Popup/Popup";

interface HelpTextTaxContainerProps {
    onClose: () => void;
}


export const HelpTextTaxContainer: React.FC<HelpTextTaxContainerProps> = ({ onClose }) => {

    const helpTextContent = (
        <div>
            <h2>Erklärung der Steuerberechnung</h2>

            <div style={{ background: '#fff3cd', border: '1px solid #ffc107', borderRadius: '6px', padding: '12px', marginBottom: '16px' }}>
                <strong>⚠️ Wichtiger Hinweis – Keine Steuerberatung</strong>
                <p style={{ margin: '8px 0 0 0' }}>
                    Diese App dient ausschließlich zur <strong>groben Orientierung</strong> und stellt <strong>keine steuerliche oder rechtliche Beratung</strong> dar.
                    Die Berechnungen sind vereinfacht und berücksichtigen nicht alle individuellen Faktoren Ihrer persönlichen Steuersituation.
                    Für verbindliche Auskünfte wenden Sie sich bitte an einen <strong>zugelassenen Steuerberater</strong> oder das zuständige Finanzamt.
                </p>
            </div>

            <div style={{ background: '#f8d7da', border: '1px solid #f5c2c7', borderRadius: '6px', padding: '12px', marginBottom: '16px' }}>
                <strong>⚠️ Haftungsausschluss</strong>
                <p style={{ margin: '8px 0 0 0' }}>
                    Die Entwickler dieser App übernehmen <strong>keinerlei Haftung</strong> für die Richtigkeit, Vollständigkeit oder Aktualität der angezeigten Werte.
                    Entscheidungen, die auf Basis dieser Berechnungen getroffen werden, liegen in der alleinigen Verantwortung des Nutzers.
                    Steuergesetze können sich jederzeit ändern – die angezeigten Werte basieren auf dem Stand von <strong>2026 (§32a EStG)</strong> und wurden nicht von einem Steuerberater geprüft.
                </p>
            </div>

            <p>In Deutschland wird die Einkommensteuer progressiv berechnet. Je höher das Einkommen, desto höher der Steuersatz. Die Berechnung basiert auf dem <strong>zu versteuernden Einkommen (zvE)</strong>, das nach Abzug aller Freibeträge und Pauschalen vom Bruttoeinkommen übrig bleibt.</p>

            <h3>1. Abzüge vom Bruttoeinkommen</h3>
            <p>Bevor die Steuer berechnet wird, werden folgende Beträge vom Jahresbruttolohn abgezogen:</p>
            <ul>
                <li><strong>Arbeitnehmer-Pauschbetrag:</strong> 1.230 EUR (automatisch für Werbungskosten)</li>
                <li><strong>Sonderausgaben-Pauschbetrag:</strong> 36 EUR</li>
                <li><strong>Vorsorgepauschale:</strong> Arbeitnehmeranteile zur Renten- (9,3%), Kranken- (7,3% + halber Zusatzbeitrag) und Pflegeversicherung (1,7% / 2,3% für Kinderlose), jeweils bis zur Beitragsbemessungsgrenze</li>
                <li><strong>Steuerklasse 2:</strong> zusätzlich Entlastungsbetrag Alleinerziehend (4.260 EUR)</li>
                <li><strong>Werbungskosten / Fahrtkosten:</strong> individuell eingebbar</li>
            </ul>
            <p>Das Ergebnis ist das zvE, auf das die §32a-Formel angewendet wird.</p>

            <h3>2. Steuertarif §32a EStG 2026</h3>
            <p>Auf das zvE werden folgende Steuersätze angewendet:</p>
            <ul>
                <li><strong>Bis 12.348 EUR (Grundfreibetrag):</strong> 0 EUR Steuer</li>
                <li><strong>12.349 – 17.799 EUR:</strong> Formel <code>(914,51 × y + 1.400) × y</code>, wobei <code>y = (zvE − 12.348) / 10.000</code></li>
                <li><strong>17.800 – 69.878 EUR:</strong> Formel <code>(173,10 × z + 2.397) × z + 1.034,87</code>, wobei <code>z = (zvE − 17.799) / 10.000</code></li>
                <li><strong>69.879 – 277.825 EUR:</strong> <code>0,42 × zvE − 11.135,63 EUR</code></li>
                <li><strong>Ab 277.826 EUR:</strong> <code>0,45 × zvE − 19.470,38 EUR</code></li>
            </ul>
            <p><strong>Steuerklasse 3</strong> verwendet das Splitting-Verfahren: zvE wird halbiert, die Steuer berechnet und das Ergebnis verdoppelt.</p>

            <h3>3. Kirchensteuer</h3>
            <p>Die Kirchensteuer beträgt je nach Bundesland 8% oder 9% der Einkommensteuer:</p>
            <p><code>Kirchensteuer = Einkommensteuer × Kirchensteuersatz</code></p>
            <p>In vielen Bundesländern wird die Kirchensteuer zusätzlich auf einen Prozentsatz des Einkommens gekappt (z.B. 3%).</p>

            <h3>4. Solidaritätszuschlag (Soli)</h3>
            <p>Der Soli wird nur erhoben, wenn das Einkommen über folgenden Freigrenzen liegt:</p>
            <ul>
                <li>Alleinstehende (SK 1, 2, 5, 6): 98.403 EUR</li>
                <li>Verheiratete (SK 3, 4): 196.806 EUR</li>
            </ul>
            <p>Darüber hinaus beträgt der Soli 5,5% der Einkommensteuer:</p>
            <p><code>Solidaritätszuschlag = Einkommensteuer × 0,055</code></p>

            <div style={{ background: '#e2e3e5', border: '1px solid #d3d6d8', borderRadius: '6px', padding: '12px', marginTop: '16px', fontSize: '0.85em' }}>
                <p style={{ margin: '0' }}>
                    Die dargestellten Berechnungen sind eine stark vereinfachte Schätzung und können aus zahlreichen Gründen von Ihrer tatsächlichen Steuerlast abweichen.
                    Für Ihre persönliche Situation maßgeblich ist ausschließlich Ihre individuelle Steuererklärung bzw. der Bescheid Ihres Finanzamts.
                </p>
            </div>
        </div>
    );

    return (
        <Popup content={helpTextContent} onClose={onClose} />
    );
};

export default HelpTextTaxContainer;
