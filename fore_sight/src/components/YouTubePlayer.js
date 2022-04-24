import React from "react";

export default function App() {
  return (
    <div style={{'width':'50%', 'height':''}}>
      <iframe style={{width:'100%', 'height':'350px'}}
        src="https://www.youtube.com/embed/1dVEfs6Exkc"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="video"
      />{" "}
    </div>
  );
}