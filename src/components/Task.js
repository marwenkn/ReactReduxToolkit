import React, { useState } from "react";
import { connect } from "react-redux";
import { addtasks } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtask: (obj) => dispatch(addtasks(obj)),
  };
};

const Task = (props) => {
  const [task, settask] = useState("");

  const handleChange = (e) => {
    settask(e.target.value);
  };

  const add = () => {
    if (task === "") {
      alert("Input is Empty");
    } else {
      props.addtask({
        id: Math.floor(Math.random() * 1000),
        item: task,
        completed: false,
      });
      settask("");
    }
  };
  //console.log("props from store", props);
  return (
    <div className="addtasks">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="task-input"
        value={task}
      />

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="add-btn"
        onClick={() => add()}
      >
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Task);
