export class Alumno{
    Id : number = 0;
    Nombre : string = "";
    Apellido : string = "";
    Email : string = "";
    FNacimiento : Date = new Date();

    constructor(Id:number, Apellido:string, Nombre:string, Email:string, FNacimiento:Date){
        this.Id = Id;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Email = Email;
        this.FNacimiento = FNacimiento
    }
}