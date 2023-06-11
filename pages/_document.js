import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </Html>
  );
}
