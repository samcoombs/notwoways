const $productImg = $(".product-img");
const $mainImg = $(".subsolar__image--main");

function changeImage(e) {
  let $newImg = $(e.target).attr("src");
  $mainImg.attr("src", $newImg);
}

$productImg.on("click", changeImage);
