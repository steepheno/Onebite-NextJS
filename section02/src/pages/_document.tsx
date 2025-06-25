/**
 * 모든 페이지에 공통으로 적용되어야 하는 Next 앱의 HTML 코드를 설정하는 컴포넌트
 */

import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="kr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
