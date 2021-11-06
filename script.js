$(document).ready(onReady);
let employees = [];
function onReady (){
    employeeToTable(employees)
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
