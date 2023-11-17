const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { Avatar, Typography } = require("@mui/material");
const { styled } = require("@mui/system");
const Capsule = require("../Components/atoms/Capsule.js");
const moment = require("moment/moment");

const Caption = styled(Typography)`
    variant: caption;
    display: block;
    font-size: 13px;
`;
const GutterHorizontal = styled("div")`
    margin: 0px 3px;
`;
const GutterVertical = styled("div")`
    margin: 3px 0px;
`;
const OrderBookerHead = styled(Typography)(({ theme }) => ({
    color: theme.palette.colors.gray["600"],
}));

const InvDetails = styled("div")(({ theme }) => ({
    // width: '50%',
    textAlign: "end",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignSelf: "stretch",
}));

const CapsuleWrapper = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.colors.white["50"],
    color: theme.palette.colors.gray["900"],
    padding: "2px 5px 2px 5px",
    borderRadius: "10px",
    border: "1px solid black",
    margin: "5px",
}));

const AvatarWrapper = styled(Avatar)`
    borderradius: 50%;
    width: 70px;
    height: 70px;
`;

const formatId = (id = 0, length = 5) => {
    return String(id).padStart(length, "0");
};

const LoadSheetHeader = ({ businessInfo, id, date }) => {
    return (
        <FlexRow sx={{ justifyContent: "space-between", width: "100%" }}>
            <FlexRow style={{ width: "60%" }}>
                <AvatarWrapper
                    alt="Business Logo"
                    src={
                        businessInfo?.profilePic
                            ? businessInfo["profilePic"]
                            : ""
                    }
                />
                <GutterHorizontal />
                <GutterHorizontal />
                <div style={{ width: "70%" }}>
                    {businessInfo?.businessName && (
                        <Typography variant="body1" fontWeight={"600"}>
                            {businessInfo["businessName"]}
                        </Typography>
                    )}
                    {businessInfo?.phone?.number && (
                        <Caption>+92-{businessInfo.phone?.number}</Caption>
                    )}
                    {businessInfo?.email && (
                        <Caption>{businessInfo["email"]}</Caption>
                    )}
                    {businessInfo?.address && (
                        <Caption
                            style={{
                                width: "310px",
                                overflowWrap: "break-word",
                            }}
                        >
                            {businessInfo["address"]}
                        </Caption>
                    )}
                    {businessInfo?.cnic && (
                        <Caption
                            style={{
                                width: "310px",
                                overflowWrap: "break-word",
                            }}
                        >
                            NTN/CNIC: {businessInfo["cnic"]}
                        </Caption>
                    )}
                    {businessInfo?.strn && (
                        <Caption
                            style={{
                                width: "310px",
                                overflowWrap: "break-word",
                            }}
                        >
                            STRN: {businessInfo["strn"]}
                        </Caption>
                    )}
                </div>
            </FlexRow>
            <InvDetails style={{ width: "40%" }}>
                <Typography variant="h4" fontWeight={"600"}>
                    Load Sheet
                </Typography>
                <GutterVertical />
                <GutterVertical />
                <FlexRow style={{ justifyContent: "flex-end" }}>
                    <div style={{ textAlign: "center" }}>
                        <Typography
                            variant="subtitle2"
                            fontSize={13}
                            fontWeight={"600"}
                        >
                            Load Sheet ID
                        </Typography>
                        <CapsuleWrapper>
                            <Typography variant="caption">
                                {`LS-${formatId(id)}`}{" "}
                            </Typography>
                        </CapsuleWrapper>
                    </div>
                    <GutterHorizontal />
                    <div style={{ textAlign: "center" }}>
                        <Typography
                            variant="subtitle2"
                            fontSize={13}
                            fontWeight={"600"}
                        >
                            Dispatch Date
                        </Typography>
                        <CapsuleWrapper>
                            <Typography variant="caption">
                                {moment(date).format("DD MMM, YYYY")}
                            </Typography>
                        </CapsuleWrapper>
                    </div>
                </FlexRow>
            </InvDetails>
        </FlexRow>
    );
};

module.exports = LoadSheetHeader;
