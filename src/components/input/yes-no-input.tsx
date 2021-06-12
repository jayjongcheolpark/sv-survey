import { Controller, FieldValues, Control } from 'react-hook-form';
import { Question } from '../../@types/question';

type YesNoInputProps = {
  question: Question;
  control: Control<FieldValues>;
  errors: any;
};

export const YesNoInput = ({
  question: { id, text },
  control,
  errors,
}: YesNoInputProps) => (
  <div>
    <span className="text-sm font-medium text-gray-700">{text}</span>
    <div className="mt-1">
      <Controller
        name={`question-${id}`}
        control={control}
        rules={{
          required: true,
        }}
        render={({ field }: { field: any }) => {
          return (
            <div>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="yes"
                  onChange={(e) => field.onChange(e.target.value)}
                  checked={field.value === 'yes'}
                  className="text-blue-500"
                />
                <span className="ml-2 text-md text-gray-700">Yes</span>
              </label>
              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  value="no"
                  onChange={(e) => field.onChange(e.target.value)}
                  checked={field.value === 'no'}
                  className="text-blue-500"
                />
                <span className="ml-2 text-md text-gray-700">No</span>
              </label>
            </div>
          );
        }}
      />
    </div>
    <div className="text-sm text-red-700">
      {errors && errors[`question-${id}`] && 'This field is required.'}
    </div>
  </div>
);
