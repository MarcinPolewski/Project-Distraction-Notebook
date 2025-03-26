import classes from "./HomeTab.module.css";
import { HomeTabTextContent } from "../../text_contents/home_tab_texts";
import homeTabImg from "../../assets/home_tab.jpeg";
import TextWithImage from "../TextWithImage/TextWithImage";

export default function HomeTab() {
    return (
        <div className={classes.home_tab + " tab"}>
            <TextWithImage image={homeTabImg} {...HomeTabTextContent} imageOnRight={false} />
            <TextWithImage image={homeTabImg} {...HomeTabTextContent} imageOnRight={true} />
        </div>
    );
}