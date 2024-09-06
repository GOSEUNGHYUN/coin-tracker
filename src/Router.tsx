import { BrowserRouter, Route, Switch } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface Itoggle {
  toggleFn: () => void;
}

function Router({ toggleFn }: Itoggle) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins toggleFn={toggleFn} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
