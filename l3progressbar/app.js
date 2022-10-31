var getdownloadbtn = document.querySelector('.download-btn');
var getprogressbar = document.querySelector('.progress-bar');

var seturl = "https://linkedin.com";


getdownloadbtn.addEventListener('click',function(){
	// console.log("I am working");
	getdownloadbtn.setAttribute('disabled',true);

	var setwidth = 0;

	var setinc = setInterval(progressinc,100);

	function progressinc(){ 
		
		if(setwidth >= 100){
			clearInterval(setinc);
			window.location.href = seturl;
		}else{
			setwidth++;

			// console.log(setwidth);


			getprogressbar.style.width = `${setwidth}%`;
			getprogressbar.setAttribute(`data-inc`,`${setwidth}%`);
		}

	}

});