import React from "react";
import Popup from "../../ui/popup/Popup";

interface HelpTextBonusContainerProps {
    onClose: () => void;
}

export const HelpTextBonusContainer: React.FC<HelpTextBonusContainerProps> = ({ onClose }) => {

    const helpTextContent = (
        <div>
            <h2>Erklärung der Sonderzahlungen</h2>
            <p>In dieser Anwendung werden verschiedene Sonderzahlungen wie Bonuszahlungen, Weihnachtsgeld, Urlaubsgeld und andere Zusatzleistungen auf das Gehalt angerechnet. Diese Berechnungen berücksichtigen spezifische Prozentsätze und Gehaltsdaten, um die Gesamtsumme korrekt zu berechnen.</p>

            <h3>1. Grundgehalt und Bonus</h3>
            <p>Das Grundgehalt wird basierend auf deiner Tarifgruppe und Region ermittelt. Zusätzlich wird ein prozentuales Leistungsentgeld zu diesem Gehalt berechnet:</p>
            <ul>
                <li>Leistungsentgeld Prozentsatz: Dynamisch basierend..</li>
                <li>Beispiel: Bei einem Gehalt von 3.000 EUR und einem Leistungsentgeld von 5% ergibt sich ein Bonus von 150 EUR, was zu einem Gesamtgehalt von 3.150 EUR führt.</li>
            </ul>

            <h3>2. Weihnachtsgeld</h3>
            <p>Das Weihnachtsgeld wird mit einem festgelegten Prozentsatz des Gehalts berechnet. Dieser Prozentsatz kann je nach Tarifvertrag und Unternehmen variieren:</p>
            <ul>
                <li>Weihnachtsgeld Prozentsatz: Dynamisch je nach Unternehmen.</li>
                <li>Beispiel: Bei einem Gehalt von 3.000 EUR und einem Weihnachtsgeld von 70% ergibt sich ein Weihnachtsgeld von 2.100 EUR.</li>
            </ul>

            <h3>3. Transformationsgeld</h3>
            <p>Das Transformationsgeld ist eine zusätzliche Zahlung, die einen festgelegten Prozentsatz des Gehalts ausmacht:</p>
            <ul>
                <li>Prozentsatz: 18,4%</li>
                <li>Beispiel: Bei einem Gehalt von 3.000 EUR ergibt sich ein Transformationsgeld von 552 EUR.</li>
            </ul>

            <h3>4. T-Zug A und T-Zug B</h3>
            <p>Diese zusätzlichen Zahlungen, auch bekannt als tarifliche Zusatzvergütungen, werden ebenfalls als prozentuale Boni berechnet:</p>
            <ul>
                <li>T-Zug A Prozentsatz: 27,5%</li>
                <li>T-Zug B Prozentsatz: 18,5%</li>
                <li>Beispiel: Bei einem Gehalt von 3.000 EUR ergeben sich T-Zug A = 825 EUR und T-Zug B = 555 EUR.</li>
            </ul>

            <h3>5. Urlaubsgeld</h3>
            <p>Das Urlaubsgeld wird ebenfalls mit einem festgelegten Prozentsatz des Gehalts berechnet:</p>
            <ul>
                <li>Prozentsatz: 69%</li>
                <li>Beispiel: Bei einem Gehalt von 3.000 EUR ergibt sich ein Urlaubsgeld von 2.070 EUR.</li>
            </ul>

            <h3>6. Gesamte Sonderzahlungen</h3>
            <p>Das Jahresgehalt mit allen Sonderzahlungen wird durch Addition des Grundgehalts, des Leistungsentgelds sowie der oben genannten Sonderzahlungen berechnet. Diese werden dann auf das Jahr verteilt:</p>
            <ul>
                <li>Beispiel: Bei einem Gehalt von 3.000 EUR und allen Sonderzahlungen kann das Gesamtjahresgehalt signifikant ansteigen.</li>
            </ul>
        </div>
    );

    return (
        <Popup content={helpTextContent} onClose={onClose} />
    );
};

export default HelpTextBonusContainer;