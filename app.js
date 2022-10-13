


 window.addEventListener('load', function () {
 const btns = document.querySelectorAll(".questions-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", function(){
        var parent = this.parentElement;
        if(parent.style.fontWeight == ""){
            parent.style.fontWeight = "bold"
        }else{
            parent.style.fontWeight = ""
        }
        var sibling = this.parentElement.nextElementSibling;
        console.log(sibling.style.display);
        if(sibling.style.display == ""){
            sibling.style.display = "block"
        }else{
            sibling.style.display = ""
        }
    });
  });
});
