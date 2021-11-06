$(document).ready(onReady);
let employees = [];
function onReady (){
    employeeToTable(employees)
    $('#submitButton').on('click', employeeInfo)

    
}
function employeeInfo(){
    employeeToTable(employees)
    let firstName = $('#firstName').val();
    let lastName = $('#lastName').val();
    let id = $('#idNumber').val();
    let title = $('#titleName').val();
    let salary = $('#annualSalary').val();//Having trouble with having a number come up. 
    
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

}

function employeeToTable (addToTable){//Need help on this part I keep getting undefined
 for (let employee of addToTable){
    let newTableRow = `
    <tr>
        <td>${employees.firstName}</td>
        <td>${employees.lastName}</td>
        <td>${employees.id}</td>
        <td>${employees.title}</td>
        <td>${employees.salary}</td>
    </tr>
    `;
$('#employeeTableBody').append(newTableRow);
}

}