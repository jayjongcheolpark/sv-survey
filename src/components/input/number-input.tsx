import { FieldValues, UseFormRegister } from 'react-hook-form';
import { Question } from '../../@types/question';

type NumberInputProps = {
  question: Question;
  register: UseFormRegister<FieldValues>;
  errors: any;
};

export const NumberInput = ({
  question: { id, text },
  register,
  errors,
}: NumberInputProps) => (
  <div>
    <label
      htmlFor={`question-${id}`}
      className="block text-sm font-medium text-gray-700"
    >
      {text}
    </label>
    <input
      type="number"
      id={`question-${id}`}
      className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md mt-1"
      {...register(`question-${id}`, { required: true, valueAsNumber: true })}
    />
    <div className="text-sm text-red-700">
      {errors && errors[`question-${id}`] && 'This field is required.'}
    </div>
  </div>
);
