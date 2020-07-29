import React from "react";
import avatar from "../../assets/carmen-sandiego.png";

export const TweetContext = React.createContext(null);

const tweetData = {
  tweetContents: "Where in the world am I?",
  displayName: "Carmen Sandiego ✨",
  username: "carmen-sandiego",
  avatarSrc: avatar,
  isRetweetedByCurrentUser: false,
  isLikedByCurrentUser: false,
};

export const TweetProvider = ({ children }) => {
  const {
    tweetContents,
    displayName,
    username,
    avatarSrc,
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
  } = tweetData;

  return (
    <TweetContext.Provider
      value={{
        tweetContents,
        displayName,
        username,
        avatarSrc,
        isRetweetedByCurrentUser,
        isLikedByCurrentUser,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
