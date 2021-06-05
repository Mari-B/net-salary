let grossSalary = document.getElementById("gross-salary");

let taxesDue = document.getElementById("taxes-due");

const button = document.querySelector('button');

document.getElementById("button-addon2").addEventListener("click", function() {
    document.getElementById("demo").innerHTML = "Hello World";
  });

function calculateTaxes(grossSalary) {
    if(grossSalary <= 15000) {
        taxesDue = "£0"
        return taxesDue

}}

