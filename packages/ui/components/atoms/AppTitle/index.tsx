import styled from "@emotion/styled";
import Link from "next/link";

const Container = styled.a`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return (
    <Link href="/">
      <Container>할일목록앱</Container>
    </Link>
  );
};
