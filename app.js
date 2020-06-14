//                                            CHAPTER - 2

// 1. Declare a variable called username.

var username;

// 2. Declare a variable called myName & assign to it a string
// that represents your Full Name.
  
var myname = "ZIYAD BAIG";

// 3. Write script to
// a) Declare a JS variable, titled message.
// b) Assign “Hello World” to variable message
// c) Display the message in alert box.

var message;
message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and
// show the data in alert boxes.

var student_name = "Jhone Doe";
alert(student_name);
var student_age = "15";
alert(student_age + " years old");
var student_course = "Certified Mobile Application Development";
alert(student_course);

// 5. Write a script to display the following alert using one JS
// variable:

var pizza = "PIZZA" + ("\n") + "PIZZ" + ("\n") + "PIZ" + ("\n") + "PI" + ("\n") + "P";
alert(pizza);

// 6. Declare a variable called email and assign to it a string that
// represents your Email Address(e.g. example@example.com).
// Show the below mentioned message in an alert box.(Hint: use
// string concatenation)

var email = "example@example.com";
alert("My email address is " + email);

// 7. Declare a variable called book & give it the value “A
// smarter way to learn JavaScript”. Display the following
// message in an alert box:

var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);

// 8. Write a script to display this in browser through JS

document.write("Yah! I can write HTML content through JavaScript" + "<br>" + "<hr>");

// 9. Store following string in a variable and show in alert and
// browser through JS

var template = ' ▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ ';
alert(template);


//                                            CHAPTER - 3


// 1. Declare a variable called age & assign to it your age. Show
// your age in an alert box.

var age = 15;
alert("I am " + age + " Years old");

// 2. Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var no_of_visits = 14;
alert("You have visited this site " + no_of_visits + " times");

// 3. Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthYear = 2000;
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number" + "<br>" + "<hr>");

// 4. A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitor_name = "John Doe";
var product_title = "T-shirt";
var quantity = 5;
document.write("<b>" + visitor_name + "</b>" + " ordered " + "<b>" + quantity + " " + product_title + "</b>" + "(s)" + " on XYZ Clothing store" + "<br>" + "<hr>");


//                                            CHAPTER - 4


// 1. Declare 3 variables in one statement.

// var a, b, c;

// 2. Declare 5 legal & 5 illegal variable names.

//      LEGAL VARIABLES

// var a;         
// var A;
// var name123;
// var first_name;
// var lastName;

//      ILLEGAL VARIABLES

// var 5;
// var 123name;
// var ?b;
// var my name;
// var "age";

// 3. Display this in your browser
// a) A heading stating “Rules for naming JS variables”
// b) Variable names can only contain ______, ______,
// ______ and ______.
// For example $my_1stVariable
// c) Variables must begin with a ______, ______ or
// _____. For example $name, _name or name
// d) Variable names are case _________
// e) Variable names should not be JS _________

document.write("<h3>" + "<b>" + "Rules for naming JS variables" + "</b>" + "</h3>" + "<br>" +
 "Variable names can only contain , numbers, $ and __. For example: $my_1st variable" + "<br>" +
 "Variables must begin with a letter, $ or __. For example : $name, _name or name" + "<br>" +
 "Variable names are case sensitive" + "<br>" + 
 "Variable names should not be JS keywords" + "<br>" + "<hr>" );


//                                            CHAPTER - 5


// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var a = 10;
var b = 20;
var c = a + b;
document.write("Sum of " + a + " and " + b + " is " + c + "<br>" + "<hr>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.

var x = 10;
var y = 20;
var subtraction = x - y;
var multiplication = x * y;
var division = x / y;
var modulus = x % y;
document.write("Subtration of " + x + " and " + y + " is " + subtraction + "<br>" +
"Multiplication of " + x + " and " + y + " is " + multiplication + "<br>" + 
"Division of " + x + " and " + y + " is " + division + "<br>" + 
"Modulus of " + x + " and " + y + " is " + modulus + "<br>" + "<hr>" );

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

var variable;
document.write("Value after variable declaration is: " + variable + "<br>");
variable = 17;
document.write("Initial value: " + variable + "<br>");
var increment = variable + 1;
document.write("Value after increament is: " + increment + "<br>");
var add_7 = increment + 7;
document.write("Value after addition of 7 is: " + add_7 + "<br>");
var decrement = add_7 - 1;
document.write("Value after decrement is: " + decrement + "<br>");
var remainder = decrement % 3;
document.write("The remainder after division by 3 is: " + remainder + "<br>" + "<hr>");

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:

var ticket_price = 600;
var number_of_ticket = 5;
var total_price = ticket_price * number_of_ticket;
document.write("Total cost to buy " + number_of_ticket + " tickets to a movie is " + total_price + "PKR" + "<br>" + "<hr>");

// 5. Write a script to display multiplication table of any
// number in your browser. E.g

var table_of_number = 17;
var counting = 1;
document.write("TABLE OF " + table_of_number + "<br>");
for(table_of_number = 17; counting <= 10; counting++){
    document.write(table_of_number + " * " + counting + " = " + table_of_number*counting + "<br>");
}

// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NN o C is NN o F”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NN o F is NN o C”.

var temp_in_celsius = 41;
var temp_in_fahrenheit = 105.8;
var fahrenheit_conversion = (temp_in_celsius * 9/5) + 32;
var celsius_conversion = (temp_in_fahrenheit - 32) * 5/9;
document.write("<hr>" + temp_in_celsius + "<sup>" + "o" + "</sup>" + "C is equal to " + fahrenheit_conversion + "<sup>" + "o" + "</sup>" + "F" + "<br>");
document.write(temp_in_fahrenheit + "<sup>" + "o" + "</sup>" + "F is equal to " + celsius_conversion + "<sup>" + "o" + "</sup>" + "C" + "<br>" + "<hr>");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

var cost_item1 = 780;
var cost_item2 = 590;
var quantity_item1 = 4;
var total_cost_item1 = cost_item1 * quantity_item1;
var quantity_item2 = 6;
var total_cost_item2 = cost_item2 * quantity_item2;
var shipping_charges = 100;
var total_price = total_cost_item1 + total_cost_item2 +shipping_charges;
document.write("<h3>" + "<b>" + "SHOPPING CART" + "</b>" + "</h3>" + "<br>" + 
"Price of item 1 is: " + cost_item1 + "<br>" +
"Quantity of item 1 is: " + quantity_item1 + "<br>" +
"Price of item 2 is: " + cost_item2 + "<br>" +
"Quantity of item 2 is: " + quantity_item2 + "<br>" +
"Shipping Charges: " + shipping_charges + "<br>" + 
"Total cost of your order is: " + total_price + "PKR" + "<br>" + "<hr>");

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

var total_marks = 525;
var obtained_marks = 426;
var student_percantage = (obtained_marks / total_marks) * 100;
document.write("<h3>" + "<b>" + "MARK SHEET" + "</b>" + "</h3>" + "<br>" +
"Total marks: " + total_marks + "<br>" +
"Marks obtained: " + obtained_marks + "<br>" +
"Percentage: " + student_percantage + "%" + "<br>" + "<hr>");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

var one_riyal_in_pkr = 28;
var riyal_quantity = 25;
var one_usd_in_pkr = 104.80;
var usd_quantity = 10;
var total_pkr = (one_usd_in_pkr * usd_quantity) + (one_riyal_in_pkr * riyal_quantity);
document.write("<h3>" + "<b>" + "CURRENCY IN PKR" + "</b>" + "</h3>" + "<br>" + 
"Total currency in PKR is: " + total_pkr + "<br>" + "<hr>");

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var initial_number = 20;
var all_calculations = (((initial_number + 5) * 10) / 2);
document.write("Initial Number is: " + initial_number + "<br>" + 
"Result after all calculation is: " + all_calculations + "<br>" + "<hr>" );

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

var current_year = 2020;
var birth_year = 2000;
var estimated_age = current_year - birth_year;
document.write("<h3>" + "<b>" + "AGE CALCULATOR" + "</b>" + "</h3>" + "<br>" + 
"Current year is: " + current_year + "<br>" + 
"Birth year is: " + birth_year + "<br>" +
"Calculated age is: " + estimated_age + "<br>" + "<hr>");

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)

