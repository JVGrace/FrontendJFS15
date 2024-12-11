function getData(){
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then(response => {
        
        if(!response.ok){
            throw new Error("Netword Problem!");
        }
        return response.json();
    })
    .then(fetchData=>{
        console.log("Fetched Data: "+fetchData);
        displayData(fetchData);
    })
    .catch(error=>{
        console.log("Error Fetching Data: "+error);
    })
}
function displayData(fetchData){
    
            
    var data=fetchData;
    var divItem=document.createElement('div');
    var uList=document.createElement('ul');
 
    data.forEach(function(element) {
        var lItem=document.createElement('li');
        lItem.textContent= `Post# ${element.id} Title# ${element.title}`;
        var pElement=document.createElement('p');
        pElement.textContent=`${element.body}`;
        lItem.appendChild(pElement);
        uList.appendChild(lItem);
        }); 
        document.body.appendChild(divItem);
        divItem.appendChild(uList);

};
    

    
