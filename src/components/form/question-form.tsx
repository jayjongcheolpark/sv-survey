import { useQuery } from 'react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getQuestions } from '../../api/question';
import { Question, FormState, Answers } from '../../@types/question';
import { QuestionInput } from '../input/question-input';
import { convertToSubmitFormat } from '../../utils/format';
import { ConfirmationView } from '../view/confirmation-view';

type QuestionFormProps = {
  id: string;
  categoryName: string;
};
export const QuestionForm = ({ id, categoryName }: QuestionFormProps) => {
  const { data, isLoading } = useQuery(['question-list', id], () =>
    getQuestions(id),
  );
  const [answers, setAnswers] = useState<Answers>([]);

  const {
    watch,
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: FormState) => {
    setAnswers(convertToSubmitFormat(data));
  };

  if (isLoading) {
    return null;
  }
  return (
    <>
      <nav className="p-3 rounded w-full m-4">
        <ol className="list-reset flex text-gray-500">
          <li>
            <Link
              to="/"
              className="text-blue-500 font-bold underline hover:text-blue-700"
            >
              Home
            </Link>
          </li>
          <li>
            <span className="mx-2">/</span>
          </li>
          <li>{categoryName}</li>
        </ol>
      </nav>
      <div className="pb-16 px-4 flex justify-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-8">
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
          <div className="float-right mt-8">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {answers && answers.length > 0 && (
        <ConfirmationView
          answers={answers}
          watch={watch}
          data={data?.data}
          handleEdit={() => setAnswers([])}
        />
      )}
    </>
  );
};
