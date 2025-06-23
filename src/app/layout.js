import "./globals.css";
import ClientLayout from "./Pagescomponents/Layout";

export const metadata = {
  title: "My Restaurant",
  description: "Food & Drinks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
