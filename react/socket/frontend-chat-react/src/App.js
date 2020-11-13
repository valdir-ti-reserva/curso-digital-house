import Routes from "./Routes";
import UserContext from "./state/User";
import "./Global.css";
function App() {
  return (
    <UserContext>
      <Routes />
    </UserContext>
  );
}

export default App;
