import { useFetch } from "../hooks/useFetch";
import TaskCard from "./TaskCard";
import Loading from "./common/Loading";
import Error from "./common/Error";
import { useEffect, useRef, useState } from "react";
import { useTasks } from "../contexts/TasksContext";

function Tasks() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [page, setPage] = useState(1);
  const { tasks, setUrl, tasksLoading, tasksError } = useTasks();
  const scrollPos = useRef(0);

  // Update tasks URL based on selected category and current page
  useEffect(() => {
    const filteredTasks = selectedCategory
      ? `/tasks?category_id=eq.${selectedCategory}&order=created_at.desc&limit=10&offset=${
          (page - 1) * 10
        }`
      : `/tasks?order=created_at.desc&limit=10&offset=${(page - 1) * 10}`;
    setUrl(filteredTasks);
  }, [selectedCategory, page, setUrl]);

  // Fetch categories for the filter dropdown
  const {
    data: categories,
    isLoading: categoriesLoading,
    error: categoriesError,
  } = useFetch("/categories?order=name.asc");

  // Maintain scroll position after pagination
  useEffect(() => {
    window.scrollTo(0, scrollPos.current);
  }, [tasks]);

  // Show loading or error states
  if (tasksLoading || categoriesLoading) return <Loading />;
  if (tasksError || categoriesError) return <Error />;

  // Handle pagination button clicks
  function handlePagination(type) {
    scrollPos.current = window.scrollY; // store current scroll position
    if (type === "previous" && page > 1) setPage((page) => page - 1);
    if (type === "next") setPage((page) => page + 1);
  }

  return (
    <div className="mt-14">
      {/* Category filter dropdown */}
      <select
        name="Filter Categories"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 shadow-sm mb-3"
      >
        <option value="">All Categories</option>
        {categories.map((categ) => (
          <option key={categ.id} value={categ.id}>
            {categ.name}
          </option>
        ))}
      </select>

      {/* List of tasks */}
      <ul role="list">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} categories={categories} />
        ))}
      </ul>

      {/* Pagination controls */}
      <div className="flex justify-center items-center py-5 gap-3">
        <button
          className={`${
            page !== 1 ? "bg-secondary-500" : "bg-secondary-700"
          } text-secondary-100 px-5 py-2 flex justify-between items-center font-nunito font-semibold rounded-sm ${
            page !== 1 && "hover:bg-secondary-600"
          }`}
          onClick={() => handlePagination("previous")}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="text-secondary-50">{page}</span>

        <button
          className="bg-secondary-500 text-secondary-100 px-5 py-2 flex justify-between items-center font-nunito font-semibold rounded-sm hover:bg-secondary-600"
          onClick={() => handlePagination("next")}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Tasks;
