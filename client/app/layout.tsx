'use client'
import { Fragment, useEffect } from "react";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import "./globals.css";
import {  ScriptProps } from "next/script";
import StoreProvider from "./StoreProvider";
import { LocalizationProvider } from "@mui/x-date-pickers";
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs'
import {
  experimental_extendTheme as materialExtendTheme,
  Experimental_CssVarsProvider as MaterialCssVarsProvider,
  THEME_ID as MATERIAL_THEME_ID,
} from '@mui/material/styles';
import { CssVarsProvider as JoyCssVarsProvider } from '@mui/joy/styles';
import {theme} from './theme/index'
export default function Layout({children}: ScriptProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  const materialTheme = materialExtendTheme(theme);

  return (
    <html>
      <head></head>
      <body>
      
        <Fragment>
          <Head>
            <title>KaamSewa</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />

            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
            />

          </Head>
            <MaterialCssVarsProvider theme = {{[MATERIAL_THEME_ID]: materialTheme}}>
              <JoyCssVarsProvider>
                <CssBaseline />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <StoreProvider>
                    {children}
                  </StoreProvider>
                </LocalizationProvider>
              </JoyCssVarsProvider>
            </MaterialCssVarsProvider>
        </Fragment>
        
      </body>
    </html>
  );
}
