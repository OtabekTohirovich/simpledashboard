import { Stack, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logoresume.png";
import { Article, Feed, PeopleAlt, Segment, Settings, Star, Widgets } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div style={{ width: "400px", height: "100vh", background: "#f5f6fa" }}>
      <Stack direction={"column"} margin={3}>
      <Stack direction={"column"} sx={{background: '#fff', border: "1px solid #fff", borderRadius:'15px'}}  padding={2}>
        <div  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <img style={{ height: "35px" }} src={logo} alt="logo" />
          <div style={{display: 'flex'}}>
            <Typography variant="h5" fontWeight={"bold"}>
              Pro
            </Typography>
            <Typography variant="h5" >
              store
            </Typography>
          </div>
          <button style={{padding: '5px', background: '#f5f2fc', border: '1px solid #f5f2fc', borderRadius: '10px'}}>
            <Segment sx={{color: '#af97e6'}}/>
          </button>
        </div>
        
      </Stack>
      <Typography paddingTop={3} paddingBottom={3} variant="h6" fontWeight={'bold'}>Menu</Typography>
      
        <NavLink to={'/'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex', alignItems: 'center', padding: '20px',   }}>
                <Widgets  className="data" sx={{ marginRight: "15px", fontSize: 36}}/> <Typography >Dashboard</Typography>
            </div>
        </NavLink>
        <NavLink to={'/employer'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '20px'  }}>
                <PeopleAlt className="data" sx={{ marginRight: "15px", fontSize: 36}}/> <Typography >Costumer</Typography>
            </div>
        </NavLink>
        <NavLink to={'/earnings'} style={{color: "#999", border: '1px solid #f5f6fa' }}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '20px' ,  }}>
                <Article className="data" sx={{ marginRight: "15px", fontSize: 36}}/> <Typography >Earnings</Typography>
            </div>
        </NavLink>
        <NavLink to={'/product'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '20px'  }}>
                <Star className="data" sx={{ marginRight: "15px", fontSize: 36}}/> <Typography >Product Sales</Typography>
            </div>
        </NavLink>
        <NavLink to={'/store'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '20px'  }}>
                <Feed className="data" sx={{ marginRight: "15px", fontSize: 36}}/> <Typography >Store Management</Typography>
            </div>
        </NavLink>
        <NavLink to={'/sittings'} style={{color: "#999", border: '1px solid #f5f6fa'}}>
            <div style={{ display: 'flex',alignItems: 'center', padding: '20px' }}>
                <Settings className="data" sx={{ marginRight: "15px", fontSize: 36}}/> <Typography >Settings</Typography>
            </div>
        </NavLink>
      </Stack>
    </div>
  );
};

export default Sidebar;
