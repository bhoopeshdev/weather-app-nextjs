import "./globals.css";
import { ThemeProvider } from '../../context/ThemeContext';

export const metadata = {
  title: "My Weather App",
  description: "Weather App to fetch Current Data and Forecast Data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
