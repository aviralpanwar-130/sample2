// Examine the document.

//console.dir(document);
//console.log(document);
//console.log(document.title);
//document.title= "MyList";
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent="Hello";
//console.log(document.forms);
//console.log(document.links);
//console.log(document.images);

// Get element by ID.

//console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.innerText="Hello";
//headerTitle.textContent="Hello";
//headerTitle.innerHTML = '<h3>Good Job</h3>';
headerTitle.style.border='solid 2px #000';

//Get elemenst by class.

let addList = document.getElementsByClassName('title')[0];
console.log(addList);
addList.style.color='green';
addList.style.fontWeight='Bold';