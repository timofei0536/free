export const textLinesScript = (textElem, words = false) => {
  if (!textElem.querySelector('p')) {
    changeInner(textElem, words);
  } else {
    let tagP = textElem.querySelectorAll('p');
    for (var i = 0; i < tagP.length; i++) {
      changeInner(tagP[i] , words);
    }
  }


}



function changeInner(elem, words = false) {

  let paragraphContent = elem.innerHTML.replace(/^\s+|\s+$/gm, ''); // Удаляем лишние пробелы получившиеся из-за форматирования html
  let paragrapthWrappedWords = paragraphContent.replace(/(\S+)/g, '<span class="word">$1</span>'); // Оборачиваем все слова вместе с символами

  elem.innerHTML = paragrapthWrappedWords;

  let wrappedWords = elem.getElementsByClassName('word');
  let arrayOfWordNodes = Object.keys(wrappedWords).map(k => wrappedWords[k]);
  let currLineTop = 0;
  let finalHTML = '';

  setTimeout(function () {


    arrayOfWordNodes.forEach((node, index) => {
      let nodeTop = node.offsetTop;
      let word = node.innerHTML;
      if ( words == true ) {
        word = '<span class="word">'+node.innerHTML+'</span>';
      }
      finalHTML += ''
        + (index !== 0 && (nodeTop - currLineTop) > 5 ? '</span></span>' : ' ')
        + (index === 0 || (nodeTop - currLineTop) > 5 ? '<span class="anim-line-wrap"><span class="anim-line">' : '') 
        + word;

      currLineTop = nodeTop;

    });


    elem.innerHTML = finalHTML.trim();


  }, 500);



}




