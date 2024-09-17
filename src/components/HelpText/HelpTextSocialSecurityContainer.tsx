import React from "react";
import Popup from "../../ui/popup/Popup";


interface HelpTextSocialSecurityContainerProps {
    onClose: () => void;
}

export const HelpTextSocialSecurityContainer: React.FC<HelpTextSocialSecurityContainerProps> = ({ onClose }) => {

    const helpTextContent = (
        <div>
            <h2>Erklärung der Sozialversicherungsbeiträge</h2>
            <p>In Deutschland werden verschiedene Sozialversicherungen auf das Einkommen erhoben, die von Arbeitnehmern und Arbeitgebern getragen werden. Die Beiträge werden bis zu bestimmten Beitragsbemessungsgrenzen erhoben, und die Beitragssätze variieren je nach Versicherungstyp.</p>

            <h3>1. Rentenversicherung</h3>
            <p>Die Rentenversicherung wird mit einem Satz von 9,3% auf das Einkommen erhoben, bis zur Beitragsbemessungsgrenze:</p>
            <ul>
                <li>Westdeutschland: 7.550 EUR monatlich</li>
                <li>Ostdeutschland: 7.450 EUR monatlich</li>
            </ul>
            <p>Beispiel: Bei einem Einkommen von 8.000 EUR in Westdeutschland wird der Beitrag auf 7.550 EUR berechnet, was einem Arbeitnehmeranteil von 702,15 EUR entspricht.</p>

            <h3>2. Arbeitslosenversicherung</h3>
            <p>Die Arbeitslosenversicherung beträgt 1,3% des Einkommens, ebenfalls bis zur Beitragsbemessungsgrenze:</p>
            <ul>
                <li>Westdeutschland: 7.550 EUR monatlich</li>
                <li>Ostdeutschland: 7.450 EUR monatlich</li>
            </ul>
            <p>Beispiel: Bei einem Einkommen von 6.000 EUR in Westdeutschland beträgt der Arbeitnehmeranteil zur Arbeitslosenversicherung 78 EUR.</p>

            <h3>3. Krankenversicherung</h3>
            <p>Die Krankenversicherung beträgt 7,3% des Einkommens (inkl. Zusatzbeitrag), bis zur Beitragsbemessungsgrenze von 5.175 EUR monatlich:</p>
            <p>Beispiel: Bei einem Einkommen von 6.000 EUR wird der Beitrag auf 5.175 EUR berechnet, was einem Arbeitnehmeranteil von 377,78 EUR entspricht.</p>

            <h3>4. Pflegeversicherung</h3>
            <p>Die Pflegeversicherung beträgt 1,7% für Arbeitnehmer mit Kindern und 2,3% für kinderlose Arbeitnehmer, ebenfalls bis zur Beitragsbemessungsgrenze von 5.175 EUR monatlich:</p>
            <p>Beispiel: Ein kinderloser Arbeitnehmer mit einem Einkommen von 5.500 EUR zahlt einen Beitrag auf 5.175 EUR, was einem Anteil von 119,02 EUR entspricht.</p>

            <h3>5. Gesamtsozialversicherungsbeitrag</h3>
            <p>Der Gesamtbeitrag zur Sozialversicherung setzt sich aus den oben genannten Anteilen zusammen und kann je nach Einkommen und Region variieren. Die Berechnungen berücksichtigen die Beitragsbemessungsgrenzen, um sicherzustellen, dass nicht mehr als der maximale Beitrag erhoben wird.</p>
        </div>
    );

    return (
        <Popup content={helpTextContent} onClose={onClose} />
    );
};

export default HelpTextSocialSecurityContainer;