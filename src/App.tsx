import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { QuestionPage } from './pages/question-page';
import { LoginPage } from './pages/login-page';
import { MainPage } from './pages/main-page';
import './styles/app.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={MainPage} />
          <Route path="/:id" component={QuestionPage} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
