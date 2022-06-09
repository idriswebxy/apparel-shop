import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./App.css"
import { RecoilRoot } from "recoil"

ReactDOM.render(
  <React.Fragment>
    <RecoilRoot>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.Fragment>,
  document.getElementById("root")
)
