import "./App.css";
import Navbaar from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main2 } from "./Main2";
import { Main3 } from "./Main3";
import { Main4 } from "./Main4";
import { Numbers } from "./Numbers";
import { Industry } from "./Industry";
import { Careers } from "./Careers";

function App() {
  return (
    <>
      <Navbaar />
      <Main2 />
      <Main3 />
      <Main4 />
      <Numbers />
      <Industry />
      {/* <Careers/> */}
    </>
  );
}

export default App;
