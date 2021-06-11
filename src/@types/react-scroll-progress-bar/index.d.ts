declare module 'react-scroll-progress-bar' {
  export interface ProgressBarProps {
    height?: string;
    bgcolor?: string;
    duration?: string;
  }

  export default class ProgressBar extends React.Component<ProgressBarProps> {}
}
