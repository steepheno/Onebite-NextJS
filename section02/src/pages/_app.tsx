/**
 * 모든 페이지 역할을 하는 컴포넌트들의 부모 컴포넌트
 */

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <header>글로벌 헤더</header> */}
      <Component {...pageProps} />
    </>
  );
}
