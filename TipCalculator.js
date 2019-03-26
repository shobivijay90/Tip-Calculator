function calculate()
{
  var billTotal = Number(document.getElementById("bill_total").value);
  
  var persons = document.getElementById("persons").value;
  
  var tips = document.getElementById("tip").value;
  
  var tipAmount = (billTotal * tips)/100;

  
  document.getElementById("tipamount").innerHTML = " $ " + tipAmount;
  
  var totalWithTip = billTotal + tipAmount;
  
  document.getElementById("totalwithtip").innerHTML = " $ " + totalWithTip;
  
  var each_person_pays = totalWithTip / persons;
  
  document.getElementById("eachpersonpays").innerHTML = " $ " +each_person_pays;
  
}

function reset(){
  document.getElementById("bill_total").value = 0;
  document.getElementById("persons").value = 0;
  document.getElementById("tip").value = 0;
  document.getElementById("tipamount").innerHTML = 0;
  document.getElementById("totalwithtip").innerHTML = 0;
  document.getElementById("eachpersonpays").innerHTML = 0;
}