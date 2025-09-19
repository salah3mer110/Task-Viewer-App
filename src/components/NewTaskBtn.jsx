import { IoMdAdd } from "react-icons/io";

function NewTaskBtn({ handleClick }) {
  return (
    <div className="pt-12 flex justify-end">
      <button
        onClick={handleClick}
        className="bg-fourth-600 text-secondary-100 px-5 py-2 flex justify-between items-center font-nunito font-semibold rounded-sm hover:bg-third-500"
      >
        <em className="mr-2">New Task</em>
        <IoMdAdd />
      </button>
    </div>
  );
}

export default NewTaskBtn;
