// business logic
var config = {
	apiKey: 'AIzaSyAJis_y0uZteF8a0xTAK1-1kqEPS4-Tljs',
	authDomain: 'new-born-registration-b5250.firebaseapp.com',
	databaseURL: 'https://new-born-registration-b5250.firebaseio.com',
	projectId: 'new-born-registration-b5250',
	storageBucket: 'new-born-registration-b5250.appspot.com',
	messagingSenderId: '1023480372858'
};
firebase.initializeApp(config);

function Contact(first, last, gender, birthday, father, mother, acceptancy, disabilities, district, sector, cell) {
	this.firstName = first;
	this.lastName = last;
	this.gender = gender;
	this.birthday = birthday;
	this.fatherName = father;
	this.motherName = mother;
	this.acceptancy = acceptancy;
	this.disabilities = disabilities;
	this.district = district;
	this.sector = sector;
	this.cell = cell;
}
Contact.prototype.fullName = function () {
	return (
		this.firstName +
		' ' +
		this.lastName +
		' ' +
		this.gender +
		' ' +
		this.birthday +
		' ' +
		this.fatherName +
		' ' +
		this.motherName +
		' ' +
		this.acceptancy +
		' ' +
		this.disabilities +
		' ' +
		this.district +
		' ' +
		this.sector +
		' ' +
		this.cell
	);
};
// function Address(district, sector, cell) {
//   this.district = district;
//   this.sector = sector;
//   this.cell = cell;
// }
// Address.prototype.fullAddress = function() {
//   return this.district + ", " + this.sector + ", " + this.cell;
// };
$(document).ready(function () {
	$('form#new-contact').submit(function (event) {
		event.preventDefault();
		var inputtedFirstName = $('input#new-first-name').val();
		var inputtedLastName = $('input#new-last-name').val();
		var inputtedGender = $("input[type='radio'][name='gender']:checked").val();
		// var inputtedGender = $("input#gender:CHECKED").val();
		var inputtedBirthday = $('input#birthday').val();
		var inputtedFatherName = $('input#fatherName').val();
		var inputtedMotherName = $('input#motherName').val();
		var inputtedAcceptancy = $("input[type='radio'][name='acceptancy']:checked").val();
		var inputtedDisability = $("input[type='radio'][name='disability']:checked").val();
		var inputtedDistrict = $('input.new-district').val();
		var inputtedSector = $('input.new-sector').val();
		var inputtedCell = $('input.new-cell').val();
		var newContact = new Contact(
			inputtedFirstName,
			inputtedLastName,
			inputtedGender,
			inputtedBirthday,
			inputtedFatherName,
			inputtedMotherName,
			inputtedAcceptancy,
			inputtedDisability,
			inputtedDistrict,
			inputtedSector,
			inputtedCell
		);
		try {
			firebase.database().ref().child('/Info').push(newContact);
			alert('INFANT REGISTRATED');
			$('input#gender').val('');
			$('input#birthday').val('');
			$('input#fatherName').val('');
			$('input#motherName').val('');
			$('input#acceptancy').val('');
			$('input#disability').val('');
			$('input#district').val('');
			$('input#sector').val('');
			$('input#cell').val('');
		} catch (err) {
			console.log(err);
		}
		// console.log(newContact.fullName());

		$('#contacts').append(
			"<tr><td class='contact'>" +
			newContact.firstName +
			'</td>' +
			"<td class='contact'>" +
			newContact.lastName +
			'</td>' +
			"<td class='contact'>" +
			newContact.gender +
			"<td class='contact'>" +
			newContact.birthday +
			"<td class='contact'>" +
			newContact.motherName +
			"<td class='contact'>" +
			newContact.fatherName +
			"<td class='contact'>" +
			newContact.acceptancy +
			"<td class='contact'>" +
			newContact.disability +
			"<td class='contact'>" +
			newContact.district +
			"<td class='contact'>" +
			newContact.sector +
			"<td class='contact'>" +
			newContact.cell +
			'</td></tr>'
		);

		// $('ol#addresses').text('');
		// newContact.addresses.forEach(function (address) {
		// 	$('ol#addresses').append('<li>' + address.distrcit + ', ' + address.sector + ' ' + address.cell + '</li>');
		// });
		$('.contact').last().click(function () {
			$('#show-contact').show();
			$('#show-contact h2').text(newContact.fullName());
			$('.first-name').text(newContact.firstName);
			$('.last-name').text(newContact.lastName);
			$('.gender').text(newContact.gender);
			$('.birthday').text(newContact.birthday);
			$('.fatherName').text(newContact.fatherName);
			$('.motherName').text(newContact.motherName);
			$('.acceptancy').text(newContact.acceptancy);
			$('.disabilities').text(newContact.disability);
			$('ol#addresses').text('');
			newContact.addresses.forEach(function (address) {
				$('ol#addresses').append(
					'<li>' + address.district + ', ' + address.sector + ' ' + address.cell + '</li>'
				);
			});
		});
	});
	var leadsRef = firebase.database().ref('Info');
	leadsRef.on('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			var childData = childSnapshot.val();
			console.log(childData)
			$('#contacts').append(
				"<tr><td class='contact'>" +
				childData.firstName +
				'</td>' +
				"<td class='contact'>" +
				childData.lastName +
				'</td>' +
				"<td class='contact'>" +
				childData.gender +
				"<td class='contact'>" +
				childData.birthday +
				"<td class='contact'>" +
				childData.motherName +
				"<td class='contact'>" +
				childData.fatherName +
				"<td class='contact'>" +
				childData.acceptancy +
				"<td class='contact'>" +
				childData.disability +
				"<td class='contact'>" +
				childData.district +
				"<td class='contact'>" +
				childData.sector +
				"<td class='contact'>" +
				childData.cell +
				'</td></tr>'
			);

		});
	});
	$('#submit').click(function () {
		$('#form').toggle();
		$('#information').show();
	});
	$('#submit').click(function () {
		$('#information').toggle();
		$('#form').show();
	});
});