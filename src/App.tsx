
import React, { FC } from 'react';
import './App.css';
import { HashRouter as Router} from 'react-router-dom';

import TopnavBar from './components/TopnavBar';

const App: FC = () => {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <TopnavBar/>
        </Router>
    );
};

export default App;