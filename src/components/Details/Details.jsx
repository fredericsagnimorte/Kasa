import arrowUp from "../../assets/images/arrow_up.svg";

function Details({ summary, content }) {
    return (
        <details className="details">
            <summary className="details__summary">
                <p>{summary}</p>
                <img src={arrowUp} alt="" />
            </summary>
            <div className="details__content">{content}</div>
        </details>
    );
}
export default Details;
