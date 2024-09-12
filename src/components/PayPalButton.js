import { PayPalButton } from "react-paypal-button-v2";

function PayPalCheckoutButton({ amount }) {
  return (
    <PayPalButton
      amount={amount}
      // Replace with your sandbox client ID
      options={{
        clientId: "YOUR_PAYPAL_SANDBOX_CLIENT_ID"
      }}
      onSuccess={(details, data) => {
        console.log("Transaction completed by " + details.payer.name.given_name);
        // Call your backend to save the transaction
      }}
    />
  );
}

export default PayPalCheckoutButton;