"use client";

import { Header } from "@/components/Header";
import { Home } from "@/components/Home";
import { Portfolio } from "@/components/Portfolio";
import { ThemeContextProvider } from "@/context/ThemeContextProvider";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function App() {
  return (
    <main className={roboto.className}>
      <ThemeContextProvider>
        <Header />
        <Home />
        <Portfolio />
      </ThemeContextProvider>
    </main>
  );
}
