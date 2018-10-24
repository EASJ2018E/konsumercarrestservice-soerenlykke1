import axios, {
    AxiosResponse,
    AxiosError} from "../../node_modules/axios/index";

   // http://rest-pele-easj-dk.azurewebsites.net/api/Cars


interface Icar {
    model:string;
    vendor:string;
    price:number;
}
 
    let divElement : HTMLDivElement = <HTMLDivElement> document.getElementById("content")
    let buttonelement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
    buttonelement.addEventListener("click",showAllCars)
    function showAllCars():void {
        
        let uri : string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars"

        axios.get<Icar[]>(uri)
        .then(function(response:AxiosResponse<Icar[]>):void {

            let result : string = "<ol>";
            response.data.forEach((car : Icar) => {
               result += "<li>" + "<b>Car Model:</b> " + car.model + " <b>Car vendor:</b> " + car.vendor + " <b>Car price:</b> " + car.price.toString() + " " + "</li>"
            });
            result += "</ol>"

            divElement.innerHTML = result;
        }
        )
        .catch(function(error:AxiosError):void{
            
                divElement.innerHTML= error.message;
        })
    }