var circle_radius = 30;
var pi = 3.142;
var circle_circumference = (2 * pi * circle_radius);
var circle_area = (pi * (circle_radius * circle_radius));
document.write("<h3>" + "<b>" + "THE GEOMETRIZER" + "</b>" + "</h3>" + "<br>" + 
"Radius of circle is: " + circle_radius + "<br>" + 
"Circumference of circle is: " + circle_circumference + "<br>" +
"Area of circle is: " + circle_area + "<br>" + "<hr>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

var favorite_snack = "slanty";
var my_current_age = 20;
var maximum_age = 70;
var amount_of_snacks_per_day = 2;
var remaining_life = (70-20);
var remaining_days = (remaining_life * 365);
var total_snacks_in_remaining_life = (remaining_days * amount_of_snacks_per_day);
document.write("<h3>" + "<b>" + "THE LIFETIME SUPPLY CALCULATOR" + "</b>" + "</h3>" + "<br>" + 
"Favorite snack is: " + favorite_snack + "<br>" + 
"Current age is: " + my_current_age + "<br>" +
"Estimated maximum age is: " + maximum_age + "<br>" +
"Amount of snacks per day is: " + amount_of_snacks_per_day + "<br>" +
"You will need " + total_snacks_in_remaining_life + " " + favorite_snack + " to last you until the ripe old age of " + maximum_age + "<br>" + "<hr>");


//                                            CHAPTER - 6 TO 9 


// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

var a = 15;
var pre_increament = ++a;
var post_increament = a + 1;
var pre_decrement = --a;
var post_decrement = a - 1;
document.write("Result" + "<br>" + "The value of a is: " + a + "<br>" +
 "............................................" + "<br>" +
 "The value of ++a is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + pre_increament + "<br>" + "<br>" +
 "The value of a++ is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + post_increament + "<br>" + "<br>" + 
 "The value of --a is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + pre_increament + "<br>" + "<br>" + 
 "The value of a-- is: " + pre_increament + "<br>" + 
 "Now the value of a is: " + a + "<br>" + "<hr>" );

//2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("a is: 1" + "<br>" + 
"b is: 1" + "<br>" + 
"result is: 1" + "<br>" + "<br>" + 
"a is: 0" + "<br>" + 
"b is: 0" + "<br>" + 
"result is: 0" + "<br>" + "<br>" + 
"a is: -1" + "<br>" + 
"b is: 0" + "<br>" + 
"result is: 0" + "<br>" + "<br>" +
"a is: -2" + "<br>" + 
"b is: 0" + "<br>" + 
"result is: 0" + "<br>" + "<hr>" );

// 3. Write a program that takes input a name from user &
// greet the user.

var user_name = prompt("Enter your name: ");
document.write("Assalam o Alaikum " + user_name + " !!!" + "<br>" + "<hr>" );

// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

