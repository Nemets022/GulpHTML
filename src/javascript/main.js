document.addEventListener('DOMContentLoaded', function () {
	const imgFone = () => {
		let imgf = document.querySelectorAll(".imgf"),
			i = 0
		for (i; i < imgf.length; i++) {
			if (imgf[i].querySelector('img')) imgf[i].style.backgroundImage = `url(${imgf[i].querySelector('img').getAttribute('src')})`
		}
	}
	imgFone()
})