import {
  Control,
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { useQuery } from 'react-query';
import { getQuestions } from '../../api/question';
import { Question } from '../../@types/question';
import { QuestionInput } from '../input/question-input';

type SubGroupFormProps = {
  id: number;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: any;
};
export const SubGroupForm = ({
  id,
  register,
  control,
  setValue,
  errors,
}: SubGroupFormProps) => {
  const { data, isLoading } = useQuery(['question-list', id], () =>
    getQuestions(id),
  );
  if (isLoading) {
    return null;
  }
  return (
    <div className="p-8 flex flex-col gap-8">
      {data?.data?.map((question: Question) => (
        <QuestionInput
          register={register}
          key={question.id}
          question={question}
          control={control}
          setValue={setValue}
          errors={errors}
        />
      ))}
    </div>
  );
};
