import "@/styles/globals.css";
import React  from "react";
import type { AppProps } from "next/app";
import SiteHeader from "@/components/SiteHeader";
import { PlayerContextProvider } from "@/context/PlayerContext"; 

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlayerContextProvider>
      <SiteHeader />
      <Component {...pageProps} />
    </PlayerContextProvider>
  );
}




