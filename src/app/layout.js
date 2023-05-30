import './globals.css';

export const metadata = {
  title: 'Movies App',
  description: 'Application to watch movie trailers',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