var new_user_input_number = +prompt("Enter a new number", "Do Not Enter Number '5' ");
var counter = 1;
if(new_user_input_number !== " "){
    document.write("User has entered a new number " + "<br>")
    for(new_user_input_number; counter <= 10; counter++){
        document.write(new_user_input_number + " * " + counter + " = " + new_user_input_number * counter + "<br>");
    }
}
else{
    document.write("User has not entered any new number " + "<br>")
    for(var five = 5; counter <= 10; counter++){
        document.write(five + " * " + counter + " = " + five * counter + "<br>");
    }
}
document.write("<br>" + "<hr>");

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var subject_1 = prompt("ENTER ANY SUBJECT NAME");
var subject_2 = prompt("ENTER ANY SUBJECT NAME");
var subject_3 = prompt("ENTER ANY SUBJECT NAME");
var total_marks_for_each_subject = 100;
var obtained_marks_for_each_subject_1 = +prompt("Enter " + subject_1 + " Number");
var obtained_marks_for_each_subject_2 = +prompt("Enter " + subject_2 + " Number");
var obtained_marks_for_each_subject_3 = +prompt("Enter " + subject_3 + " Number");
var percentage_1 = (obtained_marks_for_each_subject_1 / total_marks_for_each_subject) * 100;
var percentage_2 = (obtained_marks_for_each_subject_2 / total_marks_for_each_subject) * 100;
var percentage_3 = (obtained_marks_for_each_subject_3 / total_marks_for_each_subject) * 100;
var total_marks_of_3_subjects = (total_marks_for_each_subject + total_marks_for_each_subject + total_marks_for_each_subject);
var total_obtained_marks = (obtained_marks_for_each_subject_1 + obtained_marks_for_each_subject_2 + obtained_marks_for_each_subject_3);
var total_percentage = ((total_obtained_marks / total_marks_of_3_subjects) * 100);
document.write("<table>" 
 + "<tr>" + "<th>" + "|SUBJECTS|" + "</th>" + "<th>" + "|TOTAL MARKS|" + "</th>" + "<th>" + "|OBTAINED MARKS|" + "</th>" + "<th>" + "|PERCENTAGE|" + "</th>" + "</tr>" + "<br>" 
 + "<tr>" + "<td>" + "<center>" + subject_1 + "</center>" + "</td>" + "<td>" + "<center>" + total_marks_for_each_subject + "</center>" + "</td>" + "<td>" + "<center>" + obtained_marks_for_each_subject_1 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_1 + "%" + "</center>" + "</td>" + "</tr>"
 + "<tr>" + "<td>" + "<center>" + subject_2 + "</center>" + "</td>" + "<td>" + "<center>" + total_marks_for_each_subject + "</center>" + "</td>" + "<td>" + "<center>" + obtained_marks_for_each_subject_2 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_2 + "%" + "</center>" + "</td>" + "</tr>"
 + "<tr>" + "<td>" + "<center>" + subject_3 + "</center>" + "</td>" + "<td>" + "<center>" + total_marks_for_each_subject + "</center>" + "</td>" + "<td>" + "<center>" + obtained_marks_for_each_subject_3 + "</center>" + "</td>" + "<td>" + "<center>" + percentage_3 + "%" + "</center>" + "</td>" + "</tr>"
 + "<tr>" + "<td>" + " " + "</td>" + "<td>" + "<center>" + "<b>" + total_marks_of_3_subjects + "</b>" + "</center>" + "</td>" + "<td>" + "<center>" + "<b>" + total_obtained_marks + "</b>" + "</center>" + "</td>" + "<td>" + "<center>" + "<b>" + total_percentage + "%" + "</b>" + "</center>" + "</td>" + "</b>" + "</tr>"  
 + "</table>" + "<br>" + "<hr>");


//                                            CHAPTER - 9 TO 11 


// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

var user_input_for_city = prompt("Enter City Name");
if(user_input_for_city == "karachi" || user_input_for_city == "Karachi" || user_input_for_city == "KARACHI" ){
    document.write("Welcome To City Of Lights !!!" + "<br>");
}
else{
    document.write("Welcome" + "<br>");
}
document.write("<br>" + "<hr>");

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

