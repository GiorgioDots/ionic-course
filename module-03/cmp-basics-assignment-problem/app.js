const courseNameInput = document.querySelector('#course-name');
const courseRatingInput = document.querySelector('#course-rating');
const addButton = document.querySelector('#btn-add');
const courseRatingList = document.querySelector('#course-rating-list');

addButton.addEventListener('click', () => {
    courseName = courseNameInput.value;
    courseRating = courseRatingInput.value;

    if (courseName.length <= 0 || courseRating < 0 || courseRating > 5 || courseRating.length <= 0) {
        const alert = document.createElement('ion-alert');
        alert.header = 'Invalid Inputs';
        alert.message = 'Please enter a valid name and rating.';
        alert.buttons = ['OKAY'];

        document.body.appendChild(alert);
        return alert.present();
    }

    newItem = document.createElement('ion-item');
    newItem.innerHTML = `<p><b><span id="course-name-out">${courseName}</span></b> - <span id="course-rating-out">${courseRating}/5</span></p>`
    courseRatingList.appendChild(newItem);

    courseNameInput.value = '';
    courseRatingInput.value = '';
})