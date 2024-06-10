import { fonts } from "./fonts";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.merriweather.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
