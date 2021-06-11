import { Answers, FormState } from '../@types/question';

export const convertToSubmitFormat = (formState: FormState): Answers => {
  return Object.entries(formState).map(([key, value]) => ({
    question: key.replace('question-', ''),
    text: value,
  }));
};
