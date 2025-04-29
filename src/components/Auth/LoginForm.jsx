import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '@/redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Card } from 'antd';

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      dispatch(login({ username }));
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Card className="w-96">
        <Input placeholder="Username" onChange={e => setUsername(e.target.value)} />
        <Input.Password placeholder="Password" onChange={e => setPassword(e.target.value)} className="mt-4" />
        <Button type="primary" block className="mt-4" onClick={handleLogin}>
          Login
        </Button>
      </Card>
    </div>
  );
}
