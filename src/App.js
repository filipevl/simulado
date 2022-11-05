import { useEffect, useState } from "react";
import { getQuestions } from "./services";
import { Card, Container, Row, Title, Type, Image, Ratio, LabelRadio, RadioArea, Header, HeaderTitle, HeaderContent, LoadButton, Deascription } from "./styled";
import './index.css'

function App() {
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getQuestions();
      setQuestion(data);
    };
    getData();
  }, []);

  useEffect(() => console.log(questions), [questions]);

  const handleClick = async (event) => {
    event.preventDefault();
    const { data } = await getQuestions();
    let newArray = [...questions, ...data];
    let hash = {};
    newArray = newArray.filter(o => hash[o.id] ? false : hash[o.id] = true);
    setQuestion(newArray)
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Simulado -  DETRAN BAHIA</HeaderTitle>
        <HeaderContent>
          <LoadButton onClick={handleClick}>Carregar mais questões</LoadButton>
          <Deascription>Total de perguntas: {questions.length}</Deascription>
        </HeaderContent>
      </Header>
      <Row>
        {questions.length &&
          questions.map(
            ({
              tipoQuestao,
              id,
              descricao,
              imagem,
              respostas,
              respostaCerta,
            }) => (
              <Card key={id}>
                <Type>{tipoQuestao}</Type>
                <Title>{descricao}</Title>
                {imagem && <Image src={"data:image/png;base64, " + imagem} />}
                {respostas.length && respostas.map( r => (
                  <RadioArea key={r.id} active={respostaCerta === r.id}>
                    <Ratio id={'resposta'+r.id} name={'resposta'+id}/>
                    <LabelRadio htmlFor={'resposta'+r.id}>{r.descricao}</LabelRadio>
                  </RadioArea>
                  ))
                }
              </Card>
            )
          )}
      </Row>
      <Header>
        <HeaderContent>
          <LoadButton onClick={handleClick}>Carregar mais questões</LoadButton>
          <Deascription>Total de perguntas: {questions.length}</Deascription>
        </HeaderContent>
      </Header>
    </Container>
  );
}

export default App;
