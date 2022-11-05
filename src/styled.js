import styled from "styled-components";

export const Container = styled.div``;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 90%;
  margin: 16px 0px;
  padding: 16px 8px;
  border: 2px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 16px;
`;

export const Type = styled.p`
  font-size: 8px;
  align-self: end;
  font-weight: bold;
  color: #a9dd44;
`;

export const Image = styled.img`
  margin-bottom: 16px;
`;

export const LabelRadio = styled.label``;
export const Ratio = styled.input.attrs({
  type: "radio",
})``;

export const RadioArea = styled.div`
  background-color: ${(props) => (props.active ? "#ad4" : "#fff")};
`;
