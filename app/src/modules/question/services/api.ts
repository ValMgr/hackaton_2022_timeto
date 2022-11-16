import { Question } from "@/types/question";

function getQuestion(url: string): Promise<Question> {
  return fetch(url)
  .then((response) => response.json())
  .catch((err) => console.error(err))
  .then((data) => data);
}

export default getQuestion;