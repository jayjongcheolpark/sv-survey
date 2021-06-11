import { useQuery } from 'react-query';
import ProgressBar from 'react-scroll-progress-bar';
import { getQuestionLists } from '../api/question';
import { QuestionForm } from '../components/form/question-form';

export const MainPage = () => {
  const { data } = useQuery('question-lists', getQuestionLists);
  if (!data || !data.data) {
    return null;
  }
  return (
    <div>
      <ProgressBar bgcolor="#4338CA" />
      <QuestionForm questionLists={data.data} />
    </div>
  );
};
