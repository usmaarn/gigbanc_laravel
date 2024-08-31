import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/Components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/Components/ui/chart";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import {DatePicker} from "../form";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {useEffect, useState} from "react";
import {Subscriber} from "@/types";
import {http} from "@/lib/http-client";

const chartData = [
    { date: "January", subscribers: 1861 },
    { date: "February", subscribers: 305 },
    { date: "March", subscribers: 237 },
    { date: "April", subscribers: 73 },
    { date: "May", subscribers: 209 },
    { date: "June", subscribers: 214 },
];

const chartConfig = {
    subscribers: {
        label: "Subscribers",
        color: "#3F4FC6",
    },
} satisfies ChartConfig;

export function SubscribersChart({ title }: { title: string }) {
    const [dateStart, setDateStart] = useState(new Date());
    const [dateEnd, setDateEnd] = useState(new Date());
    const [chartData, setChartData] = useState([]);

    const {data, isLoading}: UseQueryResult<{data: Subscriber[]}> = useQuery({
        queryKey: ["subscribers"],
        queryFn: () => http.get(route("frontend.subscribers.chart")).then((res) => res.data),
    });

    useEffect(() => {

    }, [dateStart, dateEnd]);

    return (
        <Card>
            <CardHeader className="md:flex-row gap-5 items-center">
                <div className="">
                    <CardTitle className="capitalize">{title}</CardTitle>
                    <CardDescription></CardDescription>
                </div>
                <div className="flex gap-3 justify-end flex-grow">
                    <DatePicker />
                    <DatePicker />
                </div>
            </CardHeader>
            <CardContent>
                {isLoading ? "Loading....": <Chart data={chartData} />}
            </CardContent>
        </Card>
    );
}


function Chart({data}){
    console.log(data)
    return(
        <ChartContainer config={chartConfig}>
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="date"
                    tickLine={false}
                    tickMargin={1}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                    dataKey="subscribers"
                    fill="var(--color-subscribers)"
                    radius={8}
                />
            </BarChart>
        </ChartContainer>
    )
}
