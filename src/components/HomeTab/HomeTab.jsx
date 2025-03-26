import classes from "./HomeTab.module.css";
import { HomeTabTextContent } from "../../text_contents/home_tab_texts";
import homeTabImg from "../../assets/home_tab.jpeg";

function TextContainer() {

    const paragraphs = HomeTabTextContent.paragraphs.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
    });

    return (
        <div className={classes.text_container}>
            <h1>{HomeTabTextContent.heading}</h1>
            {paragraphs}
        </div>
    );
}

export default function HomeTab() {
    return (
        <div className={classes.home_tab + " tab"}>
            <img src={homeTabImg} />
            <TextContainer />
        </div>
    );
}