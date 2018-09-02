import * as React from 'react';
import './app.css';

{/* import logo from './logo.svg'; */}

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <div className="app-alert">
                    <strong>Natasha</strong> Do you want to talk later? <a href="">Reply</a>
                </div>
                <header className="app-header">
                    {/* 
                    <img src={logo} className="app-logo" alt="logo" /> 
                    */}
                    <h1 className="app-title">Athens Nation</h1>
                    <ul className="main-menu">
                        <li>reflect</li>
                        <li>connect</li>
                        <li>eat</li>
                        <li>move</li>
                    </ul>
                </header>
                <div className="container">
                    <div className="feature-menu">
                        <ul>
                            <li>
                                Journals
                            </li>
                        </ul>
                    </div>
                    <div className="feature-sub-menu">
                        <a className="action write">write</a>
                        <ul>
                            <li>
                                Personal
                            </li>
                            <li>
                                + Add Journal
                            </li>
                        </ul>
                    </div>
                    <div className="canvas">
                        <div className="canvas-message">
                            <p>Keep a journal for your child.</p>

                            <p>Record when she learns to walk, eats food for the first time, or says her first word. Record her first day at school. Record her wedding.</p>

                            <p>Write down specific stories, events, funny things they said or did. Write about the the decisions you have made that impact their lives. Write about how they have changed you.
                            </p>
                        </div>

                        <div className="journal">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
