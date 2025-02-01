import React from 'react';

const VideoPlayer = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <video
        className="h-full max-h-[22rem] w-full rounded-xl object-cover md:max-h-[38rem]"
        loop={true}
        muted={true}
        autoPlay={true}
      >
        <source src={'./contact.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
