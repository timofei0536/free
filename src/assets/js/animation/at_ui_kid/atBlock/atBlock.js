import * as animations from '../animations';

// CLASESS
// at-block
// at-element
// at-elements

// ATTRIBUTES 

// data-at-name
// data-at-custom
// data-at-group



export const atBlock = () => {
	if (document.querySelector('.at-block')) {


			let blocks = document.querySelectorAll('.at-block');

			for (let i = 0; i < blocks.length; i++) {


				let blocktl = gsap.timeline({
					scrollTrigger: {
						trigger: blocks[i],
						start: 'top 65%',
					},
				});


				if (blocks[i].querySelector('.at-element')) {

					let elements = blocks[i].querySelectorAll('.at-element');


					for (let j = 0; j < elements.length; j++) {

						let animation_type = elements[j].getAttribute('data-at-name');


						let animation = animations[animation_type];

						let params = {
							tl: blocktl,
							block: blocks[i],
							elem: elements[j],
						}

						let delay = window.PRELOADER_DELAY;

						setTimeout(function () {


							if (!elements[j].hasAttribute('data-at-custom')) {
								animation.default(params);
							} else {
								animation.custom(params);
							}

						}, delay);


					}

				}





			}

	}


}

