import { useState } from 'react';

import './App.css'
import TopBar from './components/TopBar/TopBar'
import HomeTab from './components/HomeTab/HomeTab'
import NotesTab from './components/NotesTab/NotesTab';
import AboutTab from './components/AboutTab/AboutTab';
import Footer from './components/Footer/Footer';


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


        default:
            tabContent = <HomeTab />;
    }

    return (
        <>
            <div className="top_bar_and_content">
                <TopBar onTabChange={handleTabChange} selectedTab={currentTab} />
                {tabContent}
            </div>
            <Footer />
        </>
    );
}

