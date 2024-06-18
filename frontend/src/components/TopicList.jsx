import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const { topicClickHandler, state } = props;

  const topicArr = state.topicData.map((topic) => {
    return (
      <TopicListItem
        key={topic["id"]}
        id={topic.id}
        title={topic.title}
        topicClickHandler={topicClickHandler}
      />
    );
  });
  return <div className="top-nav-bar__topic-list">{topicArr}</div>;
};

export default TopicList;
