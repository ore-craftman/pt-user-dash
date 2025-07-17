const Login = () => {
  return (
   <div className="tw-flex tw-items-center tw-justify-center tw-h-screen tw-bg-gray-100">
      <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-w-96">
        <h2 className="tw-text-2xl tw-font-bold tw-text-center tw-mb-6">Login</h2>
        <form>
          <div className="tw-mb-4">
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="tw-mb-6">
            <label className="tw-block tw-text-sm tw-font-medium tw-text-gray-700" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="tw-w-full tw-px-3 tw-py-2 tw-border tw-border-gray-300 tw-rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="tw-w-full tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-font-semibold tw-py-2 tw-rounded-md"
          >
            Login
          </button>
        </form>
        <p className="tw-text-sm tw-text-center tw-mt-4">
          Don't have an account? <a href="/signup" className="tw-text-blue-600 hover:tw-text-blue-700">Sign Up</a>
        </p>
      </div>
    </div>
  );
};
export default Login;
