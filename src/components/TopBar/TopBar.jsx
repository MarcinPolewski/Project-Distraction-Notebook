import classes from "./TopBar.module.css";
import {useState} from "react";

function Logo() {
    return (
        <div className={classes.logo_container}>
            <h1>Distraction Notebook</h1>
            <h2>free your focus</h2>
        </div>
    );
}

function Menu({  onTabChange, selectedTab }) {

    const[isStarted, setIsStarted] = useState(false);

    if(!isStarted && selectedTab === "notes")
    {
        setIsStarted(true);
    }

    return (
        <div className={classes.button_container}>
            <button className={`${classes.top_bar_button} ${selectedTab === 'home' ? "selected" : ""}`} onClick={() => { onTabChange('home') }} >Home</button>
            <button className={`${classes.top_bar_button} ${selectedTab === 'about' ? "selected" : ""}`} onClick={() => { onTabChange('about') }}> About</button>
            <button className={`${classes.top_bar_button} ${selectedTab === 'notes' ? "selected" : ""}`} onClick={() => { onTabChange('notes') }}>
                {isStarted ? "Notes" : "Start"}
            </button>
        </div>
    )
}

export default function TopBar(props) {
    return (
        <div className={classes.top_bar}>
            <div className={classes.top_bar_content}>
                <Logo />
                <Menu {...props} />
            </div>
            <hr />
        </div>
    );
}