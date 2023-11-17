const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { Typography, Box } = require("@mui/material");
const { styled } = require("@mui/system");

const CommentBox = styled("div")(() => ({
    width: "55%",
    pageBreakInside: "avoid",
}));

const AmountBox = styled("div")(() => ({
    width: "40%",
    border: "1px solid black",
    borderRadius: "7px",
    padding: "9px 15px 9px 12px",
}));

const GutterVertical = styled("div")`
    margin: 14px 0px;
`;

const NotesAmountBox = ({ loadsheet }) => {
    return (
        <>
            <GutterVertical />
            <FlexRow>
                <CommentBox>
                    {loadsheet?.metaData?.additonalInfo?.notes && (
                        <>
                            <Typography variant="body2" fontWeight={"600"}>
                                Notes
                            </Typography>
                            <Typography variant="caption">
                                {loadsheet?.metaData?.additonalInfo?.notes}
                            </Typography>
                        </>
                    )}
                </CommentBox>
                <div style={{ width: "5%" }} />
                {loadsheet?.totalAmountDue && (
                    <AmountBox>
                        <FlexRow style={{ justifyContent: "space-between", width:'100%' }}>
                            <Typography
                                variant="body2"
                                fontWeight={"600"}
                                fontSize={14}
                            >
                                Amount Due (PKR)
                            </Typography>
                            <Typography
                                variant="body2"
                                fontWeight={"600"}
                                fontSize={18}
                            >
                                {loadsheet?.totalAmountDue.toLocaleString()}
                            </Typography>
                        </FlexRow>
                    </AmountBox>
                )}
            </FlexRow>
        </>
    );
};

module.exports = NotesAmountBox;
