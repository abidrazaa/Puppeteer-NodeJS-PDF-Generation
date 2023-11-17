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
const { FlexCol } = require("../Components/Flex");

const GutterVertical = styled("div")`
    margin: 3px 0px;
`;
const formatId = (id = 0, length = 5) => {
    return String(id).padStart(length, "0");
};
const InvoiceTable = ({ loadSheet }) => {
    return (
        <>
            {loadSheet?.invoiceItems.length>0 && (
                <>
                    {" "}
                    <div style={{ margin: "15px 0px" }} />
                    <Typography variant="body1" fontWeight={"600"}>
                        Invoices
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
                                        CUSTOMER NAME
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "1px solid black",
                                            backgroundColor: "#F2F4F7",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        PHONE NUMBER
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "1px solid black",
                                            backgroundColor: "#F2F4F7",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        INVOICE ID
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "1px solid black",
                                            backgroundColor: "#F2F4F7",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        TOTAL AMOUNT
                                    </TableCell>
                                    <TableCell
                                        style={{
                                            border: "1px solid black",
                                            backgroundColor: "#F2F4F7",
                                            fontSize: "13px",
                                            fontWeight: "600",
                                        }}
                                    >
                                        AMOUNT DUE
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loadSheet?.invoiceItems.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            <FlexCol>
                                                <Typography variant="body2">
                                                    {row?.contact?.name
                                                        ? row?.contact?.name
                                                        : "-"}
                                                </Typography>
                                                {row?.contact?.address && (
                                                    <Typography
                                                        variant="caption"
                                                        color={"#344054"}
                                                    >
                                                        {row?.contact?.address}
                                                    </Typography>
                                                )}
                                            </FlexCol>
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            {row?.contact?.phone?.number
                                                ? `0${row?.contact?.phone?.number}`
                                                : "-"}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            {row?.friendlyId
                                                ? `INV-${formatId(
                                                      row?.friendlyId
                                                  )}`
                                                : "-"}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            {row?.total ? `${row?.total.toLocaleString()}` : "-"}
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                borderBottom:
                                                    "1px solid black !important",
                                            }}
                                        >
                                            {row?.amountDue
                                                ? `${row?.amountDue.toLocaleString()}`
                                                : "-"}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>
            )}
        </>
    );
};

module.exports = InvoiceTable;
