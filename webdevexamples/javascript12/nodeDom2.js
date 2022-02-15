let obj1 = document.querySelector("addbutton");
obj.addEventListener("click", addNode);


function addNode() 
{

  let list = document.getElementsByTagName('ul')[0];         

  let newItemLast = document.createElement('li');  
             
  let newTextLast = document.createTextNode('News');       

  newItemLast.appendChild(newTextLast);
                     
  list.appendChild(newItemLast);                           

  let newItemFirst = document.createElement('li'); 
  
  let newTextFirst = document.createTextNode('Rules');               
  newItemFirst.appendChild(newTextFirst); 

  // Add element to list (as a first child in the list- start of the list)                     
  list.insertBefore(newItemFirst, list.firstChild);                 


// change all styles of the old elements from the 2nd to the one before last
// querySelectorAll('li') selects all elements of li (an array collection)

  let listItems = document.querySelectorAll('li');                   

  // ADD A CLASS OF COOL TO ALL LIST ITEMS
  let i;                                                            
  
  // Loop through collection elements 
  for (i = 1; i < listItems.length -1; i++) {                           
  
    // Change class to cool
    listItems[i].className = 'cool';                                 
  
  }

  // ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

  // select the first h2 in the document
  let heading = document.querySelector('h2');                        

  // get h2 text
  let headingText = heading.firstChild.nodeValue;

  // get the number of <li> elements in the documents                  
  let totalItems = listItems.length; 

  let newHeading =  headingText + '<span>' + totalItems + '</span>'; // Content


  // Update h2 text and html content by using innerHTML (not textContent) because it contains HTML markup
  heading.innerHTML = newHeading;                                    

}

