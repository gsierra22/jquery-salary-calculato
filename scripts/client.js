$ (document).ready(onReady);

let employees = []
let monthSum= []
function onReady(){
  $('#submit').on('click', employeeChart)
  $('#submit').on('click', calc)
  $('#body').on('click', '.delete', deleteButton)
}


function employeeChart(){
  let emChart= {
    fName: $('#fname').val(),
    lName: $('#lname').val(),
    idNum: $('#idnum').val(),
    title: $('#title').val(),
    anSal: $('#ansal').val()
  }
    employees.push(emChart);
    let el =$('#body');
    el.append(
        `<tr class=blue>
        <td>${emChart.fName}
        </td>
        <td>${emChart.lName}
        </td>
        <td>${emChart.idNum}
        </td>
        <td>${emChart.title}
        </td>
        <td>${emChart.anSal}
        </td>
        <td><button class=delete>Delete</button></td>
        </tr>
        `
    )
  $('#fname').val(''),
  $('#lname').val(''),
  $('#idnum').val(''),
  $('#title').val(''),
    $('#ansal').val('')
}

function deleteButton (){
  $(this).closest("tr").remove();
}

function calc(){
  let sum=0
  for (let i=0; i<employees.length; i++){
    sum += Number(employees[i].anSal)
    console.log(sum)
  }
  let monthlySum=(sum/12)
  let calculator= $('#div3')
  $("#div3").css('background-color','yellow')
  calculator.empty()
  calculator.append(`<p>Total Monthly Salary:${monthlySum}</p>`)

  if (monthlySum > 20000){
    $("#div3").css('background-color','red')
  }
}

