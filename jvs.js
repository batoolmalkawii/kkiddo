function isNameRejected(name){
    return (name == '' || !isNaN(name));
}
//...
function isAgeRejected(age){
    return (age == '' || isNaN(age));
}
//...
function isItemRejected(items){
    return (isNaN(items) || items == '' || (items > 5 || items < 1));
}
//...
function getName (){
    var name = prompt("What is your name?");
    while (isNameRejected(name)){
        alert('Please insert your name!');
        name = prompt("What is your name?");
    }
    return name;   
}
//...
function getAge(){
    var age = prompt("How old are you?");
    while (isAgeRejected(age)){
        alert('Please insert a number');
        age = prompt("How old are you?");
    }
    return age;
}
//...
function getItemsNo(){
    var items = prompt("How many items you want our shop to make? Choose a value between 1-5 please.");
    while (isItemRejected(items)){
        alert('Please inster a number between 1-5.!');
        items = prompt("How many items you want our shop to make? Choose a value between 1-5 please.");
    }
    return items;   
}
//...
function alertInfo(name, age){
    alert('Hi '+name+'! welcome to Kiddo.');
}
//...
function whatSale(age){
    var sale;
    if (age >=0 && age <1) {
        sale = 'Baby';
    }
    else if (age>=1 && age<5) {
        sale = 'Toddlers';
    }
    else if (age>=5 && age<=12) {
        sale = 'Kids';
    }
    else {
        sale = 'all';
    }
    return sale;
}
//...
function PrintItems(){
    items = getItemsNo();
    for (i = 0; i < items; i++){
        document.write('Item#'+(i+1)+'     ');
    }
}
//.......................................................................
name = getName();
age = getAge();
alertInfo(name, age);
sale = whatSale(age);
document.write( ' <h3> hey ' +name+ ', '+sale+' clothes on SALE! </h3>');
PrintItems();