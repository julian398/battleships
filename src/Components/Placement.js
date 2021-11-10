import s from '../Styles/placement.module.css'

const Placement = ({setShipType, setOrientation, cellEnable, setCellEnable}) =>{
    //Variables

    //Functions

    return(
        <div className = {s.main}>
            <div className = {s.ship}>
                Destroyer
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical} onClick = {() => {setShipType(2); setOrientation("vertical"); setCellEnable(true)}}>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal} onClick = {() => {setShipType(2); setOrientation("horizontal")}}>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className = {s.ship}>
                Submarine
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical} onClick = {() => {setShipType(3); setOrientation("vertical")}}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal} onClick = {() => {setShipType(3); setOrientation("horizontal")}}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className = {s.ship}>
                Battleship
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical} onClick = {() => {setShipType(4); setOrientation("vertical")}}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal} onClick = {() => {setShipType(4); setOrientation("horizontal")}}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className = {s.ship}>
                Carrier
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical} onClick = {() => {setShipType(5); setOrientation("vertical")}}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal} onClick = {() => {setShipType(5); setOrientation("horizontal")}}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Placement;