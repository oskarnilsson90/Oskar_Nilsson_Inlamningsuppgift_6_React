import { Inter } from "next/font/google";
import styles from "./layout.module.css";
import Navigation from "@/Components/Navigation/Navigation";
import "./globals.css";
import Footer from "@/Components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

// Component: RootLayout
// Description: Represents the root layout of the application, including navigation, content, and footer.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <main className={styles.main}>    

          <Navigation className={styles.navigation} />

          {children}
          
          <Footer />

        </main>
        
      </body>
    </html>
  );
}