import { useEffect, useState } from 'react';
import Image from 'next/image';

const AuthModal = ({ isOpen, onClose, user, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('/images/profile_pic.png');

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState(null)

  // Populate name state with user.name when user data is available
  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setAvatar(user.avatar || '/images/profile_pic.png');
    }
  }, [user]);

  if (!isOpen) return null;

  const handleEditProfile = () => {
    if(name == null || name == '') {
      setError("name cannot be empty")
      return;
    } 
    setUser({name : name, email : email, avatar : avatar, password : user.password})
    setError(null)
    onClose();
  }

  const handleLogin = () => {
    if (email != null && password != null) {
      setUser({name : 'John Doe', email : email, avatar : "/images/profile_pic.png"});
      setError(null)
      onClose();
    } else {
      setError("name or password is empty")
      return;
    }
  }

  const handleSignup = () => {
    if (name != null && email != null && password != null) {
      setUser({name : name, email : email, avatar : "/images/profile_pic.png", password : password});
      setError(null)
      onClose();
    } else {
      setError("name, password or email is empty")
      return;
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white p-6 w-full max-w-md rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {!user ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              {isLogin ? 'Login' : 'Sign Up'}
            </h2>
            {!isLogin && <input
              type="name"
              placeholder="Name"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
              onChange={(e) => setName(e.target.value)}
            />}
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="w-full bg-blue-600 text-white rounded px-4 py-2 mb-3"
                onClick={isLogin ? () => handleLogin() : () => handleSignup()}
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>
            <p
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin
                ? "Don't have an account? Sign Up"
                : 'Already have an account? Login'}
            </p>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-semibold mb-4">Profile</h2>
            <div className="flex flex-col items-center">
              {avatar && (
                <Image
                  src={user.avatar}
                  width={80}
                  height={80}
                  alt="Avatar"
                  className="rounded-full mb-4"
                />
              )}
              <div className='mb-4 flex flex-row w-full justify-center items-cnter gap-4'><p className='text-sm font-semibold'>email :</p><p className="text-gray-600 text-sm">{user.email}</p></div>
              <label className="block text-gray-700 text-sm font-semibold mb-1 w-full text-start ml-2" htmlFor="name">
                Edit Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded px-4 py-2 mb-3"
              />
              <label className="block text-gray-700 text-sm font-semibold mb-1 w-full text-start ml-2" htmlFor="avatar">
                Update Your Profile Pic
              </label>
              <input
                id="avatar"
                type="file"
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="Avatar URL"
                className="w-full border border-gray-300 rounded px-4 py-2 mb-3 text-base"
              />
              {error && <p className='text-red-500 text-sm mb-2'>{error}</p>}
              <button
                className="w-full bg-blue-600 text-white rounded px-4 py-2"
                onClick={handleEditProfile}
              >
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default AuthModal;