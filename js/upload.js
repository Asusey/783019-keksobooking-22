import { FORM } from './form.js';
import { showAlert } from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const FILE_CHOOSER_AVATAR = FORM.querySelector('.ad-form__field .ad-form-header__input');
const AVATAR_PREVIEW = FORM.querySelector('.ad-form-header__preview img');
const FILE_CHOOSER_PHOTOS = FORM.querySelector('.ad-form__upload .ad-form__input');
const PHOTOS_CONTAINER = FORM.querySelector('.ad-form__photo-container');
const PHOTO = FORM.querySelector('.ad-form__photo');

FILE_CHOOSER_AVATAR.addEventListener('change', () => {
  const file = FILE_CHOOSER_AVATAR.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      AVATAR_PREVIEW.src = reader.result;
    });

    reader.readAsDataURL(file);
  } else {
    showAlert('Пожалуйста, загрузите фото с расширением .jpeg или .png');
  }
});

FILE_CHOOSER_PHOTOS.addEventListener('change', () => {
  const chosenFiles = FILE_CHOOSER_PHOTOS.files;

  for (let i = 0; i < chosenFiles.length; i++) {
    const currentFile = chosenFiles[i];
    const fileName = currentFile.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        PHOTO.remove();

        const newPhoto = document.createElement('img');
        const photoNew = document.createElement('div');
        newPhoto.src = reader.result;
        newPhoto.alt = 'Фото жилья';
        newPhoto.width = 70;
        newPhoto.height = 70;
        photoNew.classList.add('ad-form__photo');
        photoNew.appendChild(newPhoto);
        PHOTOS_CONTAINER.appendChild(photoNew);
      });
      reader.readAsDataURL(currentFile);
    }
  }
});
