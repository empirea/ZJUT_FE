import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import "./App.css";
import "./css/style.css";

import {backTop} from "@/js/utils";
import {Homepage} from "./components/homepage";
import {NotHomepage} from "./components/routes/NotHomepage";
import {Homepage as EnHomepage} from "./en/components/homepage";
import {NotHomepage as EnNotHomepage} from "./en/components/routes/NotHomepage";

function App() {
  return (
    // <HashRouter>
    //   <Router />
    // </HashRouter>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

function Router() {
  const {pathname} = useLocation();
  backTop();

  React.useEffect(() => {
    if (pathname.includes("/en")) {
      console.log("Welcome to Group of City Science & Social Computing!");
    } else {
      console.log("欢迎来到城市科学与社会计算研究组！");
    }
  }, []);

  React.useEffect(() => {
    const syLeft = document.querySelector<HTMLElement>(".sy-left");
    const syRight = document.querySelector(".sy-right");
    if (syLeft && syRight) {
      syLeft.style.height = syRight.scrollHeight - 50 + "px";
    }
  });

  return (
    <Switch>
      <Route exact path="/en" component={EnHomepage}/>
      <Route path="/en/*" component={EnNotHomepage}/>
      <Route exact path="/" component={Homepage}/>
      <Route path="/*" component={NotHomepage}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default App;
