export default function Banner() {
  return (
    <div className="hero bg-base-100 text-base-content py-20">
      <div className="hero-content flex-col lg:flex-row-reverse items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1 flex justify-center lg:justify-end mb-8 lg:mb-0">
          <img
            src="/assets/images/banner.png"
            className="rounded-lg w-full"
            style={{ width: '500px', height: '590px' }}
            alt="Digital workflow illustration"
          />
        </div>
        <div className="flex-1 text-left lg:pr-12">
          <div className="badge badge-info mb-4 px-4 py-3 text-sm rounded-full border-none flex items-center w-max" style={{ backgroundColor: '#E1E7FF', color: '#4F39F6' }}>
            <span className="relative flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
            </span>
            New: AI-Powered Tools Available
          </div>
          <h1 className="text-5xl font-bold leading-tight mb-6">Supercharge Your<br />Digital Workflow</h1>
          <p className="text-lg mb-8 max-w-md">Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.</p>
          <div className="flex space-x-4">
            <button className="btn btn-primary bg-purple-600 border-none text-white px-6 py-3 rounded-full hover:bg-purple-700">Explore Products</button>
            <button className="btn btn-outline border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 hover:border-purple-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.561 0 3.273L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
