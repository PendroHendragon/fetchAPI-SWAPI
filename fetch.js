const dataAPI = {
    url: "https://swapi.dev/api/",
    endpoints: {
        planets: "planets/",
        spaceships: "starships/",
        people: "people/"
    },
    getData: function (parameter, id) {
        if (id === undefined) {
            id = "";
        }
        const urlC = this.url + this.endpoints[parameter] + id
        async function getdata(url) {
            const data = await fetch(url, { method: "GET" });
            return data;
        }
        getdata(urlC).then((res) => {
            return res.json();
        }).then((data) => {
            if (id == "") {
                const result = data.results;
                result.map((planets) => {
                    console.log(planets.name);
                });
            } else {
                const result = data;
                console.log(result.name);
            }




        });
    }
}

// async function getData() {
//     const data = await fetch(dataAPI.url + dataAPI.endpoints.planets, { method: "GET" })
//     return data;
// }
// getData().then((res) => {
//     return res.json();
// }).then((data) => {
//     const result = data.results;

//     result.map((planets) => {
//         console.log(planets.name);
//     });
// });;
dataAPI.getData("people", 1);
