import HookUseReducer from "../components/HookUseReducer";
import HookUseState from "../components/HookUseState";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
    </div>
  );
};

export default Home;
