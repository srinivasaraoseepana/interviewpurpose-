// import PlayGround from "./PlayGround";
import PlayGround2 from "./playground2";
import { Provider } from "react-redux";
// import { store } from "./project2/redux/store";
import PlayGround3 from "./project2/playGround3";
import { store } from "./kwikpaymultistep/redux/store";
import MultiStepForm from "./project2/playGround3";
import PlayGround from "./PlayGround";
import DebouncePlayGround from "./DebouceAndInterSection/DebouncePlayGround";

const App = () => {
  return (
    <div>
      <PlayGround />
      {/* <DebouncePlayGround /> */}

      {/* <Provider store={store}>
        <PlayGround2 />
      </Provider> */}

      {/* <Provider store={store}>
        <MultiStepForm />
      </Provider> */}
    </div>
  );
};

export default App;
