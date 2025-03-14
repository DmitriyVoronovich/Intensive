import { Component, ReactNode } from 'react';
import css from './ErrorBoundary.module.css';
import { Result } from 'antd';

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={css.container}>
          <Result status="404" title="404" subTitle="Что-то пошло не так..." />
        </div>
      );
    }

    return this.props.children;
  }
}
