import axios from 'axios';
import { AnswersParam } from '../@types/question';

const TOKEN = '98ac5d175f971d4579f3d3c638fb51f087f80663';

export const getQuestionLists = () => {
  return axios.get('/api/question_lists/?format=json', {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });
};

export const getQuestions = (id: string) => {
  return axios.get('/api/questions/?list=' + id, {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });
};

export const postResponses = (answers: AnswersParam) => {
  return axios.post('/api/responses/', answers, {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });
};

export const getResponses = () => {
  return axios.get('/api/responses/', {
    headers: {
      Authorization: `Token ${TOKEN}`,
    },
  });
};
