import React, { Component } from 'react';

class ErrorBoundary extends Component
{
    constructor(props)
    {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error)
    {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo)
    {
        // Log the error to an error reporting service if needed
        console.error(error, errorInfo);
    }

    render()
    {
        if (this.state.hasError)
        {
            return (
                <div id="container" className='errors'>

                <div id="error">
                    <h3>Whoops!</h3>
                    <p>Something went wrong, sorry about that.</p>
                    {/* <button className="error">Let's try again</button> */}
                </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
