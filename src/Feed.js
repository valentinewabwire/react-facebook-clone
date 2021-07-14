import React from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        // key={id}
        profilePic="https://images2.alphacoders.com/597/thumbbig-597950.jpg"
        message="My first work"
        timestamp="Timestamp is midnight"
        username="master shifu"
        image="https://cdn.pixabay.com/photo/2021/07/09/04/19/girl-6398258_960_720.jpg"
      />
      <Post
        // key={id}
        profilePic="https://images2.alphacoders.com/597/thumbbig-597950.jpg"
        message="My first work"
        timestamp="Timestamp is midnight"
        username="master shifu"
      />
    </div>
  );
}

export default Feed;
