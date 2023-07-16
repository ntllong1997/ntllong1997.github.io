const gallery = document.querySelector('.gallery');
for (let i = 1; i <= 5; i++) {
  const imageSrc = `../images/nails${i}.jpg`;
  const anchorTagCode = `<a href="${imageSrc}" data-lightbox="nails" data-titles="nails">`;
  const imageTagCode = `<img src="${imageSrc}" alt="">`;
  const fullCode = `${anchorTagCode}\n\t${imageTagCode}\n</a>`;

  const newElement = document.createElement('div');
  newElement.innerHTML = fullCode;

  gallery.appendChild(newElement.firstChild);
}
