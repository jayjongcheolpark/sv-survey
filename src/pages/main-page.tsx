import { useQuery } from 'react-query';
import { getQuestionLists } from '../api/question';
import { BasicHeader } from '../components/header/basic-header';
import { QuestionLists } from '../@types/question';
import { ReactComponent as ArrowRight } from './arrow-right-solid.svg';
import { BasicFooter } from '../components/footer/basic-footer';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  const { data } = useQuery('question-lists', getQuestionLists);
  if (!data || !data.data) {
    return null;
  }
  const questionLists = data.data as QuestionLists;
  return (
    <>
      <div className="bg-gray-50" style={{ minHeight: '100vh' }}>
        <BasicHeader />
        <div className="flex flex-col items-center py-24">
          <h3 className="text-gray-600 font-semibold text-xl">
            Select Category
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {questionLists.map(({ id, name }) => (
              <Link
                to={{
                  pathname: `/${id}`,
                  state: { targetId: id.toString(), targetName: name },
                }}
                key={id}
                className="group w-full sm:w-48 bg-white shadow-md rounded-xl  p-5 pb-10 border-2 border-gray-100 hover:border-blue-500"
              >
                <div className="text-gray-900 font-medium">{name}</div>
                <div className="text-gray-500 text-xs mt-2 mb-4 relative">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                </div>
                <ArrowRight className="absolute h-5 w-5 text-gray-400 group-hover:text-blue-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <BasicFooter />
    </>
  );
};
