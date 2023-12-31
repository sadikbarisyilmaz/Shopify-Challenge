import { FilmProvider } from "./FilmContext";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <FilmProvider>
        <body className={roboto.className}>{children}</body>
      </FilmProvider>
    </html>
  );
}
