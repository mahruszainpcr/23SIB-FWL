import { useNavigate } from "react-router-dom";


export default function CreateAcc() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/login");
  }

  return (
    <div className="flex items-center justify-center h-screen  bg-blue-500">
      <div className="bg-white rounded-[14px] h-[650px] w-[735px] mt-2 shadow-lg">
        {/* Header */}
        <div className="flex justify-center items-center flex-col p-10">
          <h1 className="text-[24px] font-bold mb-2">Create an Account</h1>
          <p className="text-[15px] mb-6 text-gray-600">
            Create a account to continue
          </p>
        </div>

        {/* Form */}
        <div className="px-10 space-y-6">
          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Email Address</label>
            <input
              type="email"
              placeholder="keisha@gmail.com"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-2">Username</label>
            <input
              type="email"
              placeholder="Username"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold">Password</label>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-500">
                Forget Password?
              </a>
            </div>
            <input
              type="password"
              placeholder="********"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Remember Password */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 border-gray-300 rounded"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              I accept terms and conditions
            </label>
          </div>

          {/* Login Button */}
          <div>
            <button
              onClick={handleLogin}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
             Sign Up
            </button>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="flex items-center justify-center text-gray-600 text-sm">
             Already have an account?
            </h1>
            <a href="Login" className="text-blue-500 ml-1">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