var user_input_for_gender = prompt("Enter Your Gender");
if(user_input_for_gender == "male" || user_input_for_gender == "MALE" || user_input_for_gender == "Male"){
    document.write("Good Morning Sir." + "<br>");
}
else if(user_input_for_gender == "female" || user_input_for_gender == "FEMALE" || user_input_for_gender == "female"){
    document.write("Good Morning Ma’am." + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

var user_input_for_traffic_lights = prompt("Enter Traffic Light Color", "RED, YELLOW or GREEN");
if(user_input_for_traffic_lights == "red" || user_input_for_traffic_lights == "Red" || user_input_for_traffic_lights == "RED"){
    document.write("MUST STOP!!!, light is " + user_input_for_traffic_lights + "<br>");
}
else if(user_input_for_traffic_lights == "yellow" || user_input_for_traffic_lights == "Yellow" || user_input_for_traffic_lights == "YELLOW"){
    document.write("READY TO MOVE, light is " + user_input_for_traffic_lights + "<br>");
}
else if(user_input_for_traffic_lights == "green" || user_input_for_traffic_lights == "Green" || user_input_for_traffic_lights == "GREEN"){
    document.write("MOVE NOW, light is " + user_input_for_traffic_lights + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

var user_input_for_fuel = +prompt("Enter Amount Of Fuel In Car","Can Be In Floating Points " + " In Litres" );
if(user_input_for_fuel <= 0.25 ){
    document.write("Please refill the fuel in your car" + "<br>");
}
else if(user_input_for_fuel > 0.25){
    document.write("You Have Enough Fuel To Travel" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// f. if("car" < "cat"){
//     alert("car is smaller than cat");
// }

document.write("Yes, Alert messages are being displayed, that's mean they are true" + "<br>" +
"part A is displaying alert message: given condition for variable a is true" + "<br>" +
"part C is displaying alert messages: condition 2 is true & condition 4 is true" + "<br>" +
"part D is displaying alert message: The cost equals" + "<br>" +
"part E is displaying alert message: True" + "<br>" +
"part F is displaying alert message: car is smaller than cat" + "<br>" + "<hr>");

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page.
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

var subject_1_marks_obtaied = +prompt("Enter Marks");
var subject_2_marks_obtaied = +prompt("Enter Marks");
var subject_3_marks_obtaied = +prompt("Enter Marks");
var total_marks_of_all_subjects = 300;
var obtained_marks_for_all_subjects = (subject_1_marks_obtaied + subject_2_marks_obtaied + subject_3_marks_obtaied);
var overall_percentage = ((obtained_marks_for_all_subjects / total_marks_of_all_subjects) * 100);
document.write("<h3>" + "<b>" + "MARKS SHEET" + "</b>" + "</h3>" + "<br>" + 
"Total Marks: " + total_marks_of_all_subjects + "<br>" + 
"Marks Obtained: " + obtained_marks_for_all_subjects + "<br>"); 
if(overall_percentage >= 80){
    document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
    "Grade: A-one" + "<br>" +
    "Remarks: Excellent" + "<br>" );
}
else if(overall_percentage >= 70){
    document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
    "Grade: A" + "<br>" +
    "Remarks: Good" + "<br>" );
}
else if(overall_percentage >= 60){
    document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
    "Grade: B" + "<br>" +
    "Remarks: You Need To Improve" + "<br>" );
}
else if(overall_percentage < 60){
    document.write("Percentage: " + overall_percentage + "%" + "<br>" + 
    "Grade: Fail" + "<br>" +
    "Remarks: Sorry" + "<br>" );
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret_number = 7;
var user_guess = +prompt("Guess The Secret Number", "Number Ranges From 1 To 10");
if(user_guess == secret_number){
    document.write("BINGO!!!, Correct Answer" + "<br>");
}
else if(user_guess == secret_number + 1 || user_guess == secret_number - 1 ){
    document.write("Close enough to the correct answer" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

var number_divisible_by_3 = +prompt("Enter A Number");
if(number_divisible_by_3 % 3 == 0){
     document.write("The number: " + number_divisible_by_3 + " is divisible by 3" + "<br>");
}
else if(number_divisible_by_3 % 3 !== 0){
    document.write("The number: " + number_divisible_by_3 + " is not divisible by 3" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

var number_checking = +prompt("Enter A Valid Number");
if(number_checking % 2 == 0){
     document.write("The number: " + number_checking + " is Even" + "<br>");
}
else if(number_checking % 2 !== 0){
    document.write("The number: " + number_checking + " is Odd" + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temperature_input = +prompt("Enter Temperature");
if(temperature_input > 40){
    document.write("Temperature is: " + temperature_input + "C" + "<br>" + "It is too hot outside." + "<br>");
}
else if(temperature_input > 30){
    document.write("Temperature is: " + temperature_input + "C" + "<br>" + "The Weather today is Normal." + "<br>");
}
else if(temperature_input > 20){
    document.write("Temperature is: " + temperature_input + "C" + "<br>" + "Today’s Weather is cool." + "<br>");
}
else if(temperature_input > 10){
    document.write("Temperature is: " + temperature_input + "C" + "<br>" + "OMG! Today’s weather is so Cool." + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var first_number = +prompt("Enter First Number");
var second_number = +prompt("Enter Second Number");
var Operation_perform = prompt("Enter Operation","+, -, *, /, %");
var final_result;
if(Operation_perform == "+"){
    final_result = (first_number + second_number);
    document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "-"){
    final_result = (first_number - second_number);
    document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "*"){
    final_result = (first_number * second_number);
    document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "/"){
    final_result = (first_number / second_number);
    document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else if(Operation_perform == "%"){
    final_result = (first_number % second_number);
    document.write(first_number + " " + Operation_perform + " " + second_number + " = " + final_result + "<br>");
}
else{
    document.write("USER HAS NOT ENTER ANYTHING !!!" + "<br>");
}
document.write("<br>" + "<hr>");


//                                            CHAPTER - 12 TO 13


