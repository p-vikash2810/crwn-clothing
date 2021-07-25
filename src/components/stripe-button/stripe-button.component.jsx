import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JH0XMSFGY1TVOkHtb7kr49hv8xHv5M1s81kPwoZlHYPQmiYyB9vuzNDguiYHgntNBPDVFQcWTSuggjXjh35Bm6o00tVKx9z8D";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
  return (
      <StripeCheckout
      label='Pay now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey} />
  );
};

export default StripeCheckoutButton;
