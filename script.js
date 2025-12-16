function hitungBMI(berat, tinggi) {
    let tinggiMeter = tinggi / 100;
    return berat / (tinggiMeter * tinggiMeter);
}

function klasifikasiBMI(bmi) {
    if (bmi < 18.5) {
        return "Kurus";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obesitas";
    }
}

function prosesBMI() {
    let berat = document.getElementById("berat").value;
    let tinggi = document.getElementById("tinggi").value;

    let valid = true;
    let data = [berat, tinggi];

    for (let i = 0; i < data.length; i++) {
        if (data[i] === "" || data[i] <= 0) {
            valid = false;
        }
    }

    if (valid === true) {
        let bmi = hitungBMI(berat, tinggi);
        let kategori = klasifikasiBMI(bmi);
        localStorage.setItem(
            "hasilBMI",
            "Nilai BMI: " + bmi.toFixed(2) + " (" + kategori + ")"
        );
        window.location.href = "hasil.html";
    } else {
        alert("Input tidak valid");
    }
}

if (document.getElementById("output")) {
    document.getElementById("output").innerText =
        localStorage.getItem("hasilBMI");
}
