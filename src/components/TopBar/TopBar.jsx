import classes from "./TopBar.module.css";

function Logo() {
    return (
        <div className={classes.logo_container}>
            <h1>Distraction Notebook</h1>
            <h2>free your focus</h2>
        </div>
    );
}

function Menu({ isStarted }) {
    return (
        <div className={classes.button_container}>
            <button className={classes.top_bar_button}>Home</button>
            <button className={classes.top_bar_button}>About</button>
            <button className={classes.top_bar_button}>Contact</button>
            <button className={classes.top_bar_button}>
                {isStarted ? "Notes" : "Start"}
            </button>
        </div>
    )
}

export default function TopBar() {
    return (
        <div className={classes.top_bar}>
            <div className={classes.top_bar_content}>
                <Logo />
                <Menu isStarted={false} />
            </div>
            <hr />
        </div>
    );
}