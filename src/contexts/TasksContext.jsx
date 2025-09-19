import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const TasksContext = createContext();

function TasksProvider({ children }) {
  const [url, setUrl] = useState("/tasks?order=created_at.desc");
  const [reloadKey, setReloadKey] = useState(0);
  const {
    data: tasks,
    isLoading: tasksLoading,
    error: tasksError,
  } = useFetch(url, reloadKey);

  function reloadTasks() {
    setReloadKey((k) => k + 1);
  }

  return (
    <TasksContext.Provider
      value={{ tasks, tasksLoading, tasksError, reloadTasks, setUrl }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  if (context === undefined)
    throw new Error("The Context was used outside the Provider");
  return context;
}

export { TasksProvider, useTasks };
