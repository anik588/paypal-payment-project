import { PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-100 overflow-auto max-h-[90vh]">
        
        {/* Sticky Header like a Minimal Navbar */}
        <div className="sticky top-0 z-999 bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center rounded-t-xl">
          <h2 className="text-lg font-semibold text-gray-700">Checkout - $10</h2>
          <button
            onClick={() => navigate(-1)}
            className="text-sm text-white hover:underline transition-all"
          >
            ⬅ Go Back
          </button>
        </div>

        {/* PayPal Checkout */}
        <div className="p-5 sm:p-6">
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "pill" }}
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [{ amount: { value: "10.00" } }],
              });
            }}
            onApprove={(data, actions) => {
              return actions.order.capture().then(() => {
                navigate("/success");
              });
            }}
            onCancel={() => {
              navigate("/cancel");
            }}
          />
        </div>
      </div>
    </div>
  );
}
