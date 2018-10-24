

interface Icar {
    model:string;
    vendor:string;
    price:number;

    let buttonelement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("getAllButton");
    buttonelement.addEventListener("click",showAllCars)
    function showAllCars():void {
        
        let uri : string = "http://rest-pele-easj-dk.azurewebsites.net/api/Cars"

        axios.get<Icar[]>(uri)
        .then(function(response:AxiosResponse<Icar[]>):void {

            let result : string = "<ol>";
            response.data.array.forEach((car : Icar) => {
               result += "<li>" + car.model + car.vendor + car.price.toString() + "</li>"
            });
            result += "</ol>"
        }
        )
        
    }
}