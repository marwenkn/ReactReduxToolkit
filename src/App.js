import "./css/main.css";
import TaskList from "./components/TaskList";
import Task from "./components/Task";

import { motion } from "framer-motion";
function App() {
  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
      >
        Task Manager
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Task />
        <TaskList />
      </motion.div>
    </div>
  );
}

export default App;
