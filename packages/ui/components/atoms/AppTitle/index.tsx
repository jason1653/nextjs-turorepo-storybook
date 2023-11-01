import styled from "@emotion/styled";

const Container = styled.a`
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;
`;

export const AppTitle = () => {
  return <Container href="/">할일목록앱</Container>;
};
