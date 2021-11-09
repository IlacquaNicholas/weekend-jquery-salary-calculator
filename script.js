$(document).ready(onReady);
let employees = [];
function onReady (){
    employeeToTable(employees)
    renderTotalMonthlyCost(employees)
    $('#submitButton').on('click', employeeInfo) 
    $('#employeeTableBody').on('click','.deleteButton', handleDeleteButton);
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
//Added this after the assignment
function handleDeleteButton (){
$(this).closest('tr').remove();
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
        <td><button class="deleteButton">Delete</button></td>
    </tr>

    `;
$('#employeeTableBody').append(newTableRow);
  }
    handleDeleteButton(employees)
}

function renderTotalMonthlyCost(salaryToSum){
    let totalMonthly = calculateMonthlyCost(salaryToSum)
    $('#totalMonthly').text(totalMonthly)
}

function calculateMonthlyCost (sumOfCost){
 let salaryTotal = 0;
 let salaryMonthly = 0;
    for (let salary of sumOfCost){
        salaryTotal += salary.annualSalary;
      }
    salaryMonthly = (salaryTotal/12).toFixed(2);
    $('#totalMonthly').text(`Total Monthly: ${salaryMonthly}`)
    if (salaryMonthly > 20000) {
        $('.red').css('background-color', 'red');
    }
}