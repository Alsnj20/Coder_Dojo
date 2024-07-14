function AccessDenied() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-dark">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">Access Denied</h2>
        <p className="text-center text-gray-600">
          You do not have permission to access this page.
        </p>
      </div>
    </div>
  );
}

export default AccessDenied;