import { Redirect, RouteComponentProps, StaticContext } from 'react-router';
import ProgressBar from 'react-scroll-progress-bar';
import { QuestionForm } from '../components/form/question-form';
import { BasicFooter } from '../components/footer/basic-footer';
import { BasicHeader } from '../components/header/basic-header';

type LocationState = {
  targetId: string;
  targetName: string;
};

type QuestionPageProps = {
  id: string;
};

export const QuestionPage = ({
  location,
  match,
}: RouteComponentProps<QuestionPageProps, StaticContext, LocationState>) => {
  if (!location.state || match.params.id !== location.state.targetId) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <div className="bg-gray-50" style={{ minHeight: '100vh' }}>
        <ProgressBar bgcolor="#3B82F6" />
        <BasicHeader />
        <QuestionForm
          id={match.params.id}
          categoryName={location.state.targetName}
        />
      </div>
      <BasicFooter />
    </>
  );
};
