const rotator = Array.from(document.querySelectorAll(`.rotator__case`));

setInterval(Ads.bind(rotator), 1000);

function Ads() {
  let posAds = this.findIndex(ads => ads.className.includes(`rotator__case_active`));
  this[posAds].classList.remove(`rotator__case_active`);
  posAds++;
  if (posAds === this.length) {
    posAds = 0;
  }
  this[posAds].classList.add(`rotator__case_active`);
}