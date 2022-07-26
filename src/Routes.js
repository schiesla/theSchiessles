import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
import Wedding from "./pages/Wedding";
import Resume from "./pages/logan/Resume";
import Main from "./pages/main/main";
// import { Crypto } from "./pages/crypto/crypto";

export default function Routes() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Switch>
        <Route exact path="/"><Main /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/wedding"><Wedding /></Route>
        <Route exact path="/logan/resume"> <Resume title="Logan Schiessle" img={process.env.PUBLIC_URL + "/favicon.ico"}/></Route>
        {/* <Route exact path="/logan/crypto"><Crypto /></Route> */}
      </Switch>
    </div>
  );
}