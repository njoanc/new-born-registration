//Business Logic: Contact and Address Constructots
function Contact(
  first,
  last,
  gender,
  birth,
  father,
  mother,
  acceptancy,
  disabilities
) {
  this.firstName = first;
  this.lastName = last;
  this.gender = gender;
  this.birthDay = birth;
  this.fatherName = father;
  this.motherName = mother;
  this.childAcceptancy = acceptancy;
  this.disabilities = disabilities;
  this.addresses = addresses;
}
// business logic
function Contact(first, last, name, city, state, country, adress) {
  this.firstName = first;
  this.lastName = last;
  this.nameFather = father;
  this.nameMather = mather;
  this.city = city;
  this.state = state;
  this.country = country;
  this.address = address;
}

// user interface logic
$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtednameFather = $("input#new-name-father").val();
    var inputtednameMather = $("input#new-name-mather").val();
    var inputtedcity = $("input#new-city").val();
    var inputtedstate = $("input#new-state").val();
    var inputtedcountry = $("input#new-country").val();
    var inputtedadress = $("input#new-adress").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  });
});

$(".contact").last().click(function () {
  $("#show-contact").show();
  $("#show-contact h2").text(newContact.firstName);
  $(".first-name").text(newContact.firstName);
  $(".last-name").text(newContact.lastName);
});

