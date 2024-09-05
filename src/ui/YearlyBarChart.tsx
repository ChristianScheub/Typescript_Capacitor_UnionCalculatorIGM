import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Card from "./Card";

// Typen für die Props definieren
interface YearlyBarChartProps {
    title: string;
    hint: string;
    january: number;
    february: number;
    march: number;
    april: number;
    may: number;
    june: number;
    july: number;
    august: number;
    september: number;
    october: number;
    november: number;
    december: number;
}

export const YearlyBarChart: React.FC<YearlyBarChartProps> = ({
    title,
    hint,
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
}) => {
    // Datenstruktur für das Diagramm erstellen
    const data = [
        { month: "01", value: january },
        { month: "02", value: february },
        { month: "03", value: march },
        { month: "04", value: april },
        { month: "05", value: may },
        { month: "06", value: june },
        { month: "07", value: july },
        { month: "08", value: august },
        { month: "09", value: september },
        { month: "10", value: october },
        { month: "11", value: november },
        { month: "12", value: december },
    ];

    return (
        <Card>
            <b>{title}</b>
            <br/>
            <br/>
            <div style={{ width: "100%", height: 400 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <center><i>{hint}</i></center>
            <br/>
        </Card>
    );
};