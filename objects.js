const vehicle = {
    wheels : 4,
    engine : function () {
        return "vrooooom!";
    }
}; 


const truck = Object.create(vehicle);
truck.doors = 2
console.log(truck)
console.log(truck.wheels);