import { Box, useMediaQuery } from "@mui/material";
import Navbar from "components/Navbar";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "components/Sidebar";
import { useGetUserQuery } from "state/api";
import { useSelector } from "react-redux";

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebasOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);
  //console.log("🚀 ~ file: index.jsx:14 ~ Layout ~ userId", userId);
  //console.log("🚀 ~ file: index.jsx:14 ~ Layout ~ userId", userId);
  //console.log("🚀 ~ file: index.jsx:14 ~ Layout ~ data", data);

  return (
    <Box display={isNonMobile ? "flex" : "block"} width="100%" height="100%">
      <SideBar
        user={data || {}}
        isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebasOpen={setIsSidebasOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebasOpen={setIsSidebasOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
