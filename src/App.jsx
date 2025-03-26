import { useState } from 'react';

import './App.css'
import TopBar from './components/TopBar/TopBar'
import HomeTab from './components/HomeTab/HomeTab'
import NotesTab from './components/NotesTab/NotesTab';
import AboutTab from './components/AboutTab/AboutTab';
import ContactTab from './components/ContactTab/ContactTab';


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
        case 'about':
            tabContent = <AboutTab />;
            break;
        case 'contact':
            tabContent = <ContactTab />;
            break

        default:
            tabContent = <HomeTab />;
    }

    return (
        <div>
            <TopBar onTabChange={handleTabChange} selectedTab={currentTab} />
            {tabContent}
        </div >
    );
}

