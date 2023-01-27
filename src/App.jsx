import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import Header from "./layout/Header";
import { Box } from "@mui/material";
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';

function App() {
  const getLibrary = (provider) => {
    return new ethers.providers.Web3Provider(provider);
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
    <BrowserRouter>
    <Box sx={{background:'#01022F'}}>

      <Routes exact />
    </Box>
    </BrowserRouter>
    </Web3ReactProvider>
  );
}

export default App;
