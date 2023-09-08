import PastSpeakerCard from "./PastSpeakerCard";
import pastSpeakers from "../data";

const PastSpeakers = () => {
    const speakerData = pastSpeakers.map((pastSpeaker)=>{
        return <
            PastSpeakerCard
            name = { pastSpeaker.name }
            position = { pastSpeaker.position }
            company = { pastSpeaker.company }
            imageUrl = {pastSpeaker.imageUrl}
            />
        });

    return ( 
        <section className="container pastspeaker">
            <h2 className="pastspeaker-title"> 
            Past Marketplace Alliance Conference Speakers
            </h2>
            <div className="pastspeaker-group">
            {speakerData}
            </div>
        </section>
    );
}

export default PastSpeakers;