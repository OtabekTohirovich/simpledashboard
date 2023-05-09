import { Grid, Stack } from "@mui/material";
import React from "react";
import Navbar from "./navigation/navbar";
import BasicCard, { BasicCardss } from "./card";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Main = () => {
  const data1 = [];
  const data2 = [];

  const rand = 300;
  for (let i = 0; i < 7; i++) {
    let d = {
      year: 2000 + i,
      value: { x: Math.random() * (rand + 50) + 100 },
    };

    data1.push(d);
  }

  for (let i = 0; i < 7; i++) {
    let d = {
      year: 2000 + i,
      value: { x: Math.random() * (rand + 50) + 200 },
    };

    data2.push(d);
  }

  const getXValueData1 = (data) => {
    const index = data1.findIndex((obj) => obj.year === data.year);
    return data1[index].value.x;
  };

  const getXValueData2 = (data) => {
    const index = data2.findIndex((obj) => obj.year === data.year);
    return data2[index].value.x;
  };
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  return (
    <Stack
      padding={4}
      sx={{ height: "100vh", width: "100%", background: "#f5f6fa" }}
      direction={"column"}
    >
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
            <Grid item xs={6}>
              <BasicCard />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <div style={styles}>
            <LineChart
              width={650}
              height={400}
              data={data1}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line
                type="monotone"
                dataKey={getXValueData1}
                stroke="#8884d8"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey={getXValueData2}
                stroke="red"
                dot={false}
              />
              <XAxis dataKey="year" />
              <YAxis />
            </LineChart>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={2}>
          <BasicCardss />
        </Grid>
        <Grid item xs={2}>
          <BasicCardss />
        </Grid>
        <Grid item xs={2}>
          <BasicCardss />
        </Grid>

        <Grid item xs={6}>
          <BasicCardss />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Main;
