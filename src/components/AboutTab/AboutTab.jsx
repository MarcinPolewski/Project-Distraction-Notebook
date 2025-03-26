import classes from "./AboutTab.module.css";
import { AboutTabTextContent } from "../../text_contents/about_tab_texts";

export default function () {
    let content = [];
    for (let i = 0; i < AboutTabTextContent.headings.length; i++) {
        content = [...content, (<h1>{AboutTabTextContent.headings[i]}</h1>)];
        content = [...content, (<p>{AboutTabTextContent.paragraphs[i]}</p>)];
    }

    return (
        <div className={classes.about_tab}>
            <div className={classes.text + " tab"}>
                {content}
            </div>
        </div>
    );

}