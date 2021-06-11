import {
  UseFormRegister,
  FieldValues,
  Control,
  UseFormSetValue,
} from 'react-hook-form';
import { Question, QuestionType } from '../../@types/question';
import { McInput } from './mc-input';
import { NumberInput } from './number-input';
import { TextInput } from './text-input';
import { YesNoInput } from './yes-no-input';

type QuestionInputProps = {
  question: Question;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: any;
};
export const QuestionInput = ({
  question,
  register,
  control,
  setValue,
  errors,
}: QuestionInputProps) => {
  switch (question.question_type) {
    case QuestionType.TEXT: {
      return (
        <TextInput question={question} register={register} errors={errors} />
      );
    }
    case QuestionType.NUMBER: {
      return (
        <NumberInput question={question} register={register} errors={errors} />
      );
    }
    case QuestionType.YES_NO: {
      return (
        <YesNoInput question={question} control={control} errors={errors} />
      );
    }
    case QuestionType.MC: {
      return (
        <McInput
          question={question}
          control={control}
          setValue={setValue}
          errors={errors}
        />
      );
    }
    default: {
      return <div>Not Supported</div>;
    }
  }
};
