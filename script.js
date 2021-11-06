$(document).ready(onReady);
let employees = [];
function onReady (){
    employeeToTable(employees)
    renderTotalMonthlyCast(employees)
    $('#submitButton').on('click', employeeInfo)  
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
    renderTotalMonthlyCast(employees)
   

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
        
    </tr>
    `;
$('#employeeTableBody').append(newTableRow);
 }

}
function renderTotalMonthlyCast(salarToSum){
    let totalMonlthy = calculateMonthlyCost(salarToSum)
    $('#totalMonthlyCost').text(totalMonlthy)
}

function calculateMonthlyCost (sumOfCost){
 let sum = 0;
    for (let salary of sumOfCost){
      sum += salary.annualSalary / 12; 
    
    
 }
return sum
    
}

