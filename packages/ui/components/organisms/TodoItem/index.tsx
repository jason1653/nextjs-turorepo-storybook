import styled from "@emotion/styled";
import { Button } from "../../atoms/Button";
import { Label } from "../../atoms/Label";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

interface Props {
  readonly label: string;
  readonly onDelete?: () => void;
}

export const TodoItem = ({ label, onDelete }: Props) => {
  return (
    <Container>
      <Label label={label} />
      <Button label="삭제" onDelete={onDelete} />
    </Container>
  );
};
