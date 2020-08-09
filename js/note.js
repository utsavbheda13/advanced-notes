function saveNote(){
    var mydb = document.getElementById("store-note");
    var content=document.getElementById("note").value;
    if(content != ""){
        var para=document.createElement("p");
        var node=document.createTextNode(content);
        para.appendChild(node);
        mydb.appendChild(para);
    }
}