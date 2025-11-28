const Videos = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            Videos
          </h1>
          <p className="text-xl text-gray-600">
            프로젝트 컨셉 비디오와 Hi-Fi 프로토타입 데모 영상을 시청하실 수 있습니다
          </p>
        </div>

        {/* Concept Video Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            {/* Title Section */}
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🎥</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Concept Video
                </h2>
                <p className="text-gray-600">
                  프로젝트의 핵심 아이디어와 비전을 소개하는 컨셉 비디오입니다.
                </p>
              </div>
            </div>

            {/* Video Stats */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                ⏱️ 3:45
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                🎬 1080p HD
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                📅 2024.04.01
              </span>
            </div>

            {/* Video Embed */}
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Concept Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Download Button */}
            <a
              href="/videos/concept-video.mp4"
              download
              className="inline-flex items-center px-8 py-3 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
              </svg>
              비디오 다운로드 (MP4)
            </a>
          </div>
        </div>

        {/* Hi-Fi Demo Video Section */}
        <div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            {/* Title Section */}
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">▶️</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Hi-Fi Prototype Demo
                </h2>
                <p className="text-gray-600">
                  최종 프로토타입의 주요 기능과 인터랙션을 시연하는 데모 영상입니다.
                </p>
              </div>
            </div>

            {/* Video Stats */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                ⏱️ 5:20
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                🎬 4K Ultra HD
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700">
                📅 2024.05.15
              </span>
            </div>

            {/* Video Embed */}
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/YOUR_DEMO_VIDEO_ID"
                title="Hi-Fi Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Feature List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                  1
                </div>
                <div>
                  <div className="font-bold text-gray-900">사용자 온보딩</div>
                  <div className="text-sm text-gray-600">직관적인 첫 경험</div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                  2
                </div>
                <div>
                  <div className="font-bold text-gray-900">핵심 기능 데모</div>
                  <div className="text-sm text-gray-600">주요 기능 시연</div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                  3
                </div>
                <div>
                  <div className="font-bold text-gray-900">인터랙션</div>
                  <div className="text-sm text-gray-600">사용자 상호작용</div>
                </div>
              </div>
              <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                <div className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-lg flex items-center justify-center mr-3 text-sm font-bold">
                  4
                </div>
                <div>
                  <div className="font-bold text-gray-900">최종 결과</div>
                  <div className="text-sm text-gray-600">완성된 경험</div>
                </div>
              </div>
            </div>

            {/* Download Button */}
            <a
              href="/videos/hifi-demo.mp4"
              download
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
              </svg>
              비디오 다운로드 (MP4)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videos
