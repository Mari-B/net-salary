function calculateTaxes() {
    let grossSalary = document.getElementById("gross-salary").value;
    if(grossSalary <= 15000) {
        document.getElementById("demo").innerHTML = "£0"
}}

document.getElementById("button-addon2").addEventListener("click", calculateTaxes);


