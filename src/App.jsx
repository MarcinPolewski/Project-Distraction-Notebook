import { useState } from 'react';

import './App.css'
import TopBar from './components/TopBar/TopBar'
import HomeTab from './components/HomeTab/HomeTab'
import NotesTab from './components/NotesTab/NotesTab';


export default function App() {

    const [currentTab, setCurrentTab] = useState('home');

    function handleTabChange(tabName) {
        setCurrentTab(tabName);
    }

    let tabContent;
    switch (currentTab) {
        case 'home':
            tabContent = <HomeTab />;
            break;
        case 'notes':
            tabContent = <NotesTab />;
            break;
        default:
            tabContent = <HomeTab />;
    }

    return (
        <div>
            <TopBar onTabChange={handleTabChange} />
            {tabContent}
        </div >
    );
}

