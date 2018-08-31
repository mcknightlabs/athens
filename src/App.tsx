import * as React from 'react';
import './app.css';

{/* import logo from './logo.svg'; */}

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="app-header">
                    {/* 
                    <img src={logo} className="app-logo" alt="logo" /> 
                    */}
                    <h1 className="app-title">Athens Nation</h1>
                </header>
                <div className="container">
                    <div className="feature-menu">
                        Feature menu
                    </div>
                    <div className="feature-sub-menu">
                        Feature sub-menu
                    </div>
                    <div className="canvas">
                        Canvas
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
