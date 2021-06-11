import { useQuery } from 'react-query';
import { getResponses } from '../api/question';

export const SuccessPage = () => {
  const { data } = useQuery('response', getResponses);
  console.log('data:', data);

  return <div>Success</div>;
};
