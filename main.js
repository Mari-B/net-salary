function calculateTaxes() {
    let grossSalary = document.getElementById("gross-salary").value;
    let taxDue = document.getElementById("tax-due");
    let niDue = document.getElementById("NI-due").value;
    let netPay = document.getElementById("net-pay").value;

    if(grossSalary <= 15000) {
        document.getElementById("tax-due").innerHTML = "0"
        document.getElementById("NI-due").innerHTML = "0"
        document.getElementById("net-pay").innerHTML = grossSalary
    }
    else if(grossSalary > 15000 && grossSalary <= 50000) {
        tax = ((grossSalary - 15000)/100) * 20
        ni = ((grossSalary - 15000)/100) * 12
        document.getElementById("tax-due").innerHTML = tax
        document.getElementById("NI-due").innerHTML = ni
        document.getElementById("net-pay").innerHTML = grossSalary - tax - ni
    }
    else {
        tax = ((grossSalary - 15000)/100) * 20
        ni = ((grossSalary - 15000)/100) * 12
        document.getElementById("tax-due").innerHTML = tax
        document.getElementById("NI-due").innerHTML = ni
        document.getElementById("net-pay").innerHTML = grossSalary - tax - ni
    }

}

document.getElementById("button-addon2").addEventListener("click", calculateTaxes);


