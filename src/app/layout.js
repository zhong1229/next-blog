import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import ToasterContext from "@/context/ToasterContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "好奇世界",
  description: "创造性的思考，知识的探险!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`scrollbar-style ${inter.className}`}>
        <ThemeContextProvider>
          <ThemeProvider>
            <ToasterContext />
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
