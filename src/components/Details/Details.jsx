function Details({ summary, content }) {
    return (
        <details className="details">
            <summary className="details__summary">
                <p>{summary}</p>
                <img src="../src/assets/images/arrow_up.svg" alt="" />
            </summary>
            <div className="details__content">{content}</div>
        </details>
    );
}
export default Details;
