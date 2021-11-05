import { useState } from "react"

const GameBoard = () =>{

    //State
    /*
    For this this multidimensional array we define the following standard:
    0 - Represents a space with water
    1 - Represents a space with a player ship
    2 - Represents a space with an enemy ship

    */
    const [userBoard, setUserBoard] = useState([
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0]
        ])

    return(
        <div>

        </div>
    )
}