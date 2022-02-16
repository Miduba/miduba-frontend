import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "styles/globalStyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      {globalStyles}
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
