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
// let headerTitle = document.getElementById('header-title');
//console.log(headerTitle);
//headerTitle.innerText="Hello";
//headerTitle.textContent="Hello";
//headerTitle.innerHTML = '<h3>Good Job</h3>';
//headerTitle.style.border='solid 2px #000';

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

// let titles = document.querySelectorAll('.title');
// titles[0].textContent='Hello';

// let odd = document.querySelectorAll('li:nth-child(odd)');
// let even = document.querySelectorAll('li:nth-child(even')
// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='grey';
//     even[i].style.backgroundColor='yellow';
// }


// Traversing the DOM.....

// let itemList = document.querySelector('#items');
// Parent Node...
// itemList.parentNode.style.backgroundColor='red';
// itemList.parentNode.parentNode.style.background='yellow';

// Parent Element...
// itemList.parentElement.style.backgroundColor='red';
// itemList.parentNode.parentNode.style.background='yellow';

// Child Nodes.... also include line breaks and gaps.....
//console.log(itemList.childNodes);

// Children Nodes...
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.background='orange';

// FirstChild....also include line breaks and gaps...

//console.log(itemList.firstChild);

//First Element Child...

//console.log(itemList.firstElementChild);

// Siblings.....
// console.log(itemList.previousSibling);
// console.log(itemList.nextElementSibling);

// Create a div....
// let newDiv = document.createElement('div');

// Add Class...
// newDiv.className='Hello';
// newDiv.id='Hello1';
// newDiv.setAttribute('title','Hello Div');
// console.log(newDiv);

// Create Text Node....
//let newDivText = document.createTextNode('Hello I am aviral');

//Add Tetx Nod eto div....
//newDiv.append(newDivText);
//console.log(newDiv);

// Inserting element in the DOM....

// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// newDiv.style.fontSize='30px';
// container.insertBefore(newDiv,h1);

let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form Submit event.....
form.addEventListener('submit',addItem);

// Form delete item event....
itemList.addEventListener('click',removeItem);

// Filter items event....
filter.addEventListener('keyup',filterItems);

// Add Item...
function addItem(e){
    e.preventDefault();

    // Get input value....
    let newItem = document.getElementById('item').value;
    // Create new li element...
    let li = document.createElement('li');
    li.className='list-group-item';
    // adding text to li..
    li.appendChild(document.createTextNode(newItem));
    // Adding element to the item list...
    itemList.appendChild(li);

    // Create Delete Button...
    let del = document.createElement('button');
    del.className='btn btn-danger btn-sm float-right delete'
    del.appendChild(document.createTextNode('X'));
    // Append del button to list element...
    li.append(del);
    
    
}

function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?'))
        {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e){
    let text = e.target.value.toLowerCase();

    let items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!==-1){
            item.style.display='block';
        }
        else{
            item.style.display='none';
        }
    })
}
