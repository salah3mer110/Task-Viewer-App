import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Error from "./common/Error";
import Loading from "./common/Loading";
import NewTaskBtn from "./NewTaskBtn";
import TaskForm from "./TaskForm";

function AddTask() {
  //toggle the visibility of the task form
  const [addTask, setAddTask] = useState(false);

  // Fetch categories for the form dropdown
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useFetch("/categories?order=name.asc");

  // Show error if fetching categories failed
  if (categoriesError) return <Error />;

  // Show the "New Task" button if form is not active
  if (!addTask) {
    return <NewTaskBtn handleClick={() => setAddTask(true)} />;
  }

  // Show loading spinner while fetching categories
  if (categoriesLoading) return <Loading />;

  // Render the TaskForm when addTask is true and categories are loaded
  return (
    <div className="flex justify-center w-full">
      <TaskForm
        categories={categories}
        actionType={"create"}
        handleClick={() => setAddTask(false)}
        setAddTask={setAddTask}
      />
    </div>
  );
}

export default AddTask;
