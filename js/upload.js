// import { FORM } from './form.js';
import { showAlert } from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const DEFAULT_IMG = 'img/muffin-grey.svg';
const FILE_CHOOSER_AVATAR = document.querySelector('.ad-form__field .ad-form-header__input');
const avatarPreviewWrapper = document.querySelector('.ad-form-header__preview');
const AVATAR_PREVIEW = document.querySelector('.ad-form-header__preview img');
const FILE_CHOOSER_PHOTOS = document.querySelector('.ad-form__upload .ad-form__input');
const PHOTOS_CONTAINER = document.querySelector('.ad-form__photo-container');
const PHOTO = document.querySelector('.ad-form__photo');
//const PHOTO_PREVIEW = document.querySelector('.ad-form__photo img');//не существует

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

const resetImage = () => {
  const photos = document.querySelectorAll('.ad-form__photo')
  photos.forEach((img, i) => {
    i > 0 && img.remove()
  });
  avatarPreviewWrapper.children[0].src = DEFAULT_IMG;
}

// const resetUserImage = () => {

//   if (PHOTO_PREVIEW !== null) {
//     PHOTO_PREVIEW.remove()
//   }
// }

export { resetImage };
