import { MainContainer } from "./context/MainContainer";
import { TaskProvider } from "./context/TaskContainer";
import { Home } from "./home/Home";

export const App = () => {
  return (
    <MainContainer>
      <TaskProvider>
        <Home></Home>
      </TaskProvider>
    </MainContainer>
  );
};
