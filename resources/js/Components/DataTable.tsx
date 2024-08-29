import {Ambassador} from "@/types/data";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    ColumnDef,
    getPaginationRowModel,
    getSortedRowModel, SortingState, ColumnFiltersState, getFilteredRowModel
} from "@tanstack/react-table";
import {useMemo, useState} from "react";
import {Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow} from "@/Components/ui/table";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/Components/ui/card";
import {DateTime} from "luxon";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/Components/ui/pagination";
import {Button} from "@/Components/ui/button";
import {ArrowDown} from "lucide-react";
import {Input} from "@/Components/ui/input";

export default function DataTable<Type>({data, columns, ...props}: {
    data: Type[],
    columns: ColumnDef<Type>[],
    title?: string,
    description?: string,
    searchable?: boolean,
    withPagination?: boolean
}) {


    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {sorting, columnFilters},
    });

    return(
        <Card>
            <CardHeader className="flex flex-row gap-5">
                <div className="">
                    <CardTitle>{props?.title}</CardTitle>
                    <CardDescription>{props?.description}</CardDescription>
                </div>
                {props.searchable && <div className="flex-grow flex items-center justify-end">
                    <Input
                        className="max-w-sm"
                        placeholder="Search Emails..."
                        value={(table.getColumn("email")?.getFilterValue() as string)}
                        onChange={e => table.getColumn("email")?.setFilterValue(e.target.value)}
                    />
                </div>}
            </CardHeader>
            <CardContent className="">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map(headerGroup => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <TableHead key={header.id}>
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.map((row) => (
                            <TableRow key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                    {/*<TableFooter>*/}
                    {/*    {table.getFooterGroups().map(footerGroup => (*/}
                    {/*        <TableRow key={footerGroup.id}>*/}
                    {/*            {footerGroup.headers.map(footer => (*/}
                    {/*                <TableHead key={footer.id}>*/}
                    {/*                    {flexRender(footer.column.columnDef.footer, footer.getContext())}*/}
                    {/*                </TableHead>*/}
                    {/*            ))}*/}
                    {/*        </TableRow>*/}
                    {/*    ))}*/}
                    {/*</TableFooter>*/}
                </Table>
            </CardContent>

            {props?.withPagination && <CardFooter>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <Button onClick={() => table.setPageIndex(0)} size="sm" variant="outline">First</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}
                                    size="sm" variant="outline">Prev</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()} size="sm"
                                    variant="outline">Next</Button>
                        </PaginationItem>
                        <PaginationItem>
                            <Button onClick={() => table.setPageIndex(table.getPageCount() - 1)} size="sm"
                                    variant="outline">Last</Button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>

            </CardFooter>}
        </Card>
    )
}
