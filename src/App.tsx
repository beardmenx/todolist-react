import "./App.css";
import { TaskType, Todolist } from "./Todolist";

function App() {
  let tasks1 = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "REACT", isDone: false },
  ];

  let tasks2: Array<TaskType> = [
    { id: 1, title: "Terminator", isDone: true },
    { id: 2, title: "XXX", isDone: true },
    { id: 3, title: "Gentelments of Fortune", isDone: false },
  ];

  return (
    <div className="App">
      <Todolist title="What to learn" tasks={tasks1} />
      <Todolist title="Video" tasks={tasks2} />
    </div>
  );
}

export default App;
