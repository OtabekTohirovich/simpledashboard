import { Grid, Stack, Typography } from "@mui/material";
import React, { Fragment } from "react";
import Navbar from "./navigation/navbar";
import BasicCard, {
  BasicCards2,
  BasicCards3,
  BasicCards4,
  BasicCardss,
  BasicCardss2,
  BasicCardss3,
  BasicCardss4,
  BasicCardsslist,
  BasicCardsslist2,
} from "./card";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  ArrowDropDown,
  AttachMoney,
  Contactless,
  LocalGroceryStore,
} from "@mui/icons-material";

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
    background: "#fff",
    border: "1px solid #fff",
    borderRadius: "15px",
  };
  return (
    <Fragment>
      <Navbar />

      <Stack
        className="scroll"
        sx={{ height: "90.1vh", width: "100%", background: "#f5f6fa"  , padding: "0 20px"}}
        direction={"column"}
      >
        <Grid container spacing={1} padding={2}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <BasicCard />
              </Grid>
              <Grid item xs={6}>
                <BasicCards2 />
              </Grid>
              <Grid item xs={6}>
                <BasicCards3 />
              </Grid>
              <Grid item xs={6}>
                <BasicCards4 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div style={styles}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "20px",
                  justifyContent: "space-between",
                }}
              >
                <Typography fontWeight={"bold"}>Earnings</Typography>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  fontSize={14}
                  sx={{ color: "#a78ce3", padding: "3px 0" }}
                >
                  <AttachMoney /> <div>Sales</div>
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  fontSize={14}
                  sx={{ color: "#76d67e", padding: "3px 0" }}
                >
                  <LocalGroceryStore /> Marketing
                </Stack>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  fontSize={14}
                  sx={{ color: "#fca15e", padding: "3px 0" }}
                >
                  <Contactless /> Finance
                </Stack>
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: 10,
                    border: "1px solid #f4f5f8",
                    background: "#f4f5f8",
                    borderRadius: "15px",
                  }}
                >
                  <div>2021</div> <ArrowDropDown />
                </button>
              </div>
              <LineChart
                width={500}
                height={180}
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
        <Grid container spacing={2} paddingTop={1}>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <BasicCardss />
              </Grid>
              <Grid item xs={6}>
                <BasicCardss2 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <BasicCardss3 />
              </Grid>
              <Grid item xs={7}>
                <BasicCardss4 />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={2} marginTop={2}>
          <Grid item xs={4}>
            <BasicCardsslist />
          </Grid>
          <Grid item xs={8}>
            <BasicCardsslist2 />
          </Grid>
        </Grid>
      </Stack>
    </Fragment>
  );
};

export default Main;
