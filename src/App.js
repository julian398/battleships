import './App.css';
import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";
import TitleScreen from './Components/TitleScreen';
import GameBoard from './Components/GameBoard';
import Placement from './Components/Placement'
import s from './Styles/app.module.css'


function App() {
  //States
  const [nickName, setNickName] = useState("");
  const [scores, setScores] = useState([]);
  const [score, setScore] = useState("")
  const [shipType, setShipType] = useState()
  const [orientation, setOrientation] = useState("")
  const [cellEnable, setCellEnable] = useState(false)

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
              <div style = {{marginLeft: '27%', marginTop: '5%'}}>
                <GameBoard nickName={nickName} score={score} setScore={setScore} setShipType = {setShipType} setOrientation = {setOrientation} shipType = {shipType} orientation = {orientation}></GameBoard>
              </div>
              <Placement setShipType = {setShipType} setOrientation = {setOrientation} cellEnable = {cellEnable} setCellEnable = {setCellEnable}></Placement>
            </div>
          </Route>
        </Switch>
      </StylesProvider>
    </div>
  );
}

export default App;
