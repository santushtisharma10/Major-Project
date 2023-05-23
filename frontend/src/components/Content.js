import React from "react";
import { Typography, styled, Box } from "@mui/material";
import {
  XYPlot,
  LineSeries,
  HeatmapSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
} from "react-vis";

const ContentBox = styled(Box)({
  marginTop: "28px",
});
const ContentCard = styled(Box)({
  padding: "36px 48px",
  margin: '25px 0'
});
function Content() {

    const heatMapData = [
        { x: 1, y: 0, color: 10 },
        { x: 1, y: 5, color: 10 },
        { x: 1, y: 10, color: 6 },
        { x: 1, y: 15, color: 7 },
        { x: 2, y: 0, color: 12 },
        { x: 2, y: 5, color: 2 },
        { x: 2, y: 10, color: 1 },
        { x: 2, y: 15, color: 12 },
        { x: 3, y: 0, color: 9 },
        { x: 3, y: 5, color: 2 },
        { x: 3, y: 10, color: 6 },
        { x: 3, y: 15, color: 12 },
      ]
  return (
    <ContentBox>
        <ContentCard className="shadow" style={{width: '100%'}}>
            Bitcoin
        </ContentCard>
      <ContentCard className="shadow">
        <XYPlot height={300} width={300}>
          <XAxis />
          <YAxis />
          <HeatmapSeries
            className="heatmap-series-example"
            colorRange={["#05BFDB", "#0A4D68"]}
            data={heatMapData}
          />
        </XYPlot>
      </ContentCard>
    </ContentBox>
  );
}

export default Content;
