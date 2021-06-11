import { Answers, FormState } from '../@types/question';

export const convertToSubmitFormat = (formState: FormState): Answers => {
  return Object.entries(formState).reduce<Answers>((result, [key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((v) => {
        result.push({
          question: key.replace('question-', ''),
          text: v,
        });
      });
    } else {
      result.push({
        question: key.replace('question-', ''),
        text: value,
      });
    }
    return result;
  }, []);
};
