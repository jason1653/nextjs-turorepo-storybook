import styled from "@emotion/styled";
import { Button } from "../../atoms/Button";
import { PageTitle } from "../../atoms/PageTitle";
import { TodoItem } from "../../organisms/TodoItem";
import { useEffect } from "react";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-firection: column;
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

const ToDoListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  position: aboluste;
  right: 40px;
  bottom: 40px;
`;

interface ToDoListProps {
  readonly toDoList: string[];
  readonly onDelete?: (toDo: string) => void;
}

export const ToDoList = ({ toDoList, onDelete }: ToDoListProps) => {
  useEffect(() => {
    console.log(toDoList);
  }, []);
  return (
    <Container>
      <Contents>
        <PageTitle title="할 일 목록" />
        <ToDoListContainer>
          {toDoList.length === 0 ? (
            <div>할 일이 없어요!</div>
          ) : (
            <>
              {toDoList.map((toDo) => (
                <TodoItem
                  key={toDo}
                  label={toDo}
                  onDelete={() => {
                    if (typeof onDelete === "function") onDelete(toDo);
                  }}
                />
              ))}
            </>
          )}
        </ToDoListContainer>
      </Contents>
      <ButtonContainer>
        <Button label="할 일 추가" color="#304FFE"></Button>
      </ButtonContainer>
    </Container>
  );
};
