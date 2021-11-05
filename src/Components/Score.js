import s from "../Styles/score.module.css"

const Score = ({score, nickName}) =>{
    return(
        <div className = {s.rectangle}>
            <div className = {s.nick}>{nickName}</div>
            <div className = {s.score}>{score}</div>
        </div>
    )

}

export default Score;