import { Mail, Search } from "@mui/icons-material";
import { Avatar, Badge, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Navbar = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "#44b700",
      boxShadow: `0 0 0 2px #fff`,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }));
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{background: '#f5f6fa', paddingLeft: "20px", paddingRight: "20px", paddingTop: "20px", zIndex: '10'}}
    >
      <Typography variant="h5" fontWeight={"bold"}>
        Dashboard
      </Typography>

      <div style={{display: 'flex', alignItems: 'center'}}>
      <Badge sx={{color: '#af96e5', padding: '0 6px'}} showZero>
        <Mail />
      </Badge>
      <IconButton size="large" sx={{color: '#af96e5', margin: '0 6px'}}>
        <Search/>
      </IconButton>

      <IconButton>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
        </StyledBadge>
      </IconButton>
      </div>
    </Stack>
  );
};

export default Navbar;
