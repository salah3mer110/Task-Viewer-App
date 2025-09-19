import { FaTasks } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-center items-center text-secondary-100 w-auto gap-9 h-36 pt-9 mb-14">
      <FaTasks className="min-[426px]:text-[5.5rem] text-[2.5rem]" />
      <h1 className="text-[1.2rem]  min-[328px]:text-[1.5rem] min-[384px]:text-[2rem] min-[672px]:text-[3rem] min-[827px]:text-[4rem] min-[1075px]:text-[5.6rem] font-semibold">
        Task Viewer App
      </h1>
    </header>
  );
}

export default Header;
