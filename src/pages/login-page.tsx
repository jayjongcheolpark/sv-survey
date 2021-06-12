import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import { postLogin, LoginParms } from '../api/auth';

export const LoginPage = () => {
  const mutation = useMutation(postLogin);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: LoginParms) => mutation.mutate(data);

  if (mutation.isSuccess) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className="w-full flex items-center justify-center"
      style={{ height: '100vh' }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div
          style={{ width: '350px' }}
          className="p-16 rounded-sm shadow-md flex flex-col gap-4"
        >
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md p-2 mt-1"
              placeholder="Your username"
              {...register('username', { required: true })}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border border-gray-300 rounded-md p-2 mt-1"
              placeholder="Your password"
              {...register('password', { required: true })}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
