"use client";
import { Lock, Info } from "lucide-react";
import { useState } from "react";
import OrderItem from "../components/checkout/OrderItem";
import SavedAddress from "../components/checkout/SavedAddress";
import DeliveryAddressForm from "../components/checkout/DeliveryAddressForm";

const Checkout = () => {
  const [showNewAddress, setShowNewAddress] = useState(false);

  const orderItems = [
    {
      title: "Paris Corner Burberry Goddess EDP 100ml",
      brand: "Paris Corner",
      price: "₦54,000",
      image: "/burbery.webp",
      alt: "Burberry Deodorant",
    },
    {
      title: "Nivea Men Silver Protect Antiperspirant 150ml",
      brand: "Nivea",
      price: "₦3,500",
      image: "/burbery.webp",
      alt: "Nivea Deodorant",
    },
    {
      title: "Dove Men+Care Clean Comfort Deodorant 150ml",
      brand: "Dove",
      price: "₦4,200",
      image: "/burbery.webp",
      alt: "Dove Deodorant",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto lg:px-36 px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-8 order-1 lg:order-1">
            {/* Delivery Address Section */}
            <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 font-inter">
                Delivery Address
              </h2>

              {!showNewAddress ? (
                <SavedAddress onSelectNew={() => setShowNewAddress(true)} />
              ) : (
                <DeliveryAddressForm onBack={() => setShowNewAddress(false)} />
              )}
            </div>

            {/* Payment Section - Desktop Only */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-6 font-inter">
                  Payment
                </h2>

                <div className="space-y-4">
                  {/* Payment Method Selection */}
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="creditCardDesktop"
                      name="paymentDesktop"
                      defaultChecked
                      className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <label
                      htmlFor="creditCardDesktop"
                      className="ml-3 text-sm font-medium text-gray-900 font-inter"
                    >
                      Credit Card
                    </label>
                    <div className="ml-4 flex gap-2">
                      <div className="w-6 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        M
                      </div>
                      <div className="w-6 h-4 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                        V
                      </div>
                      <div className="w-6 h-4 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                        A
                      </div>
                    </div>
                  </div>

                  {/* Credit Card Details */}
                  <div className="space-y-4 pt-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Card number"
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                      />
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Expiration date (MM/YY)"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                      />
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Security code"
                          className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                        />
                        <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <input
                      type="text"
                      placeholder="Name on card"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                    />
                  </div>
                </div>

                {/* Pay Now Button */}
                <button className="cursor-pointer w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-6 font-inter">
                  Pay now
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary - Mobile: 2nd, Desktop: Right */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <div className="bg-white rounded-lg p-5 sticky top-8 border border-gray-300 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-5 font-inter">
                Order Summary
              </h2>

              {/* Items List - Scrollable */}
              <div className="max-h-80 overflow-y-auto space-y-1 mb-5">
                {orderItems.map((item, index) => (
                  <OrderItem
                    key={index}
                    title={item.title}
                    brand={item.brand}
                    price={item.price}
                    image={item.image}
                    alt={item.alt}
                  />
                ))}
              </div>

              {/* Discount Code */}
              <div className="mb-5">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Discount code or gift card"
                    className="flex-1 px-3 py-2 border border-gray-200 rounded-md focus:ring-1 focus:ring-primary focus:border-transparent outline-none font-inter text-xs"
                  />
                  <button className="cursor-pointer bg-primary text-white px-3 py-2 rounded-md font-medium hover:bg-primary/90 transition-colors font-inter text-xs">
                    Apply
                  </button>
                </div>
              </div>

              {/* Summary Totals */}
              <div className="space-y-2 border-t border-gray-100 pt-4">
                <div className="flex justify-between text-xs font-inter text-gray-600">
                  <span>Subtotal</span>
                  <span>₦61,700</span>
                </div>
                <div className="flex justify-between text-xs font-inter text-gray-600">
                  <div className="flex items-center gap-1">
                    <span>Shipping</span>
                    <Info className="w-3 h-3 text-gray-400" />
                  </div>
                  <span>₦2,500</span>
                </div>
                <div className="flex justify-between text-xs font-inter text-gray-600">
                  <span>Discount</span>
                  <span>₦0</span>
                </div>
                <div className="flex justify-between text-xs font-semibold font-inter border-t border-gray-100 pt-3 text-gray-900">
                  <span>Total</span>
                  <span>₦64,200</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Section - Mobile: 3rd, Hidden on Desktop */}
          <div className="lg:col-span-2 order-3 lg:hidden">
            <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm">
              <h2 className="text-lg font-semibold text-gray-900 mb-6 font-inter">
                Payment
              </h2>

              <div className="space-y-4">
                {/* Payment Method Selection */}
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="creditCardMobile"
                    name="paymentMobile"
                    defaultChecked
                    className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
                  />
                  <label
                    htmlFor="creditCardMobile"
                    className="ml-3 text-sm font-medium text-gray-900 font-inter"
                  >
                    Credit Card
                  </label>
                  <div className="ml-4 flex gap-2">
                    <div className="w-6 h-4 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      M
                    </div>
                    <div className="w-6 h-4 bg-blue-800 rounded text-white text-xs flex items-center justify-center font-bold">
                      V
                    </div>
                    <div className="w-6 h-4 bg-green-600 rounded text-white text-xs flex items-center justify-center font-bold">
                      A
                    </div>
                  </div>
                </div>

                {/* Credit Card Details */}
                <div className="space-y-4 pt-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Card number"
                      className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                    />
                    <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Expiration date (MM/YY)"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                    />
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Security code"
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                      />
                      <Info className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </div>

                  <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none font-inter text-sm"
                  />
                </div>
              </div>

              {/* Pay Now Button */}
              <button className="cursor-pointer w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors mt-6 font-inter">
                Pay now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
