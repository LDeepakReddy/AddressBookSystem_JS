
// importing another class file to this class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

// ability to add details to ContactDetails class
var contactInfo = new ContactDetails("Deepak","Reddy","Medak","Hyderabad","Telangana","502303","9182510123"
                  ,"deepakreddy@gmail.com");

console.log(contactInfo.toString());


contactInfo.firstName = "Ashok";
contactInfo.lastName = "Kumar";
contactInfo.address = "Khammam";
contactInfo.city = "Hyderabad";
contactInfo.state = "Telangana";
contactInfo.zip = "500048";
contactInfo.phoneNumber = "8179765258";
contactInfo.email = "ashokkumar@gmail.com";
console.log(contactInfo.toString());

//Ability to add user-defined values to the PersonInfoData
contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());