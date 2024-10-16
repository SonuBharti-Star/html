let fragment = document.createElement();
for(let i = 1; i <= 100 ; i++)
{
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para ' +i;
    fragment.appendChild(newElement);
    
} 
document.body.appendChild(fragment);
console.log(document);