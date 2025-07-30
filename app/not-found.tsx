export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-6">
          <h1 className="text-2xl font-medium text-gray-900">404</h1>
          <div className="h-12 w-px bg-gray-300"></div>
          <p className="text-sm text-gray-600 font-normal">This page could not be found.</p>
        </div>
      </div>
    </div>
  )
}
