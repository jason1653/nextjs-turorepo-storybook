import styled from "@emotion/styled";
import { useState } from "react";
// import { useRouter } from "next/router";
import { Input } from "../../atoms/Input";
import { Button } from "../../atoms/Button";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputTodo = () => {
  const [toDo, setToDo] = useState<string>("");

  const onAdd = () => {
    setToDo("");
  };
  return (
    <Container>
      <Input value={toDo} onChange={setToDo} />
      <Button label="추가" color="#304ffe" onClick={onAdd} />
    </Container>
  );
};
