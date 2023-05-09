import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CircularProgress, Stack } from "@mui/material";
import {
  AccountBalanceWallet,
  Android,
  AttachMoney,
  AutoAwesome,
  AutoAwesomeMosaic,
  Contactless,
  GppGood,
  Groups2,
  LocalGroceryStore,
  PeopleAlt,
  TrackChangesSharp,
} from "@mui/icons-material";

export default function BasicCard() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <Android />
        </div>
        <div>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            Store Status
          </Typography>
          <Typography fontWeight={"bold"} variant="h7">
            Really good
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
export function BasicCards2() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <TrackChangesSharp />
        </div>
        <div>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            Total Sales
          </Typography>
          <Typography fontWeight={"bold"} variant="h7">
            $ 314 k
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export function BasicCards3() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <AutoAwesome />
        </div>
        <div>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            Total Profits
          </Typography>
          <Typography fontWeight={"bold"} variant="h7">
            $ 30 k
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
export function BasicCards4() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <AutoAwesomeMosaic />
        </div>
        <div>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            Total Costs
          </Typography>
          <Typography fontWeight={"bold"} variant="h7">
            146
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
export function BasicCardss() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <PeopleAlt />
        </div>
        <div>
          <Typography
            fontSize={13}
            sx={{ color: "#bdc2d3", padding: "10px 0" }}
          >
            Members Online
          </Typography>
          <Typography fontWeight={"bold"} variant="h6">
            922
          </Typography>
          <Typography
            fontSize={13}
            sx={{ color: "#4ebd7e", padding: "10px 0" }}
          >
            9.8 % form last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
export function BasicCardss2() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <AccountBalanceWallet />
        </div>
        <div>
          <Typography
            fontSize={13}
            sx={{ color: "#bdc2d3", padding: "10px 0" }}
          >
            Tuday's Revineu
          </Typography>
          <Typography fontWeight={"bold"} variant="h6">
            $854.8
          </Typography>
          <Typography fontSize={13} sx={{ color: "red", padding: "10px 0" }}>
            -5 % form last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
export function BasicCardss3() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <GppGood />
        </div>
        <div>
          <Typography
            fontSize={13}
            sx={{ color: "#bdc2d3", padding: "10px 0" }}
          >
            Server Load
          </Typography>
          <Typography fontWeight={"bold"} variant="h6">
            896
          </Typography>
          <Typography
            fontSize={13}
            sx={{ color: "#4ebd7e", padding: "10px 0" }}
          >
            10 % form last month
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export function BasicCardss4() {
  return (
    <Card
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography variant="h7" fontWeight={"bold"} sx={{ padding: "10px 0" }}>
          Totall Sales By Unit
        </Typography>
        <Typography fontWeight={"bold"} variant="h6">
          $473.85
        </Typography>
        <div
          style={{
            padding: "10px",
            color: "#9a7cdf",
            background: "#edeffb",
            border: "1px solid #edeffb",
            borderRadius: "35px",
          }}
        >
          <Groups2 />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            fontSize={13}
            sx={{ color: "#a78ce3", padding: "3px 0" }}
          >
            <AttachMoney /> <div>Sales</div>
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            fontSize={13}
            sx={{ color: "#76d67e", padding: "3px 0" }}
          >
            <LocalGroceryStore /> Marketing
          </Stack>
          <Stack
            direction={"row"}
            alignItems={"center"}
            fontSize={13}
            sx={{ color: "#fca15e", padding: "3px 0" }}
          >
            <Contactless /> Finance
          </Stack>
        </div>
      </CardContent>
    </Card>
  );
}

export function BasicCardsslist() {
  return (
    <Card
    
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"20px"}paddingBottom={'20px'}>
          Costumer list
        </Typography>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function BasicCardsslist2() {
  return (
    <Card
    
      sx={{
        minWidth: 160,
        margin: "3px",
        padding: 2,
        borderRadius: "15px",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Typography fontWeight={"bold"} fontSize={"20px"}paddingBottom={'20px'}>
          Product Sale
        </Typography>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
        <div style={{ paddingBottom: "10px",display: 'flex', }}>
          <Avatar sx={{marginRight: "20px"}}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
          <Typography fontWeight={"bold"} variant="h7">
            Anette Black
          </Typography>
          <Typography fontSize={13} sx={{ color: "#bdc2d3" }}>
            annettebkack@gmail.com
          </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}