const React = require("react");
const { styled } = require("@mui/system");

const {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} = require("@mui/material");

const GutterVertical = styled("div")`
    margin: 3px 0px;
`;

const StockTable = ({ loadSheet }) => {
    let stocks = [];

    if (loadSheet?.invoiceItems.length) {
        loadSheet.invoiceItems.forEach((invoice) => {
            if (invoice?.items.length)
                invoice.items.forEach((item) => {
                    stocks.push(item);
                });
        });
    }
    return (
        <>
            {loadSheet?.invoiceItems.length > 0 && (
                <>
                    <div style={{ margin: "15px 0px" }} />
                    <Typography variant="body1" fontWeight={"600"}>
                        Stock
                    </Typography>
                    <GutterVertical />
                    <TableContainer>
                        <Table
                            sx={{ minWidth: 650 }}
                            size="small"
                            aria-label="a dense table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        style={{
                                            border: "1px solid black",
                                            backgroundColor: "#F2F4F7",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        ITEM
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "1px solid black",
                                            borderRight: "none",
                                            backgroundColor: "#F2F4F7",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        QUANTITY
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {stocks.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            {row.name}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            {`${row.quantity.toLocaleString()} ${
                                                row.unit
                                            }`}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <Wrapper>
                <Paper sx={{ width: "100%" }}>
                    <StyledTableContainer>
                        <Table
                            aria-label="sticky table"
                            style={{ border: "2px solid black" }}
                        >
                            <TableHeader style={{ border: "2px solid black" }}>
                                <ProductCell
                                    id={"name"}
                                    style={{ border: "2px solid black" }}
                                >
                                    <Typography
                                        variant={"caption"}
                                        style={{ color: "#344054" }}
                                        fontWeight={"500"}
                                    >
                                        ITEM
                                    </Typography>
                                </ProductCell>
                                <TableHeaderCell align="left" width={100}>
                                    <Typography
                                        variant={"caption"}
                                        fontWeight={"500"}
                                    >
                                        QUANTITY
                                    </Typography>
                                </TableHeaderCell>
                            </TableHeader>
                            <StyledTableBody>
                                {stocks.map((row) => (
                                    <StyledTableRow
                                        key={row["id"]}
                                        style={{ border: "2px solid black" }}
                                    >
                                        <Product id={"name"}>
                                            <Typography
                                                variant={"caption"}
                                                style={{
                                                    color: "#344054",
                                                    overflowWrap: "break-word",
                                                }}
                                                fontWeight={"500"}
                                                display={"block"}
                                            >
                                                {row.name}
                                            </Typography>
                                        </Product>
                                        <Info align="left" width={100}>
                                            <Typography
                                                variant={"caption"}
                                                style={{
                                                    color: "#344054",
                                                    overflowWrap: "break-word",
                                                    overflowX: "auto",
                                                }}
                                                fontWeight={"500"}
                                            >
                                                {`${row.quantity.toLocaleString()} ${row.unit}`}
                                            </Typography>
                                        </Info>
                                       
                                    </StyledTableRow>
                                ))}
                            </StyledTableBody>
                        </Table>
                    </StyledTableContainer>
                </Paper>
            </Wrapper> */}
                </>
            )}
        </>
    );
};

module.exports = StockTable;
