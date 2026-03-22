function runTrafficSystem() {

    // Step 1: Get input values
    let traffic = {
        North: parseInt(document.getElementById("north").value) || 0,
        South: parseInt(document.getElementById("south").value) || 0,
        East:  parseInt(document.getElementById("east").value) || 0,
        West:  parseInt(document.getElementById("west").value) || 0
    };

    // Step 2: Calculate green times
    let baseTime = 10;
    let factor = 2;

    let greenTimes = {};

    for (let dir in traffic) {
        greenTimes[dir] = baseTime + (traffic[dir] * factor);
    }

    // Step 3: Sort directions (highest traffic first)
    let order = Object.keys(greenTimes).sort((a, b) => greenTimes[b] - greenTimes[a]);

    // Step 4: Run signals
    runSignals(order, greenTimes);
}


// 🚦 SIGNAL CONTROL FUNCTION
function runSignals(order, times) {

    let i = 0;

    function nextSignal() {

        if (i >= order.length) {
            document.getElementById("result").innerText = "Cycle Completed ✅";
            return;
        }

        let dir = order[i];

        // Show current active signal
        document.getElementById("result").innerText =
            `${dir} GREEN for ${times[dir]} seconds`;

        // Reset all lights
        document.querySelectorAll(".light").forEach(light => {
            light.classList.remove("active");
        });

        // Turn ON green for current direction
        document.getElementById(dir.toLowerCase() + "-green").classList.add("active");

        // Turn ON red for others
        order.forEach(d => {
            if (d !== dir) {
                document.getElementById(d.toLowerCase() + "-red").classList.add("active");
            }
        });

        // Move to next after delay
        setTimeout(() => {
            i++;
            nextSignal();
        }, 2000); // demo speed (you can increase)
    }

    nextSignal();
}