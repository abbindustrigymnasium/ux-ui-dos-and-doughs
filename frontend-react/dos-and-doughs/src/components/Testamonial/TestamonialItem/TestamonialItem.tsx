import "./TestamonialItem.css";

const testamonialVid1 = "/cafe-vid1-4096-2160-25fps.mp4";
const testamonialVid2 = "/cafe-vid2-4096-2160-25fps.mp4";

import VideoPlayer from "../../VideoPlayer/VideoPlayer.tsx";

function TestamonialItem(p : any) {
    return (
        <div className="testamonial-item">
            {p.layout == "1" ?
                <>
                    <div className="quote-container">
                        <span>“</span>
                        <h1>{p.quote}</h1>
                        <span>“</span>
                        <p>-&nbsp;&nbsp;{p.name}</p>
                    </div>
                    <div className="video-container">
                        {p.vid == "1" ? <VideoPlayer src={testamonialVid1} /> : <VideoPlayer src={testamonialVid1} />}
                    </div>
                </>
                :
                <>
                    <div className="video-container layout-2">
                        {p.vid == "1" ? <VideoPlayer src={testamonialVid1} /> : <VideoPlayer src={testamonialVid2} />}
                    </div>
                    <div className="quote-container">
                        <span>“</span>
                        <h1>{p.quote}</h1>
                        <span>“</span>
                        <p>-&nbsp;&nbsp;{p.name}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default TestamonialItem