import s from "../Styles/titleScreen.module.css"
import React, { useState } from "react";
import ScoreList from "./ScoreList";
import {Link} from "react-router-dom";

const TitleScreen = ({nickName, setNickName, scores, setScores, score, setScore}) =>{
    //Variables
    const [gamemode, setGamemode] = useState("VS")

    //States

    //Functions

    const nickNameChangehan = (e) =>{
        setNickName(e.target.value)
    }

    return(
    <div className = {s.main}>
        <div className = {s.rectangle1}>
            <div className = {s.title}>
                Battleships
            </div>
            <textarea className = {s.nickArea} value={nickName} onChange={nickNameChangehan} cols="1" rows="1" placeholder= "Your nickname"></textarea>
            <div className = {s.modetext}>Mode:</div>
            <button className = {s.buttonmode} onClick = {() => setGamemode("VS")}>1v1</button>
            <button className = {s.buttonmode} onClick = {() => setGamemode("IO")}>BattleIO</button>
            <Link to = {gamemode === "VS" ? `/gameVS` : `/gameIO`} ><button className = {s.buttonplay}>Play</button></Link>
        </div>
        <ScoreList nickName={nickName} setNickName={setNickName} scores={scores} setScores={setScores} score={score} setScore={setScore}>LeaderBoard</ScoreList>
    </div>
    )
}

export default TitleScreen;