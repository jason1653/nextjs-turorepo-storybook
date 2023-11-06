import styled from "@emotion/styled";
import { Button } from "../../atoms/Button";
import { PageTitle } from "../../atoms/PageTitle";
import { InputTodo } from "../../organisms/InputToDo";

import { useRouter } from "next/router";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eeeeee;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 40px;
  z-index: 1;
`;

export const ToDoInput = () => {
  const router = useRouter();

  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 추가" />
        <InputTodo />
      </Contents>
      <ButtonContainer>
        <Button label="닫기" onClick={() => router.push("/")} />
      </ButtonContainer>
    </Container>
  );
};
