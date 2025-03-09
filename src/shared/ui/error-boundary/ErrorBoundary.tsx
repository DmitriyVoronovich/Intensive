import {Component, ReactNode} from "react";
import css from './ErrorBoundary.module.css';

type ErrorBoundaryProps = {
    children: ReactNode;
};

type ErrorBoundaryState = {
    hasError: boolean;
};

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    };

    static getDerivedStateFromError(): ErrorBoundaryState {
        return {hasError: true};
    };

    render() {
        if (this.state.hasError) {
            return <div className={css.container}>
                <div className={css.contentWrapper}>
                    <h2 className={css.error}>404</h2>
                    <p className={css.errorDescription}>Что-то пошло не так...</p>
                </div>
            </div>;
        }

        return this.props.children;
    };
};