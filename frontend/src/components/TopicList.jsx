import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";



const TopicList = (props) => {
  const {topics} = props;
  const topicArr = topics.map((topic) => {
    return ( <TopicListItem 
      key={topic["id"]}
      slug={topic["slug"]}
      title={topic["title"]}
      />
    );
  })
  return (
    <div className="top-nav-bar__topic-list">
      {topicArr}
    </div>
  );
};

export default TopicList;
