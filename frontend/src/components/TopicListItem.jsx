import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { title, topicClickHandler, id } = props;

  return (
    <div className="topic-list__item">
      <span onClick={() => topicClickHandler(id)} className="topic-list__item">
        {title}
      </span>
    </div>
  );
};

export default TopicListItem;
