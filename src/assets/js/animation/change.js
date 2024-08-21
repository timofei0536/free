	window.changeTitle = function () {

		let prefix;

		if ( document.querySelector('.main-screen__title-change') ) {
		 	prefix =  'main-screen';
		} else {
			prefix =  'mission';
		}



			function change(title){


		let active = title.querySelector('.'+prefix+'__title-change-item--active');
		let base = title.querySelector('.'+prefix+'__title-change-base');


		if ( title.querySelector('.'+prefix+'__title-change-item--remove')) {
			let remove = title.querySelector('.'+prefix+'__title-change-item--remove');

			

			let wrap = title;

			let newElement = document.createElement('div');
			newElement.classList.add(prefix+'__title-change-item', prefix+'__title-change-item--hide');
			newElement.textContent = remove.textContent;
			remove.remove();

	 		wrap.appendChild(newElement);
	 		wrap.appendChild(newElement);
	 		wrap.appendChild(newElement);

		}


		setTimeout(function(){
			

			let hideEl = title.querySelector('.'+prefix+'__title-change-item--hide');
			active.classList.add(prefix+'__title-change-item--remove');
			active.classList.remove(prefix+'__title-change-item--active');
			hideEl.classList.remove(prefix+'__title-change-item--hide');
			hideEl.classList.add(prefix+'__title-change-item--active');
			// base.textContent = hideEl.textContent;

				 gsap.to(base, {
				        width: hideEl.offsetWidth,
				        duration: 1,
				 });

		},50);


			}


		let changes = document.querySelectorAll('.'+prefix+'__title-change');
		

		for (let i = 0; i < changes.length; i++) {
			change(changes[i]);
		}



	}

		if ( document.querySelector('.mission') ){
			 setInterval(window.changeTitle, 6000);
		}

