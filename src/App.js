import './App.css';
import { Switch, Route, Link } from "react-router-dom";
import TitleScreen from './Components/TitleScreen';
import React, {useState} from "react";

function App() {
  //States
  const [nickName, setNickName] = useState("");
  const [scores, setScores] = useState([]);
  const [score, setScore] = useState("")
  return (
    <div>
      <Switch>
        <Route path = "/" exact>
          <TitleScreen nickName={nickName} setNickName={setNickName} scores={scores} setScores={setScores} score={score} setScore={setScore}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
