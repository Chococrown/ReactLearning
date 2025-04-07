import React from "react";
import PropTypes from "prop-types";

const Todo = ({ text }) => {
  return <div>{text}</div>;
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Todo;