import React from "react";
import { styled, Box } from "@mui/material";
import "react-vis/dist/style.css";

import {
  LineSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  FlexibleWidthXYPlot
} from "react-vis";

const ContentBox = styled(Box)({
  marginTop: "28px",
  display: "flex",
  flexDirection: "column",
});
const InfoCards = styled(Box)({
  display: "flex",
  gap: "20px",
});
const ContentCard = styled(Box)({
  padding: "36px 48px",
  margin: "25px 0",
  width: "100%",
});
function Content() {
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
      <ContentCard className="shadow" style={{ width: "100%" }}>
        Bitcoin
      </ContentCard>
      <InfoCards>
        <ContentCard className="shadow">info 1</ContentCard>
        <ContentCard className="shadow">info 1</ContentCard>
        <ContentCard className="shadow">info 1</ContentCard>
      </InfoCards>

      <ContentCard className="shadow">
      <FlexibleWidthXYPlot style={{width: '100%'}}  height={300}>
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
