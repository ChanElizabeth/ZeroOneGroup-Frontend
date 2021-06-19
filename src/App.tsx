
import React, { FC } from 'react';
import './App.css';
// import Sidebar from './components/Sidebar';
import { BrowserRouter as Router} from 'react-router-dom';

import TopnavBar from './components/TopnavBar';

const App: FC = () => {
    return (
        <Router>
            <TopnavBar/>
        </Router>
    );
};

export default App;