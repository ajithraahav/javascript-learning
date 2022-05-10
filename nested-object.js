var myStorage = {
    "car":{
        "inside":{
            "glovebox": "maps",
            "passenger seat": "crumbs",
        },
        "outside":{
            "trunk":"jack",
        }
    }
};

var gloveboxContent = myStorage.car.inside["glovebox"];

console.log(gloveboxContent);