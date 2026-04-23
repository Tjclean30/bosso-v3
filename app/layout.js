import "./globals.css";

export const metadata = {
  title: "Bosso V3",
  description: "Outdoor lighting quotes"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
