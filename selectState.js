var stateObject = {
    "Delhi": ["North Delhi","South Delhi","New Delhi"],
    "Kerala": ["Thiruvananthapuram","Palakkad"],
    "Goa": ["North Goa","South Goa","East Goa"],
    "Uttar Pradesh": ["Lucknow","Noida","Ayodhya","Agra","Kanpur","Gorakhpur","Prayagraj"],
    "Maharastra": ["Mumbai","Pune","Gurugram"],
    "Gujrat": ["Ahemadabad","Gandhinagar","Surat"]
}

window.onload = function() {
    let stateBox = document.getElementById("state");
    let cityBox = document.getElementById("city");
    for(var state in stateObject) {
        stateBox.options[stateBox.options.length] = new Option(state,state);
    }

    stateBox.onchange = function() {
        cityBox.length = 1; // remove all options bar first
        if (this.selectedIndex < 1) return; // done

        var cities = stateObject[stateBox.value];
        for (let i = 0; i < cities.length; i++) {
            cityBox.options[cityBox.options.length] = new Option(cities[i], cities[i]);
        }   
    }

    stateBox.onchange(); // reset in case page is reloaded
}
