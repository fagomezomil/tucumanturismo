import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Tucumán Turismo - Te quiero conocer!",
  description: "Página creada para muestra del desarrollo y experiencia de usuario",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">

      <body className={montserrat.className}>

        <NavBar />
        <div className="content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
} 
