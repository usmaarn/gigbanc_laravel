import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent} from "@/Components/ui/chart";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {Bar, BarChart, CartesianGrid, XAxis} from "recharts";
import {TrendingUp} from "lucide-react";
import {Subscriber} from "@/types/data";
import {usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export function BarChartComponent({title}: {
    title: string;
}) {

    const {subscribers}: PageProps<{subscribers: Subscriber[]}> = usePage().props;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="capitalize">{title}</CardTitle>
                <CardDescription>January - June 2024</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
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
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
