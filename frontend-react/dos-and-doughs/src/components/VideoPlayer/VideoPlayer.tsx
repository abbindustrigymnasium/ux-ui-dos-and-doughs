const VideoPlayer = (p : any) => {
    return (
        <div>
            <video autoPlay muted loop>
                <source src={p.src} type="video/mp4" />
            </video>
            <video autoPlay muted loop className="video-blur">
                <source src={p.src} type="video/mp4" />
            </video>
        </div>
    );
};
  
export default VideoPlayer;