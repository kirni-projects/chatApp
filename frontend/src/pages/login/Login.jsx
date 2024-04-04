import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {loading, login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
  await login(username, password);
  }
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-8 rounded-lg shadow-md bg-white/20 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Login{" "}
          <span className='text-lime-400'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type='text' placeholder='Enter Username' value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='w-full input input-bordered h-10 placeholder:text-gray-600' />
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type='password' placeholder='Enter Password' value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full input input-bordered h-10 placeholder:text-gray-600' />
          </div>

          <Link to={'/signup'} className='text-sm hover:underline text-gray-100 hover:text-white mt-2 inline-block'>{"Don't"} have an account?</Link>
          <div className='mt-2'>
            <button className='btn btn-block btn-sm-mt-2 bg-lime-400 hover:bg-gray-100' disabled={loading}>
              {loading ? <span className='loading loading-spinner'></span> : "Login" }
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;