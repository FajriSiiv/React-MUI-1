import styled from "@emotion/styled";
import {
  Button,
  Box,
  Container,
  Stack,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Add from "./components/Add";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import RightBar from "./components/RightBar";
import Sidebar from "./components/Sidebar";

function App() {
  const [modes, setModes] = useState("dark");

  const darkTheme = createTheme({
    palette: {
      mode: modes,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" justifyContent="space-between">
          <Sidebar setMode={setModes} mode={modes} />
          <Feed />
          <RightBar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
