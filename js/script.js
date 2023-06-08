let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
	nextImage();
}, 5000)

function nextImage() {
	count++;
	if (count > 4) {
		count = 1
	}

	document.getElementById("radio" + count).checked = true;
}

function openComents(){
	const modal_coments = document.getElementById('coments-modal')
	modal_coments.classList.add('abrir')

	modal_coments.addEventListener('click', (e) => {
		if(e.target.id == 'close' || e.target.id == 'coments-modal'){
			modal_coments.classList.remove('abrir')
		}
	})

}
