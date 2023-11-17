const React = require("react");
const { ThemeProvider, CssBaseline } = require("@mui/material");
const theme = require("../theme");
const { styled } = require("@mui/system");
const InvoiceTable = require("./InvoicesTable.js");
const LoadSheetHeader = require("./Header.js");
const Summary = require("./Summary");
const StockTable = require("./StockTable");
const NotesAmountBox = require("./NotesAmountBox");

const Container = styled("div")`
    padding: 5px;
`;

const LoadSheetPdf = (data) => {
    const temp = { ...data };

    console.log("temp", data);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container>
                <LoadSheetHeader
                    businessInfo={temp["businessInfo"]}
                    id={temp["friendlyId"]}
                    date={temp["dispatchDate"]}
                />
                <Summary loadSheet={temp} />
                <StockTable loadSheet={temp} />
                <InvoiceTable loadSheet={temp} />
                <NotesAmountBox loadsheet={temp} />
            </Container>
        </ThemeProvider>
    );
};

module.exports = LoadSheetPdf;
