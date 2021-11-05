import s from "../Styles/titleScreen.module.css"
import React from "react";
import ScoreList from "./ScoreList";

const TitleScreen = ({nickName, setNickName, scores, setScores, score, setScore}) =>{
    //variables
    let gamemode1 = true;

    //States

    //Functions
    const vsButtonHan = (e) =>{
        if(!gamemode1){
            gamemode1 = true;
        }
    }

    const ioButtonHan = (e) =>{
        if(gamemode1){
            gamemode1 = false;
        }
    }

    const nickNameChangehan = (e) =>{
        setNickName(e.target.value)
    }

    const playGameHan = (e) => {
        setScores([...scores,{nickName: nickName, score : "1"}])
        setNickName("");
    }

    return(
    <div className = {s.main}>
        <div className = {s.rectangle1}>
            <div className = {s.title}>
                Battleships
            </div>
            <textarea className = {s.nickArea} value={nickName} onChange={nickNameChangehan} cols="1" rows="1" placeholder= "Your nickname"></textarea>
            <div className = {s.modetext}>Mode:</div>
            <button className = {s.buttonmode} onClick = {vsButtonHan}>1v1</button>
            <button className = {s.buttonmode} onClick = {ioButtonHan}>BattleIO</button>
            <button className = {s.buttonplay} onClick = {playGameHan}>Play</button>
        </div>
        <ScoreList nickName={nickName} setNickName={setNickName} scores={scores} setScores={setScores} score={score} setScore={setScore}>LeaderBoard</ScoreList>
    </div>
    )
}

export default TitleScreen;