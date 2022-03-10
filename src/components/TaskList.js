import React, { useState } from "react";
import { connect } from "react-redux";
import { addtasks, completetasks, removetasks, updatetasks } from "../redux/reducer";
import TaskItem from "./TaskItem";
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtask: (obj) => dispatch(addtasks(obj)),
    removetask: (id) => dispatch(removetasks(id)),
    updatetask: (obj) => dispatch(updatetasks(obj)),
    completetask: (id) => dispatch(completetasks(id)),
  };
};

const TaskList = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="TaskList">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("Completed")}
        >
          Done
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {props.tasks.length > 0 && sort === "active"
            ? props.tasks.map((item) => {
                return (
                  item.completed === false && (
                    <TaskItem
                      key={item.id}
                      item={item}
                      removetask={props.removetask}
                      updatetask={props.updatetask}
                      completetask={props.completetask}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.tasks.length > 0 && sort === "Completed"
            ? props.tasks.map((item) => {
                return (
                  item.completed === true && (
                    <TaskItem
                      key={item.id}
                      item={item}
                      removetask={props.removetask}
                      updatetask={props.updatetask}
                      completetask={props.completetask}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.tasks.length > 0 && sort === "all"
            ? props.tasks.map((item) => {
                return (
                  <TaskItem
                    key={item.id}
                    item={item}
                    removetask={props.removetask}
                    updatetask={props.updatetask}
                    completetask={props.completetask}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
