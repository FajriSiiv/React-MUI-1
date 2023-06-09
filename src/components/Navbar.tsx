import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Pets, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBar = styled("div")(({ theme }: any) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconContainer = styled(Box)(({ theme }: any) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }: any) => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = ({ onDrawer }: { onDrawer: () => void }) => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" sx={{ boxShadow: "none" }}>
      <StyledToolbar>
        <IconButton onClick={onDrawer}>
          <Pets sx={{ display: "block" }} />
        </IconButton>
        <SearchBar>
          <InputBase placeholder="Search..." />
        </SearchBar>
        <IconContainer>
          <Badge badgeContent={4} color="error">
            <Mail sx={{ color: "white" }} />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications sx={{ color: "white" }} />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            onClick={(e) => setOpen(true)}
          />
        </IconContainer>
        <UserBox onClick={(e: any) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} />
          <Typography>John Doe</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={(e) => setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
