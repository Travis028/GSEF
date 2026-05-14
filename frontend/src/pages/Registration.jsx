import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

const Registration = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between relative">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 z-0"></div>
            <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-blue-600 z-0 transition-all duration-300 ${step === 1 ? 'w-1/4' : step === 2 ? 'w-2/4' : step === 3 ? 'w-3/4' : 'w-full'}`}></div>
            
            <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center font-bold ${step >= 4 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>4</div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
            <span>Ticket</span>
            <span>Details</span>
            <span>Review</span>
            <span>Payment</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Select Your Ticket</h2>
              <div className="space-y-4">
                <label className="block border-2 border-blue-500 rounded-lg p-4 cursor-pointer hover:bg-blue-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <input type="radio" name="ticket" className="mr-3 text-blue-600 focus:ring-blue-500" defaultChecked />
                      <span className="font-bold text-gray-800">Regular Pass</span>
                    </div>
                    <span className="text-xl font-bold text-blue-600">KES 3,000</span>
                  </div>
                </label>
                <label className="block border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition">
                  <div className="flex justify-between items-center">
                    <div>
                      <input type="radio" name="ticket" className="mr-3 text-blue-600 focus:ring-blue-500" />
                      <span className="font-bold text-gray-800">VIP Pass</span>
                    </div>
                    <span className="text-xl font-bold text-gray-700">KES 10,000</span>
                  </div>
                </label>
              </div>
              <div className="mt-8 flex justify-end">
                <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">Continue</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={nextStep}>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Attendee Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Company / Organization</label>
                  <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium">Back</button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">Continue</button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Review Order</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900">GSEF 2026 Summit</h3>
                    <p className="text-sm text-gray-500">Regular Pass x 1</p>
                  </div>
                  <div className="font-bold text-gray-900">KES 3,000</div>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-lg text-gray-900">Total</span>
                  <span className="font-bold text-2xl text-blue-600">KES 3,000</span>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="text-gray-600 hover:text-gray-900 px-4 py-2 font-medium">Back</button>
                <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition">Proceed to Payment</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center py-8">
              <FiCheckCircle className="mx-auto text-green-500 mb-4" size={64} />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Registration Complete!</h2>
              <p className="text-gray-600 mb-8">Thank you for registering. We have sent your ticket to your email.</p>
              <Link to="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition inline-block">
                Go to Dashboard
              </Link>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Registration;
