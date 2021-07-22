// function ajax(){
    
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(){

//         if(this.readyState==4&&this.status==200){
//             var response = JSON.parse(this.responseText);
//             var Jpeople = response.people;
//             var output ="";
//             for(var i =0;i<response.length;i++){
//                 output += "<li>"+ response[i].title +"</li>"
//             }
//             document.getElementById("demo").innerHTML=output;
//         }
//     }
//     xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);

//     xhttp.send();
// }



function ajax(){
    let p = new.Promise((resolve, reject) => {
        let a = 4+1
        if(a == 5){
            resolve('Success')
        }
        else{
            reject('Failed')
        }
    })
    
    
    p.then((message) => {
        alert(""Congrats!!!5 tasks have been successfully completed"")
    }).catch((message) => {
        alert("Select some task")
    })
}




