function daysOfAge() {
  var birthday = prompt("What is your Birth Year ----- my good friend?");
}

function ageInDays() {

  let birthYear = alert("What is your birth year? ... friend");
  var age = (new Date() - birthYear) * 365;
  var h2 = document.createElement("h2");
  var textAnswer = document.createTextNode("You are " + age + "  days old");

  h2.setAttribute("id", "ageInDays");
  h2.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h2);
}
