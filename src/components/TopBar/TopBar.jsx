import classes from "./TopBar.module.css";

function Logo() {
    return (
        <div className={classes.logo_container}>
            <h1>Distraction Notebook</h1>
            <h2>free your focus</h2>
        </div>
    );
}

function Menu({ isStarted, onTabChange }) {
    return (
        <div className={classes.button_container}>
            <button className={classes.top_bar_button} onClick={() => { onTabChange('home') }} >Home</button>
            <button className={classes.top_bar_button} onClick={() => { onTabChange('about') }}> About</button>
            <button className={classes.top_bar_button} onClick={() => { onTabChange('contact') }}>Contact</button>
            <button className={classes.top_bar_button} onClick={() => { onTabChange('notes') }}>
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