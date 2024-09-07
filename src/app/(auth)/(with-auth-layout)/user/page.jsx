// ADD USER LOGIN PAGE HERE (SHARE LOGIN FORM COMPONENT BETWEEN DOCTORS AND USER LOGIN ROUTES)
// dummy login page for representation only
'use client';

import { logout, loginSuccess, loginFailure } from '../../../../lib/store/features/auth/authSlice';
import axios from 'axios';
import { useAppDispatch } from '../../../../lib/store/hooks/index';
import AuthViewer from '@/components/AuthViewer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function Login() {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });


  const handleLogin = async (event) => {
    event.preventDefault();
    // dispatch(loginRequest());
    try {
      const response = await axios.post("https://dummyjson.com/auth/login", formData);
      dispatch(loginSuccess({ token: response.data.token, user: response.data }));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input name="username" type="username" placeholder="username" required value={formData.username} onChange={(event) => setFormData({ ...formData, username: event.target.value })}/>
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={(event) =>
            setFormData({ ...formData, password: event.target.value })
          }
        />
        <button type="submit">Login</button>
      </form>
      <Button onClick={() => dispatch(logout())}>Logout</Button>
      <AuthViewer/>
    </div>
  );
}
