const PastSpeakerCard = (props) => {
    return ( 
        <div className="pastspeaker-item" key={props.id}>
            <div className="pastspeaker-image-group">
                <img src = {`./pastspeakers/${props.imageUrl}`} className="img-fluid pastspeaker-image" alt="" />
            </div>
            <div className="pastspeaker-content">
                <h3 className="pastspeaker-name">{props.name}</h3>
                <p className="pastspeaker-position">{props.position}</p>
                <p className="pastspeaker-company">{props.company}</p>
            </div>
        </div>
    );
}
 
export default PastSpeakerCard;