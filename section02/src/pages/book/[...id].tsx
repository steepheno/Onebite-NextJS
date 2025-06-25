import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return <h1>Book {id}</h1>;
}

/**
 * 파일명의 대괄호 안 앞부분에 ... 찍으면 모든 경로를 커버할 수 있음
 * 이 컴포넌트를 "Catch All Segment" 라고 부름
 * 
 * <예외>
 * /book 으로 끝나는 경로에는 대응하지 못함
 * 이 문제를 해결하려면 대괄호를 2개로 묶어야 함
 * 이러한 컴포넌트를 "Optional Catch All Segment" 라고 부름
 */
