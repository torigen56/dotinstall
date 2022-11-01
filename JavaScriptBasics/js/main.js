'use strict'; // エラー検出

{
	document.querySelector('ul').addEventListener('click', e => {
		if (e.target.nodeName === 'LI') {
			e.target.classList.toggle('done');
		}
	});

}