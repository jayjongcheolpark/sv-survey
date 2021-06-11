export enum QuestionType {
  TEXT = 'TEXT',
  YES_NO = 'YES_NO',
  NUMBER = 'NUMBER',
  MC = 'MC',
}

export type Question = {
  id: number;
  choice_list: string[] | null;
  question_list: number;
  question_type: QuestionType;
  text: string;
};

export type TextType = string | number;
export type Answer = {
  question: string;
  text: TextType;
};

export type Answers = Answer[];

export type AnswersParam = {
  answers: Answers;
};

export type FormState = {
  [key: string]: TextType;
};
