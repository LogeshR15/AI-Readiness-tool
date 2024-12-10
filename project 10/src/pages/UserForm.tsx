import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInfo } from '../types';

export const UserForm: React.FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/scorecard');
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="card">
        <h1 className="section-title gradient-text">
          AI Readiness Assessment
        </h1>
        <p className="text-gray-600 mb-6">
          Complete this assessment to evaluate your organization's AI readiness across key dimensions.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="input-field"
              value={userInfo.name}
              onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="input-field"
              value={userInfo.email}
              onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="w-full btn btn-primary"
          >
            Start Assessment
          </button>
        </form>
      </div>
    </div>
  );
};