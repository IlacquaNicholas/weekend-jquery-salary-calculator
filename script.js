$(document).ready(onReady);
let employees = [
{fistName: "Nick", lastName:"Ilacqua", id:"1234", title:"Team lead", annualSalary:90000, }
];
function onReady (){
    $('#submitButton').on('click', employeeInfo)

    
}
function employeeInfo(){
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