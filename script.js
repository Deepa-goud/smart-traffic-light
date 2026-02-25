function manageTraffic() {

    let vehicles = document.getElementById("vehicleCount").value;
    vehicles = parseInt(vehicles);

    let greenTime;
    let signalMessage;

    if (vehicles > 50) {
        greenTime = 90;
        signalMessage = "Heavy Traffic Detected 🚗🚗🚗";
    } 
    else if (vehicles > 30) {
        greenTime = 60;
        signalMessage = "Moderate Traffic 🚦";
    } 
    else if (vehicles > 10) {
        greenTime = 40;
        signalMessage = "Normal Traffic ✅";
    } 
    else {
        greenTime = 20;
        signalMessage = "Low Traffic 🟢";
    }

    document.getElementById("signalResult").innerHTML = signalMessage;
    document.getElementById("timeResult").innerHTML =
        "Green Signal Time: " + greenTime + " seconds";
}