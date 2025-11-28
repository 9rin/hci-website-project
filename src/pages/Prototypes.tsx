const Prototypes = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            Prototypes
          </h1>
          <p className="text-xl text-gray-600">
            프로젝트의 Mid-Fi 및 Hi-Fi 프로토타입을 확인하실 수 있습니다
          </p>
        </div>

        {/* Mid-Fi Prototype Section */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            {/* Title Section */}
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">📝</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Mid-Fidelity Prototype
                </h2>
                <p className="text-gray-600">
                  초기 디자인 컨셉과 사용자 플로우를 담은 중간 단계 프로토타입입니다.
                </p>
              </div>
            </div>

            {/* Figma Embed */}
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6">
              <iframe
                style={{ border: 'none' }}
                width="100%"
                height="100%"
                src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_MIDFI_URL"
                allowFullScreen
                title="Mid-Fi Prototype"
              ></iframe>
            </div>

            {/* Action Button */}
            <a
              href="https://www.figma.com/YOUR_MIDFI_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
              Figma에서 열기
            </a>
          </div>
        </div>

        {/* Hi-Fi Prototype Section */}
        <div>
          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            {/* Title Section */}
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🎨</div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  High-Fidelity Prototype
                </h2>
                <p className="text-gray-600">
                  최종 디자인과 인터랙션이 구현된 고품질 프로토타입입니다.
                </p>
              </div>
            </div>

            {/* Figma Embed */}
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-6">
              <iframe
                style={{ border: 'none' }}
                width="100%"
                height="100%"
                src="https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_HIFI_URL"
                allowFullScreen
                title="Hi-Fi Prototype"
              ></iframe>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-900 mb-1">✨ Interactive</div>
                <p className="text-sm text-gray-600">완전한 인터랙션 구현</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-900 mb-1">🎨 Polished</div>
                <p className="text-sm text-gray-600">세련된 비주얼 디자인</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <div className="font-bold text-gray-900 mb-1">📱 Responsive</div>
                <p className="text-sm text-gray-600">반응형 레이아웃 지원</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="/prototypes/hifi-prototype.zip"
                download
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                ZIP 다운로드
              </a>
              <a
                href="https://www.figma.com/YOUR_HIFI_LINK"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                </svg>
                Figma에서 열기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prototypes
