import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Card from "./Card";
import { TaxAndInsurancePieChartProps } from "./TaxAndInsurancePieChartProps";

const COLORS = ["#00000","#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF6666", "#FF33FF","#AB47BC"];

export const TaxAndInsurancePieChart: React.FC<TaxAndInsurancePieChartProps> = ({
    tax,
    solidarityTax,
    churchTax,
    pensionInsurance,
    unemploymentInsurance,
    healthInsurance,
    healthInsuranceSupplement,
    careInsurance,
    grossSalary
}) => {
    // Datenstruktur für das Pie-Chart
    const data = [
        { name: "Nettogehalt", value: grossSalary},
        { name: "Einkommensteuer", value: tax },
        { name: "Solidaritätszuschlag", value: solidarityTax },
        { name: "Kirchensteuer", value: churchTax },
        { name: "Rentenversicherung", value: pensionInsurance },
        { name: "Arbeitslosenversicherung", value: unemploymentInsurance },
        { name: "Krankenversicherung", value: healthInsurance },
        { name: "Krankenversicherung Zusatzbeitrag", value: healthInsuranceSupplement},
        { name: "Pflegeversicherung", value: careInsurance },
    ];

    return (
        <Card>
            <div style={{ textAlign: "center", marginBottom: "10px" }}>
                <b>Steuern und Sozialversicherung Verteilung</b>
            </div>
            <div style={{ width: "100%", height: 500 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius="80%"
                            fill="#8884d8"
                            label={false} // Labels im Diagramm ausblenden
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}€`} />
                        <Legend
                            layout="horizontal"
                            align="center"
                            verticalAlign="bottom"
                            wrapperStyle={{ paddingTop: "10px" }}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};