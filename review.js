document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviewsList');
    const reviewForm = document.getElementById('reviewForm');
    const reviewText = document.getElementById('reviewText');

    const fetchReviews = () => {
        fetch('http://localhost:2003/api/reviews')
            .then(response => response.json())
            .then(reviews => {
                reviewsContainer.innerHTML = '';
                reviews.forEach(review => {
                    addReviewToDOM(review);
                });
            });
    };

    const addReviewToDOM = (review) => {
        const reviewContainer = document.createElement('div');
        reviewContainer.classList.add('review');
        reviewContainer.dataset.id = review._id;

        const reviewTextDiv = document.createElement('div');
        reviewTextDiv.classList.add('review-text');
        reviewTextDiv.textContent = review.text;

        const reviewActions = document.createElement('div');
        reviewActions.classList.add('review-actions');

        const editIcon = document.createElement('i');
        editIcon.classList.add('fas', 'fa-edit');
        editIcon.title = 'Edit';
        editIcon.addEventListener('click', () => editReview(review));

        const deleteIcon = document.createElement('i');
        deleteIcon.classList.add('fas', 'fa-trash');
        deleteIcon.title = 'Delete';
        deleteIcon.addEventListener('click', () => deleteReview(review._id));

        reviewActions.appendChild(editIcon);
        reviewActions.appendChild(deleteIcon);

        reviewContainer.appendChild(reviewTextDiv);
        reviewContainer.appendChild(reviewActions);

        reviewsContainer.appendChild(reviewContainer);
    };

    const editReview = (review) => {
        reviewText.value = review.text;
        reviewForm.dataset.id = review._id;
    };

    const deleteReview = (id) => {
        fetch(`http://localhost:2003/api/reviews/${id}`, {
            method: 'DELETE'
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            fetchReviews();
        })
        .catch(error => {
            console.error('There was a problem with the delete operation:', error);
        });
    };    

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const text = reviewText.value;
        const id = reviewForm.dataset.id;

        if (text) {
            const method = id ? 'PUT' : 'POST';
            const url = id ? `http://localhost:2003/api/reviews/${id}` : 'http://localhost:2003/api/reviews';

            fetch(url, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: text }),
            })
            .then(response => response.json())
            .then(() => {
                reviewText.value = '';
                delete reviewForm.dataset.id;
                fetchReviews();
            });
        }
    });

    fetchReviews();
});