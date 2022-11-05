import styled from "styled-components";

export const Container = styled.div`
background-color: #F5F1ED;
color: #252323;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 90%;
  max-width: 560px;
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
  color: #252323;
`;

export const Image = styled.img`
  margin-bottom: 16px;
`;

export const LabelRadio = styled.label``;
export const Ratio = styled.input.attrs({
  type: "radio",
})``;

export const RadioArea = styled.div`
  background-color: ${(props) => (props.active ? "#ad4" : "#F5F1ED")};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderTitle = styled.h1``;

export const HeaderContent = styled.div`
display: flex;
    justify-content: space-between;
    width: 86%;
    margin-bottom: 24px;
`;

export const LoadButton = styled.button`
border-color: #DAD2BC;
background-color: #DAD2BC;
border-radius: 8px;
font-weight: bold;
padding: 0px 16px;
`;

export const Deascription = styled.p``;
