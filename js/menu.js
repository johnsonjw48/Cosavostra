const button = document.getElementById('btn-menu');
const font = document.getElementsByClassName('fas fa-bars');
const font2 = document.getElementsByClassName('fas fa-times');
const bodyElement = document.getElementsByTagName("body");
const menu = document.getElementById('list-menu');




button.addEventListener("click", ()=>{

			if (typeof(font[0])=="object") {
				const supp=button.removeChild(font[0]);
				button.insertAdjacentHTML("afterbegin", '<i class="fas fa-times"></i>');

			}else{
				const supp=button.removeChild(font2[0]);
				button.insertAdjacentHTML("afterbegin", '<i class="fas fa-bars"></i>');
			}


			if (menu.style.display != "flex" && bodyElement[0].style.overflow != "hidden") {
		        menu.style.display = "flex";
		        bodyElement[0].style.overflow = "hidden";
		        menu.style.top = window.scrollY + 'px';
		      
		    } else {
		        menu.style.display = "none";
		        bodyElement[0].style.overflow = "auto";
		    }
			

})

