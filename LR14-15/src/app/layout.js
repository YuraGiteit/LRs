import "./styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./components/Header";

export const metadata = {
  title: "My Wild Oasis App",
  description: "A simple app using Tailwind CSS with custom colors",
};

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
