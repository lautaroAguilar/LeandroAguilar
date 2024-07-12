import "./globals.css";

import { AppContextProvider } from "../context/AppContext";
import { font } from "./font";
import Footer from "../components/containers/Footer/Footer";
import Header from "@/components/Header/Header";
export const metadata = {
  title: "Leandro Aguilar",
  description:
    "¡Hola soy Leandro! Vendedor oficial de Fiat Giama. Me podés encontrar en Rivadavia 2001, Balvanera.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AppContextProvider>
        <body className={font.className}>
          <Header />
          {children}
          <Footer />
        </body>
      </AppContextProvider>
    </html>
  );
}
