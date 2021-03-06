import { useState } from 'react';
import {
  FieldValues,
  UseFormSetValue,
  Control,
  Controller,
} from 'react-hook-form';
import { Question } from '../../@types/question';

type McInputProps = {
  question: Question;
  control: Control<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: any;
};

export const McInput = ({
  question: { id, text, choice_list },
  control,
  setValue,
  errors,
}: McInputProps) => {
  const [checked, setChecked] = useState(
    Array.isArray(choice_list) ? Array.from(choice_list, () => false) : [],
  );
  if (!choice_list || choice_list.length <= 0) {
    return null;
  }
  return (
    <div>
      <span className="text-sm font-medium text-gray-700">{text}</span>
      <div className="mt-1">
        <Controller
          name={`question-${id}`}
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => {
            return (
              <>
                <div>
                  {choice_list.map((value, index) => (
                    <div key={value}>
                      <label>
                        <input
                          type="checkbox"
                          className="rounded text-blue-500"
                          onChange={(e) => {
                            setChecked(
                              Object.assign([], checked, {
                                [index]: e.target.checked,
                              }),
                            );
                            if (e.target.checked) {
                              setValue(`question-${id}`, [
                                ...(field.value || []),
                                value,
                              ]);
                            } else {
                              const index = field.value.indexOf(value);
                              if (index !== -1) {
                                field.value.splice(index, 1);
                                setValue(`question-${id}`, field.value);
                              }
                            }
                          }}
                          checked={checked[index]}
                        />
                        <span className="ml-2 text-md text-gray-700">
                          {value}
                        </span>
                      </label>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-red-700">
                  {!field.value &&
                    errors &&
                    errors[`question-${id}`] &&
                    'This field is required.'}
                </div>
              </>
            );
          }}
        />
      </div>
    </div>
  );
};
