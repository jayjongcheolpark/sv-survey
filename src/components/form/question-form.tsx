import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router';
import { FormState } from '../../@types/question';
import { postResponses } from '../../api/question';
import { convertToSubmitFormat } from '../../utils/format';
import { SubGroupForm } from './sub-group-form';

type QuestionList = {
  id: number;
  name: string;
};

type QuestionFormProps = {
  questionLists: QuestionList[];
};

export const QuestionForm = ({ questionLists }: QuestionFormProps) => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const mutation = useMutation(postResponses);
  const onSubmit = (data: FormState) =>
    mutation.mutate(convertToSubmitFormat(data));

  if (mutation.isSuccess) {
    <Redirect to="/success" />;
  }

  return (
    <div
      className="bg-gray-100 p-16 flex justify-center"
      style={{ minHeight: '100vh' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-8" style={{ maxWidth: '1000px' }}>
          {questionLists.map(({ id, name }) => (
            <div key={id} className="flex flex-col md:flex-row">
              <div
                className="font-semibold text-gray-900 pl-4 md:pl-0 pb-4 md:pb-0"
                style={{ width: '200px' }}
              >
                {name}
              </div>
              <div className="flex-1 ml-4 bg-white rounded-md">
                <SubGroupForm
                  id={id}
                  register={register}
                  control={control}
                  setValue={setValue}
                  errors={errors}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="float-right mt-8">
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-8"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
