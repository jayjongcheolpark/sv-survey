import { FieldValues, UseFormWatch } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { Answers, Question, QuestionType } from '../../@types/question';
import { BasicHeader } from '../header/basic-header';
import { postResponses } from '../../api/question';

type ConfirmationViewProps = {
  answers: Answers;
  watch: UseFormWatch<FieldValues>;
  data: Question[];
  handleEdit: () => void;
};

type WatchAll = {
  [key: string]: any;
};

type RenderAnswerParams = {
  id: number;
  watchAll: WatchAll;
  questionType: QuestionType;
};

const renderAnswer = ({ id, watchAll, questionType }: RenderAnswerParams) => {
  if (questionType === QuestionType.MC) {
    return watchAll[`question-${id}`].map((item: string) => (
      <div key={item}>{item}</div>
    ));
  }
  return <div>{watchAll[`question-${id}`]}</div>;
};

export const ConfirmationView = ({
  answers,
  watch,
  data,
  handleEdit,
}: ConfirmationViewProps) => {
  const watchAll = watch();

  const mutation = useMutation(postResponses);

  if (mutation.isSuccess) {
    return <Redirect to="/" />;
  }

  return (
    <div
      className="absolute w-full top-0 left-0 right-0 bottom-0 bg-gray-50"
      style={{ minHeight: '100vh' }}
    >
      <BasicHeader />
      <div className="flex justify-center">
        <div className="bg-white rounded-3xl p-16 mt-8 shadow-md">
          <h1 className="font-bold text-3xl text-gray-700 mb-8">
            Answers Confirmation
          </h1>
          <div className="flex flex-col gap-8">
            {data.map((question: Question) => {
              return (
                <section key={question.id}>
                  <div className="text-gray-700 text-sm">{question.text}</div>
                  <div className="bg-blue-50 p-2 rounded-md text-gray-900 mt-1">
                    {renderAnswer({
                      id: question.id,
                      watchAll,
                      questionType: question.question_type,
                    })}{' '}
                  </div>
                </section>
              );
            })}
          </div>
          <div className="mt-16 flex gap-4 float-right">
            <button
              type="button"
              className="text-blue-500 font-bold py-2 px-4 rounded "
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => mutation.mutate({ answers })}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
