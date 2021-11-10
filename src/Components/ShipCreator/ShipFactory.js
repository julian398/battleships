const ShipFactory = function ()
{
    this.createShip= function (tipo, coord, orientation){
        const ship;
        if(tipo==2){
            ship= new Lancha(coord, orientation);
        }else if(tipo==3){
            ship= new Submarino(coord, orientation);
        }else if(tipo==4){
            ship= new Fragata(coord, orientation);
        }else if(tipo==5){
            ship= new Lancha(coord, orientation);
        }else {
            ship= new NullShip();
        }
        return ship;
    }
}
const Lancha= function (coord, orientation)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0];
}
const Fragata = function(coord, orientation)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0,0,0];
}
const Portaaviones = function(coord, orientation)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0,0,0,0];
}
const Submarino= function(coord, orientation)
{
    this.coords= coord;
    this.orientation = orientation;
    this.state = [0,0,0];
}
const NullShip = function()
{
    this.coords= [[0,0],[0,0]];
    this.orientation= "vertical";
    this.state= [];
}