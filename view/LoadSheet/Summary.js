const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { Typography } = require("@mui/material");
const { styled } = require("@mui/system");

const GutterVertical = styled("div")`
    margin: 3px 0px;
`;
const Box1 = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.colors.gray["50"],
    borderRadius: "10px",
    width: "59%",
    minHeight: "mini-content",
}));
const Box2 = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.colors.gray["50"],
    borderRadius: "10px",
    width: "39%",
    minHeight: "mini-content",
}));

const Key = styled(Typography)(() => ({
    width: "30%",
    fontSize: "13px",
    minHeight: "mini-content",
}));
const Key2 = styled(Typography)(() => ({
    width: "35%",
    fontSize: "13px",
    minHeight: "mini-content",
}));
const Value = styled(Typography)(() => ({
    width: "69%",
    fontSize: "13px",
    minHeight: "mini-content",
}));

const Value2 = styled(Typography)(() => ({
    width: "64%",
    fontSize: "13px",
    minHeight: "mini-content",
}));

const Row = styled(FlexRow)(() => ({
    alignItems: "flex-start",
}));

const Summary = ({ loadSheet }) => {
    let orderBookers = "";
    let orderBookerSet = {};
    if (loadSheet?.invoiceItems.length) {
        loadSheet.invoiceItems.forEach((invoice) => {
            if (invoice?.orderBooker?.name)
                [
                    (orderBookerSet[invoice.orderBooker.id] =
                        invoice?.orderBooker?.name || ""),
                ];
        });

        for (let key in orderBookerSet) {
            orderBookers += orderBookerSet[key].split(" ")[0] + ", ";
        }

        if (orderBookers) orderBookers = orderBookers.slice(0, -2);
    }
    return (
        <>
            <hr style={{ margin: "10px 0px", border: "1px solid black" }} />
            <Typography variant="body1" fontWeight={"600"}>
                Summary
            </Typography>
            <GutterVertical />
            <GutterVertical />
            <FlexRow style={{ width: "100%" }}>
                <Box1>
                    {loadSheet?.totalQuantity && (
                        <Row>
                            <Key variant="caption">Total Qty</Key>
                            <Value variant="caption" fontWeight={"600"}>
                                {loadSheet["totalQuantity"].toLocaleString()}
                            </Value>
                        </Row>
                    )}
                    {loadSheet?.totalDistinctStocks && (
                        <Row>
                            <Key variant="caption">Total Items</Key>
                            <Value variant="caption" fontWeight={"600"}>
                                {loadSheet[
                                    "totalDistinctStocks"
                                ].toLocaleString()}
                            </Value>
                        </Row>
                    )}
                    {loadSheet?.invoiceItems.length>0 && (
                        <Row>
                            <Key variant="caption">Total Invoices</Key>
                            <Value variant="caption" fontWeight={"600"}>
                                {loadSheet[
                                    "invoiceItems"
                                ].length.toLocaleString()}
                            </Value>
                        </Row>
                    )}
                </Box1>
                <div style={{ width: "2%" }} />
                <Box2 style={{ alignContent: "flex-end" }}>
                    {orderBookers && (
                        <Row>
                            <Key2 variant="caption" fontWeight={"600"}>
                                Order Booker
                            </Key2>
                            <Value2
                                variant="caption"
                                fontWeight={"500"}
                                style={{ overflowWrap: "break-word" }}
                            >
                                {orderBookers}
                            </Value2>
                        </Row>
                    )}
                    {loadSheet?.metaData?.additonalInfo?.driverName && (
                        <Row>
                            <Key2 variant="caption" fontWeight={"600"}>
                                Driver Name
                            </Key2>
                            <Value2
                                variant="caption"
                                fontWeight={"500"}
                                style={{ overflowWrap: "break-word" }}
                            >
                                {loadSheet?.metaData?.additonalInfo?.driverName}
                            </Value2>
                        </Row>
                    )}
                    {loadSheet?.metaData?.additonalInfo?.vehicle && (
                        <Row>
                            <Key2 variant="caption" fontWeight={"600"}>
                                Vehicle
                            </Key2>
                            <Value2
                                variant="caption"
                                fontWeight={"500"}
                                style={{ overflowWrap: "break-word" }}
                            >
                                {loadSheet?.metaData?.additonalInfo?.vehicle}
                            </Value2>
                        </Row>
                    )}
                </Box2>
            </FlexRow>
        </>
    );
};

module.exports = Summary;
