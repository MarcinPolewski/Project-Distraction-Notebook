import classes from "./HomeTab.module.css";
import { HomeTabTextContent } from "../../text_contents/home_tab_texts";
import homeTabImg from "../../assets/home_tab.jpeg";
import pingPongImg from "../../assets/Mental-Ping-Pong.png";
import focusImg from "../../assets/focus.jpeg";
import TextWithImage from "../TextWithImage/TextWithImage";

export default function HomeTab() {
    return (
        <div className={classes.home_tab + " tab"}>
            <TextWithImage image={homeTabImg} {...HomeTabTextContent[0]} imageOnRight={false} />
            <TextWithImage image={pingPongImg} {...HomeTabTextContent[1]} imageOnRight={true} />
            <TextWithImage image={focusImg} {...HomeTabTextContent[2]} imageOnRight={false} />
        </div>
    );
}