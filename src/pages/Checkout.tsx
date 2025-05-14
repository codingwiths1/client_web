import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon, CreditCardIcon, CheckCircleIcon } from 'lucide-react';
const Checkout = () => {
  const [step, setStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      setOrderComplete(true);
    }
  };
  // Order summary data (would typically come from cart state)
  const orderSummary = {
    items: [{
      name: 'Classic Cheeseburger',
      quantity: 2,
      price: 9.99
    }, {
      name: 'Chicken Caesar Salad',
      quantity: 1,
      price: 8.99
    }],
    subtotal: 28.97,
    deliveryFee: 2.99,
    tax: 2.32,
    total: 34.28
  };
  if (orderComplete) {
    return <div className="max-w-md mx-auto text-center py-12 bg-white rounded-lg shadow-md">
        <CheckCircleIcon size={64} className="mx-auto text-green-500 mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Order Confirmed!
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been placed successfully.
        </p>
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="font-medium text-gray-700 mb-2">Order #1234567</h3>
          <p className="text-gray-600">Estimated delivery: 30-45 minutes</p>
        </div>
        <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-full font-medium inline-block transition-colors duration-300">
          Return to Home
        </Link>
      </div>;
  }
  return <div className="max-w-3xl mx-auto">
      <div className="flex items-center mb-6">
        <Link to={step === 1 ? '/cart' : '#'} onClick={step === 2 ? () => setStep(1) : undefined} className="mr-4 p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeftIcon size={20} className="text-gray-600" />
        </Link>
        <h1 className="text-2xl font-bold text-gray-800">Checkout</h1>
      </div>
      {/* Progress steps */}
      <div className="flex mb-8">
        <div className="flex-1">
          <div className={`h-1 ${step >= 1 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
          <div className="mt-2 text-center">
            <span className={`text-sm font-medium ${step >= 1 ? 'text-orange-500' : 'text-gray-500'}`}>
              Delivery Details
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className={`h-1 ${step >= 2 ? 'bg-orange-500' : 'bg-gray-200'}`}></div>
          <div className="mt-2 text-center">
            <span className={`text-sm font-medium ${step >= 2 ? 'text-orange-500' : 'text-gray-500'}`}>
              Payment
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            {step === 1 && <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold mb-4">
                  Delivery Information
                </h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                  </div>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input type="text" id="address" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input type="text" id="city" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input type="text" id="state" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                    <div>
                      <label htmlFor="zip" className="block text-sm font-medium text-gray-700 mb-1">
                        Zip Code
                      </label>
                      <input type="text" id="zip" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                      Delivery Instructions (Optional)
                    </label>
                    <textarea id="notes" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300">
                    Continue to Payment
                  </button>
                </div>
              </form>}
            {step === 2 && <form onSubmit={handleSubmit}>
                <h2 className="text-lg font-semibold mb-4">
                  Payment Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <input type="text" id="cardName" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                      <CreditCardIcon size={20} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date
                      </label>
                      <input type="text" id="expiry" placeholder="MM/YY" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input type="text" id="cvv" placeholder="123" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="saveCard" className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded" />
                    <label htmlFor="saveCard" className="ml-2 block text-sm text-gray-700">
                      Save this card for future orders
                    </label>
                  </div>
                </div>
                <div className="mt-6">
                  <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-md font-medium transition-colors duration-300">
                    Complete Order
                  </button>
                </div>
              </form>}
          </div>
        </div>
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            <div className="space-y-3 mb-4">
              {orderSummary.items.map((item, index) => <div key={index} className="flex justify-between text-gray-700">
                  <span>
                    {item.quantity}x {item.name}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>)}
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${orderSummary.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 mt-2">
                  <span>Delivery Fee</span>
                  <span>${orderSummary.deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 mt-2">
                  <span>Tax</span>
                  <span>${orderSummary.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold mt-2 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span>${orderSummary.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Checkout;