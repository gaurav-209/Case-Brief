import React from 'react';

const LoginPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="w-full max-w-md">
      <div className="bg-white py-8 px-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-center text-primary-800 mb-6">Login to CaseBrief</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember-me" name="remember-me" className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
            </div>
            <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">Forgot password?</a>
          </div>
          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);

export default LoginPage;
