// business logic
function Contact(
  first,
  last,
  gender,
  birthday,
  father,
  mother,
  acceptancy,
  disabilities
) {
  this.firstName = first;
  this.lastName = last;
  this.gender = gender;
  this.birthday = birthday;
  this.fatherName = father;
  this.motherName = mother;
  this.acceptancy = acceptancy;
  this.disabilities = disabilities;
}
Contact.prototype.fullContact = function() {
  return (
    this.firstName +
    " " +
    this.lastName +
    " " +
    this.gender +
    " " +
    this.birthday +
    " " +
    this.fatherName +
    " " +
    this.motherName +
    " " +
    this.acceptancy +
    " " +
    this.disabilities +
    " " +
    this.addresses
  );
};
// function changeDateFormat() {
//   var received_date = document.getElementById("date-input").value;

//   var split_dashes = received_date.split("-");

//   var final_date =
//     split_dashes[2] + "." + split_dashes[1] + "." + split_dashes[0];

//   document.getElementById("show_date").value = final_date;
// }
// function changeDateFormat() {
//   var received_date = document.getElementById("date-input").value;

//   var split_dashes = received_date.split("-");

//   var final_date =
//     split_dashes[2] + "." + split_dashes[1] + "." + split_dashes[0];

//   document.getElementById("show_date").value = final_date;
// }

// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedGender = $("input#gender").val();
    var inputtedBirthday = $("input#birthday").val();
    var inputtedFatherName = $("input#fatherName").val();
    var inputtedMotherName = $("input#motherName").val();
    var inputtedAcceptancy = $("input#acceptancy").val();
    var inputtedDisabilities = $("input#disabilities").val();
    var inputtedAddresses = $("input#new-addresses").val();
    var newContact = new Contact(
      inputtedFirstName,
      inputtedLastName,
      inputtedGender,
      inputtedBirthday,
      inputtedFatherName,
      inputtedMotherName,
      inputtedAcceptancy,
      inputtedDisabilities,
      inputtedAddresses
    );

    $("ol#contacts").append(
      "<li><span class='contact'>" +
        newContact.firstName +
        " " +
        newContact.lastName +
        " " +
        newContact.gender +
        " " +
        newContact.bithday +
        " " +
        newContact.fatherName +
        " " +
        newContact.motherName +
        " " +
        newContact.acceptancy +
        " " +
        newContact.disabilities +
        " " +
        newContact.addresses +
        "</span></li>"
    );

    $("input#new-first-name").val();
    $("input#new-last-name").val();
    $("input#gender").val();
    $("input#birthday").val();
    $("input#fatheName").val();
    $("input#motherName").val();
    $("input#acceptancy").val();
    $("input#disabilities").val();
    $("input#new-addresses").val();
  });
  $(".contact")
    .last()
    .click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".gender").text(newContact.gender);
      $(".birthday").text(newContact.birthday);
      $(".fatherName").text(newContact.fatherName);
      $(".motherName").text(newContact.motherName);
      $(".acceptancy").text(newContact.acceptancy);
      $(".disabilities").text(newContact.disabilities);
      $(".addresses").text(newContact.addresses);
    });
  $("ul#contacts").append(
    "<li><span class='contact'>" +
      newContact.fullName() +
      " " +
      newContact.gender +
      " " +
      newContact.birthday +
      " " +
      newContact.fatherName +
      +newContact.motherName +
      " " +
      newContact.acceptancy +
      " " +
      newContact.disabilities +
      " " +
      newContact.addresses +
      "</span></li>"
  );
});
