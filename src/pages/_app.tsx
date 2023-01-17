import type { AppProps } from "next/app";
import { Montserrat } from "@next/font/google";
import { Provider as RWBProvider } from "react-wrap-balancer";
import cx from "classnames";
import "@/styles/globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RWBProvider>
      <div
        className={cx(
          montserrat.className,
          "flex h-screen flex-col justify-between",
        )}
      >
        <Component {...pageProps} />
      </div>
    </RWBProvider>
  );
}
