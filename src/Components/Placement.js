import s from '../Styles/placement.module.css'

const Placement = () =>{
    //Variables

    //Functions

    return(
        <div className = {s.main}>
            <div className = {s.ship}>
                Destroyer
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal}>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className = {s.ship}>
                Submarine
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
            <div className = {s.ship}>
                Battleship
                <div className = {s.Container}>
                    <div class="btn-group" className = {s.vertical}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal}>
                        <button></button>
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
                    <div class="btn-group" className = {s.vertical}>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                    <br />
                    <div class="btn-group" className = {s.horizontal}>
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