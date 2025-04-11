const Login = () => {
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-4">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to access your personalized tech content</p>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded"
            />
            <a href="#" className="text-tech-purple text-sm mt-1 inline-block">Forgot password?</a>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">Remember me</label>
          </div>
          <button type="submit" className="w-full bg-tech-purple text-white py-2 rounded">
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don't have an account? <a href="/register" className="text-tech-purple">Register</a>
        </p>
      </div>
    );
  };
  
  export default Login;