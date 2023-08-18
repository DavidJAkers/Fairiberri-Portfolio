export default function Animation() {
  return (
    <div className="animation">
      <p className="page-header">Animation</p>
      <div className="animation-gallery">
        <div className="fishbowl">
          <p className="video-title">Fish Tank</p>
          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/RksLfJkUKmQ"
              title="YouTube video player"
              //frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
              allowFullScreen
            ></iframe>
          </div>
          <p className="development-medium">
            Made in Cinema4D
          </p>
        </div>
        <div className="school-love">
          <p className="video-title">School Love</p>
          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/QIt5SA0IGvM"
              title="YouTube video player"
              //frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
              allowFullScreen
            ></iframe>
          </div>
          <p className="development-medium">
            Made in Adobe AfterEffects
          </p>
        </div>
        <div className="level-one">
          <p className="video-title">Level One</p>
          <div className="video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/MtZujAyE5Kw"
              title="YouTube video player"
              //frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
              allowFullScreen
            ></iframe>
          </div>
          <p className="development-medium">
            Made in Adobe AfterEffects
          </p>
        </div>
      </div>
    </div>
  );
}
