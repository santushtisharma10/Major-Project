import React, { useState } from "react";
//mui
import { styled, Box, Typography } from "@mui/material";
//library
import {
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
} from "react-vis";
//css
import "react-vis/dist/style.css";
//images
import bitcoinImg from "../bitcoin.gif";

const ContentBox = styled(Box)({
  marginTop: "28px",
  display: "flex",
  flexDirection: "column",
});
const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "40px",
});
const Title = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});
const InfoTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: 800,
  color:"#3C4048",
})
const InfoText = styled(Typography)({
  fontSize: '28px',
  fontWeight: 600
})
const InfoCards = styled(Box)({
  display: "flex",
  gap: "10px",
});
const ContentCard = styled(Box)({
  padding: "36px",
  margin: "20px 0",
  width: "100%",
});
function Content() {
  const [polarity, setPolarity] = useState(true)
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
    { x: 1, y: 3 },
    { x: 2, y: 5 },
    { x: 3, y: 15 },
    { x: 4, y: 12 },
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 15, y: 17 },
    { x: 6, y: 16 },
    { x: 17, y: 13 },
    { x: 18, y: 12 },
    { x: 19, y: 10 },
    { x: 11, y: 31 },
    { x: 12, y: 15 },
    { x: 31, y: 15 },
    { x: 14, y: 2 },
  ];

  return (
    <ContentBox>
      <ContentCard className="shadow">
        <Header>
          <Title>
            <img src={bitcoinImg} height={80} alt="bitcoin" />
            <div>
              <Typography fontSize={36} fontWeight={600}>
                Bitcoin
              </Typography>
              <Typography fontSize={16} fontWeight={800} color="#3C4048">
                Digital Currency
              </Typography>
            </div>
          </Title>
          <div>
            <Typography fontSize={20} fontWeight={600} color="#3C4048">
              Price
            </Typography>
            <Typography fontSize={28} fontWeight={900} color="#2192FF">
              $1378
            </Typography>
          </div>
        </Header>
        <Typography>
          Bitcoin is a protocol which implements a highly available, public,
          permanent, and decentralized ledger. In order to add to the ledger, a
          user must prove they control an entry in the ledger. The user can
          update the ledger, assigning some of their bitcoin to another entry in
          the ledger. Because the token has characteristics of money, it can be
          thought of as a digital currency.
        </Typography>
      </ContentCard>
      <InfoCards>
        <ContentCard style={{padding: '20px'}} className="shadow">
          <InfoTitle>Current Price</InfoTitle>
          <InfoText>$41</InfoText>
        </ContentCard>
        <ContentCard className="shadow" style={{padding: '20px'}}>
          <InfoTitle>Price Prediction</InfoTitle>
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <InfoText>$40</InfoText>
            <InfoText style={{color: 'red'}}>-1.6%</InfoText>
          </div>
        </ContentCard>
        <ContentCard className="shadow" style={{padding: '20px'}}>
          <InfoTitle>Public Sentiment</InfoTitle>
          <InfoText style={{color: polarity ? 'green' : 'red' }}>Bearish</InfoText>
        </ContentCard>
      </InfoCards>

      <ContentCard className="shadow">
        <FlexibleWidthXYPlot style={{ width: "100%" }} height={300}>
          <HorizontalGridLines />
          <VerticalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={data} />
        </FlexibleWidthXYPlot>
      </ContentCard>
    </ContentBox>
  );
}

export default Content;
