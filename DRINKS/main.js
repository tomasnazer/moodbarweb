


var itemsList = document.getElementById('products');
var filter =document.getElementById('filter');

//filter event
filter.addEventListener('keyup', filterItems);


//Filter items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //Get list
     var items = itemsList.getElementById('price');
    //Convert to an array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display ='none';
        }
    })

}