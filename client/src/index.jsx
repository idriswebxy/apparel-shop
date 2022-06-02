import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./App.css"
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil"

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById("root")
)
