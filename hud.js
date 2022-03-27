const acc_btns=document.querySelectorAll(".accordin-header");
const acc_contents=document.querySelectorAll(".accordin-body");

acc_btns.forEach((btn) =>{
	btn.addEventListener('click',(e)=>{
        
        acc_contents.forEach((acc)=>{
        	if (e.target.nextElementSibling !== acc && acc.classList.contains("active")) {
        		acc.classList.remove("active");
        		acc_btns.forEach((btn)=>btn.classList.remove("active"));
        	}
        });
		const panel=btn.nextElementSibling;
		panel.classList.toggle("active");
		btn.classList.toggle("active");
	});
});

window.onclick=(e)=>{
	if (e.target.matches('.accordin-header')) {
		acc_btns.forEach((btn)=>btn.classList.remove("active"));
		acc_contents.forEach((acc)=>acc.classList.remove("active"));
	}
};