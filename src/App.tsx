import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { LoginPage } from './pages/login-page';
import { MainPage } from './pages/main-page';
import { SuccessPage } from './pages/success-page';
import './styles/app.css';

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/success">
            <SuccessPage />
          </Route>
          <Route path="/" exact>
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
