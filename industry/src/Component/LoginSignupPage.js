import React, { useState } from 'react';
import './LoginSignupPage.css'; // Import CSS file for styling
import HomePage from './HomePage';

const LoginSignupPage = () => {
  const [activeTab, setActiveTab] = useState('sign-in');
  const [username, setUsername] = useState('Dheeraj');
  const [password, setPassword] = useState('Yash');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleSignIn = () => {
    if (username === 'Dheeraj' && password === 'Yash') {
      setIsLoggedIn(true);
    } else {
      alert('Wrong username or password');
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <HomePage />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-login">
          <div className="login-wrap w-full max-w-xs">
            <div className="login-html bg-opacity-90 rounded-lg p-8">
              <>
                <input
                  id="tab-1"
                  type="radio"
                  name="tab"
                  className="sign-in"
                  checked={activeTab === 'sign-in'}
                  onChange={() => handleTabChange('sign-in')}
                />
                <label htmlFor="tab-1" className="tab text-xl mr-4 pb-2">
                  Sign In
                </label>
              
                <div className="login-form mt-4">
                  {activeTab === 'sign-in' && (
                    <div className="sign-in-htm">
                      <div className="group mb-4">
                        <label htmlFor="user" className="label text-sm">
                          Username
                        </label>
                        <input
                          id="user"
                          type="text"
                          className="input px-4 py-2 rounded-lg"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="group mb-4">
                        <label htmlFor="pass" className="label text-sm">
                          Password
                        </label>
                        <input
                          id="pass"
                          type="password"
                          className="input px-4 py-2 rounded-lg"
                          data-type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div className="group mb-4">
                        <input
                          id="check"
                          type="checkbox"
                          className="check mr-2"
                          checked
                        />
                        <label htmlFor="check" className="text-sm">
                          <span className="icon bg-gray-100 rounded-md p-1"></span>{' '}
                          Keep me Signed in
                        </label>
                      </div>
                      <div className="group">
                        <button
                          type="button"
                          className="block bg-white text-gray-700 py-2 px-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                          onClick={handleSignIn}
                        >
                          Sign in
                        </button>
                      </div>
                      <div className="hr mt-6 mb-4 border-t border-gray-200"></div>
                    
                    </div>
                  )}
                  {activeTab === 'sign-up' && (
                    <div className="sign-up-htm">
                      {/* Code for sign-up tab */}
                    </div>
                  )}
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginSignupPage;
