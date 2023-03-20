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

// Get element by ID.....

//console.log(document.getElementById('header-title'));
let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.innerText="Hello";
//headerTitle.textContent="Hello";
//headerTitle.innerHTML = '<h3>Good Job</h3>';
headerTitle.style.border='solid 2px #000';

//Get elemenst by class......

// let addList = document.getElementsByClassName('title')[0];
// console.log(addList);
// addList.style.color='green';
// addList.style.fontWeight='Bold';
// let items = document.getElementsByClassName('list-group-item');
// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='grey';
// }

//Get elemenst by Tag Name......


// let items = document.getElementsByTagName('li');
// for(let i=0;i<items.length;i++)
// {
//     items[i].style.backgroundColor='grey';
// }

//Query Selector.......

// let header = document.querySelector('#main-header');
// header.style.borderColor='solid 4px #ccc';

// let input = document.querySelector('input');
// input.value='Hello User';

// let submit = document.querySelector('input[type="submit"]');
// submit.value='SEND';

// let item = document.querySelector('.list-group-item');
// item.style.color='red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color='green';


// QuerySelectorAll.....

let titles = document.querySelectorAll('.title');
titles[0].textContent='Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even')
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='grey';
    even[i].style.backgroundColor='yellow';
}
