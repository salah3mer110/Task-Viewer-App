import { useState } from "react";
import { useCreate } from "../hooks/useCreate";
import TextInput from "./common/textInput";
import { IoIosClose } from "react-icons/io";
import { useTasks } from "../contexts/TasksContext";
import { usePatch } from "../hooks/usePatch";

function TaskForm({
  categories,
  handleClick, // Close form handler
  actionType, // "create" or "edit"
  taskId = "", // Used for editing
  setAddTask,
  setEditBtn,
  required,
}) {
  // Local state for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("low");
  const [categoryId, setCategoryId] = useState("1");

  const { createTask } = useCreate();
  const { reloadTasks } = useTasks();
  const { patchTasks } = usePatch();

  // Handle form submission for create/edit
  async function handleSubmit(e) {
    e.preventDefault();

    if (actionType === "create") {
      await createTask({
        title,
        description: description || null,
        priority: priority || null,
        category_id: +categoryId,
        due_date: dueDate || null,
        ...(imageUrl && { image_url: imageUrl }),
      });
      setAddTask(false);
    }

    if (actionType === "edit") {
      await patchTasks(taskId, {
        title: title || undefined,
        description: description || undefined,
        priority: priority || undefined,
        category_id: +categoryId || undefined,
        due_date: dueDate || undefined,
        image_url: imageUrl || undefined,
      });
      setEditBtn(false);
    }

    reloadTasks(); // Refresh tasks after create/edit

    // Reset form fields
    setTitle("");
    setDescription("");
    setImageUrl("");
    setDueDate("");
    setPriority("");
    setCategoryId("");
  }

  return (
    <form
      className="relative w-full flex flex-col items-center gap-5 bg-primary-700 py-5 rounded-md px-4 sm:px-8"
      onSubmit={handleSubmit}
    >
      {/* Close form button */}
      <IoIosClose
        className="absolute right-1 top-1 text-3xl text-secondary-300 hover:text-secondary-50 cursor-pointer"
        onClick={handleClick}
      />

      {/* Top input fields */}
      <div className="flex justify-between items-center w-[80%] flex-col lg:flex-row">
        <TextInput
          title={"Title"}
          placeholder={"Enter Task Title"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required={required}
        />
        <TextInput
          title={"Description"}
          placeholder={"Enter Task Description"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextInput
          title={"Image URL"}
          placeholder={"Enter image task URL"}
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {/* Due date input */}
        <label className="flex flex-col lg:w-[calc(85%/4)] w-full pb-4">
          <span className="mb-1 font-medium text-secondary-100">Due Date</span>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-4 py-2 shadow-sm"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required={required}
          />
        </label>
      </div>

      {/* Bottom inputs: Priority, Category, and Submit button */}
      <div className="w-[80%]">
        <div className="flex justify-between items-center w-full h-auto">
          <div className="flex justify-between w-full flex-col lg:flex-row lg:w-1/2 lg:gap-7">
            {/* Priority select */}
            <label className="flex flex-col pb-4 w-full">
              <span className="mb-1 font-medium text-secondary-100">
                Priority
              </span>
              <select
                name="priority"
                className="border border-gray-300 rounded-md px-4 py-2 shadow-sm"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </label>

            {/* Category select */}
            <label className="flex flex-col pb-4 w-full">
              <span className="mb-1 font-medium text-secondary-100">
                Category
              </span>
              <select
                name="Filter Categories"
                className="border border-gray-300 rounded-md px-4 py-2 shadow-sm"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
              >
                {categories.map((categ) => (
                  <option key={categ.id} value={categ.id}>
                    {categ.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        {/* Submit button */}
        <button
          type="submit"
          className="bg-green-500 w-full text-lg mt-6 text-secondary-50 font-semibold px-9 py-2 rounded-lg h-fit hover:bg-green-600 lg:w-fit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
