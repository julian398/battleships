import Score from "./Score";
import s from "../Styles/scoreList.module.css"

const ScoreList = (props) => {
    return(
        <div className = {s.scoreList}>
            <div className = {s.leaderboard}>Leaderboard</div>
            {props.scores.map(score => <Score
            nickName ={score.nickName}
            score={score.score}></Score>)}
        </div>
    )
}

export default ScoreList;