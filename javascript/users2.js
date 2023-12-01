const searchBar = document.querySelector(".search input"),

usersList = document.querySelector(".users-list");


searchBar.onkeyup = ()=>{
  let searchTerm = searchBar.value;
  if(searchTerm != ""){
    searchBar.classList.add("active");
  }else{
    searchBar.classList.remove("active");
  }
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/search.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        if(xhr.status === 200){
          let data = xhr.response;
          usersList.innerHTML = data;
        }
    }
  }
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.send("searchTerm=" + searchTerm);
}
$( document ).ready(function() {
  refrechuser();

});
function refrechuser() {
    $.ajax({
        url: "php/users2.php",
        method: "POST",
       
        success: function (data) {
            //console.log(data);
           // var parsedData = JSON.parse(data); // Assurez-vous de parser le JSON
  
    $('.users-list').html(data);
    
        }
    });
}
setInterval(() =>{
  refrechuser(); 
}, 300000);

