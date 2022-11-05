import axios from "axios";

export const getQuestions = () => {
  return axios.get('https://api2.ba.gov.br/api/transito/v1/simulado?tipo=1');
}