import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/Components/ui/card";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {DatePicker} from "../form";


export function BarChartComponent({ title, data, dataKey, onDateChange, showDateRange, className, height}: {
    title: string;
    className?: string;
    data: object[];
    dataKey: string;
    onDateChange?: ({ start: Date, end: Date }) => void;
    showDateRange?: boolean;
    height?: string;
}) {

    return (
        <Card>
            <CardHeader className="xl:flex-row xl:gap-5 xl:items-center">
                <div className="">
                    <CardTitle className="capitalize">{title}</CardTitle>
                    <CardDescription>January - June 2024</CardDescription>
                </div>
                {showDateRange &&
                    <div className="flex gap-3 justify-end flex-grow">
                        <DatePicker/>
                        <DatePicker/>
                    </div>
                }
            </CardHeader>
            <CardContent className={className}>
                <ResponsiveContainer width="100%" height="100%">
                    {data.length <= 0 ? <p>No Result yet...</p> :
                        <BarChart data={data}>
                            <Bar dataKey={"subscribers"} fill="#3F4FC6"/>
                            <Tooltip/>
                            <YAxis dataKey="subscribers" tickLine={false}/>
                            <XAxis dataKey="date" tickLine={false}/>
                        </BarChart>
                    }
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}
