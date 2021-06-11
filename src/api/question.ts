import axios from 'axios';
import { Answers } from '../@types/question';

export const getQuestionLists = () => {
  return axios.get('/api/question_lists/?format=json', {
    withCredentials: true,
  });
};

export const getQuestions = (id: number) => {
  return axios.get('/api/questions/?list=' + id, {
    withCredentials: true,
  });
};

export const postResponses = (answers: Answers) => {
  return axios.post('/api/responses/', answers, {
    withCredentials: true,
  });
};

export const getResponses = () => {
  return axios.get('/api/responses/', {
    withCredentials: true,
  });
};
