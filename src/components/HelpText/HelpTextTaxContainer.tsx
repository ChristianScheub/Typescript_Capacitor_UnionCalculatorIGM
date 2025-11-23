import React from "react";
import Popup from "../../ui/Popup/Popup";

interface HelpTextTaxContainerProps {
    onClose: () => void;
}


export const HelpTextTaxContainer: React.FC<HelpTextTaxContainerProps> = ({ onClose }) => {

    // HTML Content als JSX Element
    const helpTextContent = (
        <div>
            <h2>Erklärung der Steuerberechnung</h2>
         <i> Bitte beachten sie das ich diese Werte versucht habe auf 2025 zu aktualisieren, aber viele Zahlen konnte ich nicht so leicht finden und sie sind auf dem Stand von 2024 geblieben und sind teilweise da schon nicht korrekt gewesen.</i> <br /> <br />

            <p>In Deutschland wird die Einkommensteuer progressiv berechnet. Das bedeutet, je höher das Einkommen, desto höher der Steuersatz. Die Berechnung erfolgt gestaffelt nach verschiedenen Einkommensgrenzen.</p>

            <h3>1. Berechnung für höhere Einkommen</h3>
            <p>Für verschiedene Einkommensstufen werden unterschiedliche Formeln verwendet:</p>
            <i>Lediglich die Einkommensgrenzen zwischen den Gruppen habe ich auf 2025 aktualisiert, der Rest ist gleich geblieben aber war da schon eventuell nicht korrekt. Und die Steuerklassen Faktoren etc. konnte ich auch nicht aktualisiert finden.</i>
            <ul>
                <li><strong>Einkommen zwischen 12.096 EUR und 17.430 EUR:</strong> Hier wird die Formel <code>(y * 922.98 + 1400) * y</code> angewendet, wobei <code>y = (Einkommen - 12.096EUR) / 10.000</code>.</li>

                <li><strong>Einkommen zwischen 17.431 EUR und 68.430 EUR:</strong> In dieser Spanne gilt die Formel <code>(z * 181.19 + 2397) * z + 1025.38</code>, wobei <code>z = (Einkommen - 17.430 EUR) / 10.000</code>.</li>

                <li><strong>Einkommen zwischen 68.430EUR und 277.825 EUR:</strong> Hier wird ein fester Steuersatz von 42% auf das Einkommen angewendet, mit der Formel <code>0.42 * Einkommen - 10.602,13 EUR</code>. Beispiel: Bei einem Einkommen von 100.000 EUR beträgt die Steuer 31.397,87 EUR.</li>

                <li><strong>Einkommen über 277.826 EUR:</strong> Hier gilt der Höchststeuersatz von 45%, mit der Formel <code>0.45 * Einkommen - 18.936,88 EUR</code>. Beispiel: Bei einem Einkommen von 300.000 EUR beträgt die Steuer 116.063,12 EUR.</li>
            </ul>

            <h3>2. Kirchensteuer</h3>
            <p>Die Kirchensteuer wird auf die berechnete Einkommensteuer aufgeschlagen. Sie beträgt 8% oder 9%, je nach Bundesland. Die Formel zur Berechnung lautet:</p>
            <p><code>Kirchensteuer = Einkommensteuer * Kirchensteuersatz</code></p>
            <p>Beispiel: Wenn die Einkommensteuer 10.000 EUR beträgt und der Kirchensteuersatz bei 9% liegt, ergibt sich eine Kirchensteuer von 900 EUR.</p>

            <h4>Kappung der Kirchensteuer</h4>
            <p>In einigen Bundesländern wird die Kirchensteuer auf einen bestimmten Prozentsatz des Einkommens begrenzt (z.B. 3%). Die Formel für die Kappung lautet:</p>
            <p><code>Maximale Kirchensteuer = Einkommen * Kappungsrate</code></p>
            <p>Beispiel: Bei einem Einkommen von 100.000 EUR und einer Kappungsrate von 3% beträgt die maximale Kirchensteuer 3.000 EUR. Falls die berechnete Kirchensteuer 3.200 EUR wäre, wird sie auf 3.000 EUR gekappt.</p>

            <h3>3. Solidaritätszuschlag (Soli)</h3>
            <p>Der Solidaritätszuschlag wird nur erhoben, wenn das Einkommen über bestimmten Schwellenwerten liegt:</p>
            <ul>
                <li>Für Alleinstehende: 96.820 EUR</li>
                <li>Für Verheiratete: 193.641 EUR</li>
            </ul>
            <p>Liegt das Einkommen über diesen Werten, beträgt der Soli 5,5% der Einkommensteuer:</p>
            <p><code>Solidaritätszuschlag = Einkommensteuer * 0.055</code></p>
            <p>Beispiel: Bei einer Einkommensteuer von 20.000 EUR beträgt der Solidaritätszuschlag 1.100 EUR.</p>
        </div>
    );

    return (
        <Popup content={helpTextContent} onClose={onClose} />
    );
};

export default HelpTextTaxContainer;