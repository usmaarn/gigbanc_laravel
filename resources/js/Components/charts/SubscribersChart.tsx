import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/Components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/Components/ui/chart";
import {Bar, BarChart, CartesianGrid, Line, LineChart, XAxis} from "recharts";
import {DatePicker} from "../form";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getSubscribers} from "@/lib/actions/subscriber";
import {useEffect, useState} from "react";
import {Subscriber} from "@/types";
import {http} from "@/lib/http-client";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
];

const chartConfig = {
    desktop: {
        label: "Subscribers",
        color: "hsl(var(--chart-1))",
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
                {/*<XAxis*/}
                {/*    dataKey="month"*/}
                {/*    tickLine={false}*/}
                {/*    tickMargin={1}*/}
                {/*    axisLine={false}*/}
                {/*    tickFormatter={(value) => value.slice(0, 3)}*/}
                {/*/>*/}
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Bar
                    dataKey="desktop"
                    fill="var(--color-desktop)"
                    radius={8}
                />
            </BarChart>
        </ChartContainer>
    )
}
