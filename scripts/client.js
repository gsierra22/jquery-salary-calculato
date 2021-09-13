$ (document).ready(onReady);

let employees = []//input array

function onReady(){
  $('#submit').on('click', employeeChart)//input array
  $('#submit').on('click', calc)//salary calculator
  $('#body').on('click', '.delete', deleteButton)//delete button
}


function employeeChart(){
  let emChart= {
    fName: $('#fname').val(),
    lName: $('#lname').val(),
    idNum: $('#idnum').val(),
    title: $('#title').val(),
    anSal: $('#ansal').val()
  }//end object

  let blankety = false
  for (const hallo in emChart){
    if(!emChart[hallo]){
      blankety=true
    }//end if
  }// end for
  if (blankety ===true){
    alert('Please enter missing information')
  }// end if
  else if(blankety===false){
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
        <td class="salad">${emChart.anSal}
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
  } //end else if
}// end function

function deleteButton (){
  $(this).closest("tr").remove();
} //end function

function calc(){
  let sum=0
  for (let i=0; i<employees.length; i++){
    sum += Number(employees[i].anSal)
    console.log(sum)
  }// end for loop
  let monthlySum=(sum/12)
  let calculator= $('#div3')
  $("#div3").css('background-color','yellow')
  calculator.empty()
  calculator.append(`<p>Total Monthly Salary:${monthlySum}</p>`)

  if (monthlySum >= 20000){
    $("#div3").css('background-color','red')
  }// end if
}// end function

