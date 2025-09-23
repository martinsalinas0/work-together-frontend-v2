import type { Metadata } from "next";
import "./globals.css";
import NavBarComponent from "./components/NavBar";
import { Montserrat } from "next/font/google";
import FooterComponent from "./components/FooterComponent";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Passfora",
  description: "App in progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBarComponent />

        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
