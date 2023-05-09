import { Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logoresume.png";
import { Article, Feed, PeopleAlt, Segment, Settings, Star, Widgets } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: {lg: '300px',xl: "400px"}, maxheight: "100vh", background: "#f5f6fa" , zIndex: '10'}}>
      <Stack direction={"column"} margin={2}>
      <Stack direction={"column"} sx={{background: '#fff', border: "1px solid #fff", borderRadius:'15px'}}  padding={'15px'}>
        <div  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img style={{ height: "25px" }} src={logo} alt="logo" />
          <div style={{display: 'flex'}}>
            <Typography variant="h6" fontWeight={"bold"}>
              Pro
            </Typography>
            <Typography variant="h6" >
              store
            </Typography>
          </div>
          <button style={{padding: '2px', background: '#f5f2fc', border: '1px solid #f5f2fc', borderRadius: '10px'}}>
            <Segment sx={{color: '#af97e6'}}/>
          </button>
        </div>
        
      </Stack>
      <Typography paddingTop={2} paddingBottom={2} variant="h7" fontWeight={'bold'}>Menu</Typography>
      
        <NavLink to={'/'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '10px',   }}>
                <Widgets  className="data" sx={{ marginRight: "15px", fontSize: {lg: "23px", xl: 35}}}/> <Typography >Dashboard</Typography>
            </div>
        </NavLink>
        <NavLink to={'/employer'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '10px'  }}>
                <PeopleAlt className="data" sx={{ marginRight: "15px", fontSize: {lg: "25px", xl: 35}}}/> <Typography >Costumer</Typography>
            </div>
        </NavLink>
        <NavLink to={'/earnings'} style={{color: "#999", border: '1px solid #f5f6fa' }}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '10px' ,  }}>
                <Article className="data" sx={{ marginRight: "15px", fontSize: {lg: "25px", xl: 35}}}/> <Typography >Earnings</Typography>
            </div>
        </NavLink>
        <NavLink to={'/product'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '10px'  }}>
                <Star className="data" sx={{ marginRight: "15px", fontSize: {lg: "25px", xl: 35}}}/> <Typography >Product Sales</Typography>
            </div>
        </NavLink>
        <NavLink to={'/store'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '10px'  }}>
                <Feed className="data" sx={{ marginRight: "15px", fontSize: {lg: "25px", xl: 35}}}/> <Typography >Management</Typography>
            </div>
        </NavLink>
        <NavLink to={'/sittings'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '10px' }}>
                <Settings className="data" sx={{ marginRight: "15px", fontSize: {lg: "25px", xl: 35}}}/> <Typography >Settings</Typography>
            </div>
        </NavLink>
      </Stack>
    </div>
  );
};

export default Sidebar;
