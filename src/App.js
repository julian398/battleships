import './App.css';
import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import TitleScreen from './Components/TitleScreen';
import GameBoard from './Components/GameBoard';
import s from './Styles/app.module.css'


function App() {
  //States
  const [nickName, setNickName] = useState("");
  const [scores, setScores] = useState([]);
  const [score, setScore] = useState("")
  return (
    <div>
      <StylesProvider injectFirst>
        <Switch>
          <Route path = "/" exact>
            <TitleScreen nickName={nickName} setNickName={setNickName} scores={scores} setScores={setScores} score={score} setScore={setScore}/>
          </Route>
          <Route path = "/gameVS" >
            <div className = {s.gamebackground}>
              <div className = {s.nickName}>{nickName}</div>
              <div style = {{marginLeft: '27%', marginTop: '10%'}}>
                <GameBoard nickName={nickName} scores={scores} setScores={setScores} score={score} setScore={setScore}></GameBoard>
              </div>
            </div>

          </Route>
        </Switch>
      </StylesProvider>
    </div>
  );
}

export default App;
