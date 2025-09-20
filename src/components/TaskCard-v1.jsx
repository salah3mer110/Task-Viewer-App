import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { usePatch } from "../hooks/usePatch";
import { useDelete } from "../hooks/useDelete";
import { useTasks } from "../contexts/TasksContext";
import TaskForm from "./TaskForm";

function TaskCard({ task, categories }) {
  const { id, title, image_url, priority, category_id, completed } = task;

  const [editBtn, setEditBtn] = useState(false);
  // Get category info for this task
  const { name, icon_url, image_filter, color } = categories.find(
    (category) => category.id === category_id
  );

  // Local state for task completion
  const [isDone, setIsDone] = useState(completed ?? false);

  // Hooks for patch and delete actions
  const { patchTasks } = usePatch();
  const { deleteTask } = useDelete();
  const { reloadTasks } = useTasks();

  // Handle task completion toggle
  async function handleTaskStatus(status) {
    await patchTasks(id, { completed: status });
  }

  // Handle task deletion
  async function handleTaskDelete(id) {
    await deleteTask(id);
    reloadTasks(); // reload tasks after deletion
  }

  return (
    <li className="relative border-2 border-primary-800 bg-secondary-100 rounded-md font-nunito flex flex-col">
      {/* Delete button */}
      <MdDelete
        onClick={() => handleTaskDelete(id)}
        className="absolute right-2 top-2 text-red-700 text-2xl cursor-pointer hover:text-red-800"
      />

      {/* Top content: Image, title, priority, category */}
      <div className="flex items-center gap-4 p-4">
        <img
          src={image_url}
          alt={title}
          className={`w-20 h-20 rounded-full object-cover filter ${image_filter}`}
        />
        <div className="flex-1">
          <p className="font-semibold text-secondary-900">{title}</p>

          {/* Priority & category labels */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span
              className={`py-1 px-4 rounded-2xl text-secondary-50 ${
                priority === "high"
                  ? "bg-red-500"
                  : priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              }`}
            >
              Priority: {priority}
            </span>

            <span
              className="py-1 px-4 rounded-2xl text-secondary-50 flex items-center gap-2"
              style={{ backgroundColor: color }}
            >
              <img className="w-5" src={icon_url} alt="" />
              <em>{name}</em>
            </span>

            {isDone && (
              <span className="py-1 px-4 rounded-2xl text-secondary-50 flex items-center gap-2 bg-green-500">
                <em>Done ✅</em>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Bottom bar: Edit & Done */}
      <div className="flex justify-between items-center bg-secondary-200 px-4 py-2 rounded-b-md gap-2">
        <button
          className="flex items-center gap-2 text-primary-900 hover:text-primary-700"
          onClick={() => setEditBtn(true)}
        >
          <FiEdit />
          <span>Edit</span>
        </button>

        <label className="flex items-center gap-2 bg-green-600 text-secondary-100 hover:bg-green-500 px-3 py-1 rounded cursor-pointer">
          <input
            type="checkbox"
            checked={isDone}
            onChange={async (e) => {
              setIsDone(e.target.checked);
              await handleTaskStatus(e.target.checked);
            }}
            className="w-4 h-4 accent-green-400"
          />
          <span>Done</span>
        </label>
      </div>
      {editBtn && (
        <TaskForm
          categories={categories}
          actionType={"edit"}
          taskId={id}
          setEditBtn={setEditBtn}
          handleClick={() => setEditBtn(false)}
          required={false}
        />
      )}
    </li>
  );
}

export default TaskCard;
