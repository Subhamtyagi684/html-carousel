var container = document.getElementsByClassName("carousel-inner")[0];
var items = document.getElementsByClassName("carousel-item")


for (var i=0;i<items.length;i++){
	items[i].style.left=`${i*100}%`
}

var count = 0;

function slide(){
	count++;
	container.style.left=`-${count*100}%`;
	
	container.ontransitionend = function(event){
		var elem = document.createElement("div");
		elem.style.left = `${(items.length+(count-1))*100}%`
		elem.classList.add('carousel-item')
		elem.innerHTML = items[0].innerHTML
		document.getElementById("myList").appendChild(elem);
		document.getElementById("myList").removeChild(items[0]);

	}
};

setInterval(slide,5000)