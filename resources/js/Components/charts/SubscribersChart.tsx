import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "@/Components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/Components/ui/chart";
import {Bar, BarChart, CartesianGrid, Line, LineChart, XAxis} from "recharts";
import {DatePicker} from "../form";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import {getSubscribers} from "@/lib/actions/subscriber";
import {useEffect, useState} from "react";
import {Subscriber} from "@/types";

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
        queryFn: () => getSubscribers()
    });

    useEffect(() => {
        let groups = null;
        if (Array.isArray(data) && data.length > 0) {
            groups = Object.groupBy(data, ({createdAt}:Subscriber) => createdAt)
            groups = Object.entries(groups).map(([key, value]) => ({
                date: new Date(key).toLocaleDateString(), count: value.length
            }))
        }
        setChartData(groups)
        console.log(groups)
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
            <LineChart
                accessibilityLayer
                data={data}
                margin={{
                    left: 12,
                    right: 12,
                }}
            >
                <CartesianGrid vertical={false} />
                {/*<XAxis*/}
                {/*    dataKey="day"*/}
                {/*    tickLine={false}*/}
                {/*    axisLine={false}*/}
                {/*    tickMargin={8}*/}
                {/*    tickFormatter={(value) => value.slice(0, 3)}*/}
                {/*/>*/}
                <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                />
                <Line
                    dataKey="count"
                    type="linear"
                    stroke="var(--color-desktop)"
                    strokeWidth={2}
                    dot={false}
                />
            </LineChart>
        </ChartContainer>
    )
}
