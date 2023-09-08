const SpeakersCard = (props) => {
    return ( 
        <div className="speaker-item" key={props.id}>
            <div className="speaker-image-group">
                <img src = {`./speakers/${props.imageUrl}`} className="img-fluid speaker-image" alt="" />
            </div>
            <div className="speaker-content">
                <h3 className="speaker-name">{props.name}</h3>
                <p className="speaker-position">{props.position}</p>
                <p className="speaker-company">{props.company}</p>
            </div>
        </div>
     );
}
 
export default SpeakersCard;