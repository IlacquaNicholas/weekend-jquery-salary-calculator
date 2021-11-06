$(document).ready(onReady);
let employees = [];
function onReady (){
    employeeToTable(employees)
    renderTotalMonthlyCost(employees)
    $('#submitButton').on('click', employeeInfo) 
    //Not sure if I will need this button click here (might be for the strech goal)
    // $('#deletButton').on('click', employeeToTable )
}
function employeeInfo(){
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#idNumber').val();
    let title = $('#titleName').val();
    let salary = $('#annualSalary').val();

    
    let newEmployee = {
        firstName:firstName, 
        lastName:lastName, 
        id:id, 
        title:title,
        annualSalary:Number(salary),
    };
    employees.push(newEmployee);

    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#titleName').val('');
    $('#annualSalary').val('');
    employeeToTable(employees)
    renderTotalMonthlyCost(employees)
   

}

function employeeToTable (addToTable){
    $('#employeeTableBody').empty()
 
  for (let employee of addToTable){
    let newTableRow = `
    <tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button>Delete</button></td>
    </tr>
    `;
$('#employeeTableBody').append(newTableRow);
 }

}
function renderTotalMonthlyCost(salaryToSum){
    let totalMonlthy = calculateMonthlyCost(salaryToSum)
    $('#totalMonthlyCost').text(totalMonlthy)
}

function calculateMonthlyCost (sumOfCost){
 let sum = 0;
    for (let salary of sumOfCost){
      sum += salary.annualSalary / 12; 
      if (sum > 20000) {
     $('h3').css('background-color', 'red');
      }
 }
return sum
    
}

