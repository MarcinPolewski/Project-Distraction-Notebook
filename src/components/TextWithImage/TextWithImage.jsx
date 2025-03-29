import classes from "./TextWithImage.module.css";

function TextContainer({ heading, paragraphs }) {

    const mappedParagraphs = paragraphs.map((paragraph, index) => {
        return <p key={index}>{paragraph}</p>;
    });

    return (
        <div className={classes.text_container}>
            <h1>{heading}</h1>
            {mappedParagraphs}
        </div>
    );
}

export default function TextWithImage({ image, heading, paragraphs, imageOnRight = false }) {
    return (
        <div className={classes.text_with_image}>
            {!imageOnRight && <img src={image} />}
            <TextContainer heading={heading} paragraphs={paragraphs} />
            {imageOnRight && <img src={image} />}
        </div>

    );
}