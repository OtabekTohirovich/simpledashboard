import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, CircularProgress } from "@mui/material";


export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 250, margin: "15px" , padding:2}}>
      <CardContent sx={{display: 'flex' , alignItems:'center', justifyContent: 'space-between'}}>
      <CircularProgress value={50} />
        <div>
          <Typography fontSize={13}>Store Status</Typography>
          <Typography variant="h7">Really good</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Good</Button>
      </CardActions>
    </Card>
  );
}

export function BasicCardss() {
    return (
      <Card sx={{ minWidth: 220, margin: "15px" , padding:2, height: 200}}>
        <CardContent sx={{display: 'flex' , alignItems:'center', justifyContent: 'space-between'}}>
        <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <div>
            <Typography fontSize={13}>Store Status</Typography>
            <Typography variant="h7">Really good</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small">Good</Button>
        </CardActions>
      </Card>
    );
  }
