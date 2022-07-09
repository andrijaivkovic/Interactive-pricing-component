const state = {
  rangeInputValue: 2,
  isBillingChecboxChecked: false,
};

const pricesArray = [8, 12, 16, 24, 36];
const pageviewsArray = ["10k", "50k", "100K", "500k", "1M"];

const pricingRangeInput = document.querySelector(".pricing__range-input");
const billingTypeCheckbox = document.querySelector(".pricing__change-billing");

const pageviewsText = document.querySelector(".pricing__pageview-count");
const priceText = document.querySelector(".pricing__price");
const billingTypeText = document.querySelector(".pricing__price-billing-type");

// use change event for event listener on range inputs, not input - input event doesn't trigger on mobile
pricingRangeInput.addEventListener("change", function () {
  state.rangeInputValue = this.value;

  updateUI();
});

billingTypeCheckbox.addEventListener("input", function () {
  state.isBillingChecboxChecked = this.checked;

  updateUI();
});

const formatNumber = function (number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(number);
};

const updateUI = function () {
  const price = pricesArray[state.rangeInputValue];
  const isChecked = state.isBillingChecboxChecked;

  priceText.textContent = formatNumber(
    isChecked ? price - price * 0.25 : price
  );
  billingTypeText.textContent = isChecked ? "/ year" : "/ month";
};

const init = function () {
  pricingRangeInput.value = state.rangeInputValue;
  billingTypeCheckbox.checked = state.isBillingChecboxChecked;

  updateUI();
};

init();
