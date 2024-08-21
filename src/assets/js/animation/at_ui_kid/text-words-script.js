export  const textWordsScript = (textElem) => {
      let oldHtml = textElem.textContent; 
      textElem.innerHTML = '<div></div>';
      textElem.querySelector('div').innerHTML = oldHtml.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

}