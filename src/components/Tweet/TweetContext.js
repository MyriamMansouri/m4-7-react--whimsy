import React from "react";
import avatar from "../../assets/carmen-sandiego.png";
import moment from "moment";

export const TweetContext = React.createContext(null);

const date = moment().format(" h:mm A - MMMM Do YYYY");

export const TweetProvider = ({ children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(460);
  const [numOfRetweets, setNumOfRetweets] = React.useState(65);
  const [isLiked, setIsLiked] = React.useState(false);
  const [isRetweeted, setIsRetweeted] = React.useState(false);

  const handleToggleLike = () => {
    if (!isLiked) {
      setNumOfLikes(numOfLikes + 1);
    } else {
      setNumOfLikes(numOfLikes - 1);
    }
    setIsLiked(!isLiked);
  };

  const handleToggleRetweet = () => {
    if (!isRetweeted) {
        setNumOfRetweets(numOfRetweets + 1);
    } else {
        setNumOfRetweets(numOfRetweets - 1);
    }
    setIsRetweeted(!isRetweeted);
  };

  return (
    <TweetContext.Provider
      value={{
        tweetContents: "Where in the world am I?",
        displayName: "Carmen Sandiego ✨",
        username: "carmen-sandiego",
        avatarSrc: avatar,
        isRetweetedByCurrentUser: isRetweeted,
        handleToggleRetweet,
        isLikedByCurrentUser: isLiked,
        handleToggleLike,
        date,
        numOfLikes,
        numOfRetweets,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};
