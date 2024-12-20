import "./App.css";
import ButtonEvent from "./components/eventHandling/ButtonEvent";
import NameForm from "./components/eventHandling/NameForm";
import Greeting from "./components/props/Greeting";
import Counter from "./components/state/Counter";
import UserProfile from "./components/state/UserProfile";

function App() {
  return (
    <>
      <Greeting name="Dineshkumar" age={45} />
      <Counter initialValue={0} />
      <UserProfile />
      <NameForm />
      <ButtonEvent />
    </>
  );
}

export default App;
