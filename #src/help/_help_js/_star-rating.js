const starRating = () => {
    const ratingItemsList = document.querySelectorAll('.rating__item'),
        ratingItemsArrey = Array.prototype.slice.call(ratingItemsList);


    ratingItemsArrey.forEach(item => {
        item.addEventListener('click', () => {
            const {
                itemValue
            } = item.dataset; //request for server
            item.parentNode.dataset.totalValue = item.dataset.itemValue;
            console.log({
                itemValue
            });
        });
    });
};
starRating();

/*-
//HTML код:
<div class="rating" data-total-value="0">
  <div class="rating__item" data-item-value="5">★</div>
  <div class="rating__item" data-item-value="4">★</div>
  <div class="rating__item" data-item-value="3">★</div>
  <div class="rating__item" data-item-value="2">★</div>
  <div class="rating__item" data-item-value="1">★</div>
</div>



//css код:

.rating{
  display: inline-flex;
  flex-direction: row-reverse;
}
.rating__item{
  font-size: 100px;
  color: #dcdcdc;
  cursor: pointer;
  transition: all .2s ease;
}
.rating__item:hover,
.rating__item:hover ~ .rating__item {
  color: #1c62cd;
}

.rating[data-total-value="1"] .rating__item:nth-child(n + 5),
.rating[data-total-value="2"] .rating__item:nth-child(n + 4),
.rating[data-total-value="3"] .rating__item:nth-child(n + 3),
.rating[data-total-value="4"] .rating__item:nth-child(n + 2),
.rating[data-total-value="5"] .rating__item:nth-child(n + 1) {
  color: #1c62cd;
}

-*/