var getaccttitles = document.getElementsByClassName("acctitle");
// console.log(getaccttitles); // HTML Collection 
var getacccontents = document.querySelectorAll(".acccontent");
// console.log(getacccontents);	// Node List

for(var x=0; x<getaccttitles.length; x++){
	// console.log(x);

	getaccttitles[x].addEventListener('click',function(){
		// console.log(e.target);
		// console.log(this);  // this so function(e) ma htae ll ya tl

		this.classList.toggle("active");
		var getcontent = this.nextElementSibling;
		// console.log(getcontent);

		if(getcontent.style.height){
			getcontent.style.height = null;
		}else{
			// console.log(getcontent.scrollHeight);
			getcontent.style.height = getcontent.scrollHeight + 'px';
		}
	});

	if(getaccttitles[x].classList.contains("active")){
			getacccontents[x].style.height = getacccontents[x].scrollHeight + "px";
		}
}