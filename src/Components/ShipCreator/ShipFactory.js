const ShipFactory = function ()
{
    this.createShip= function (tipo, coord, orientation, state){
        const ship;
        if(tipo==2){
            ship= new Lancha(coord, orientation, state);
        }else if(tipo==3){
            ship= new Submarino(coord, orientation, state);
        }else if(tipo==4){
            ship= new Fragata(coord, orientation, state);
        }else if(tipo==5){
            ship= new Lancha(coord, orientation, state);
        }else {
            ship= new NullShip();
        }
        return ship;
    }
}
const Lancha= function (coord, orientation, state)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0];
}
const Fragata = function(coord, orientation, state)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0,0,0];
}
const Portaaviones = function(coord, orientation, state)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0,0,0,0];
}
const Submarino= function(coord, orientation, state)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0,0,0,0];
}
const NullShip = function()
{
    this.coords= [[0,0],[0,0]];
    this.orientation= "vertical";
    this.state= [];
}