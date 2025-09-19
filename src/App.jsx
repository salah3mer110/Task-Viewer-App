import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
function App() {
  return (
    <div className=" bg-primary-800 font-nunito min-h-screen">
      <div className="w-[80%] m-auto ">
        <Header />
        <AddTask />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
