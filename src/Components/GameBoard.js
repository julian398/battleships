import React, {useEffect, useState } from 'react';

import CreateBoard from "../Util/CreateBoard.js";
import Cell from './Cell';

const GameBoard = ({nickName, setNickName, scores, setScores, score, setScore}) => {
    const [grid, setGrid] = useState([]);

    useEffect(() => {
        function freshBoard() {
            const newBoard = CreateBoard(10);
            setGrid(newBoard);
        }
        freshBoard();
    }, []);

    if (!grid.board) {
        return <div>Loading</div>;
    }
    return grid.board.map(singleRow => {
        return (
            <div>
                <div style={{ display: 'flex'}}>
                    {singleRow.map((singleBlock) => {
                        return <Cell details={singleBlock}/>;
                    })}
                </div>
            </div>
        );
    });
};
export default GameBoard;


