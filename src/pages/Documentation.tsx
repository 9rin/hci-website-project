const Documentation = () => {
  const documents = [
    {
      id: 1,
      title: '프로젝트 제안서',
      description: '프로젝트의 목표, 범위 및 초기 계획을 담은 제안서입니다.',
      pdfUrl: '/docs/proposal.pdf',
      pages: 15,
      date: '2024.03.01',
    },
    {
      id: 2,
      title: '사용자 리서치 보고서',
      description: '타겟 사용자 인터뷰 및 설문조사 결과를 정리한 보고서입니다.',
      pdfUrl: '/docs/user-research.pdf',
      pages: 28,
      date: '2024.03.15',
    },
    {
      id: 3,
      title: '디자인 명세서',
      description: '인터페이스 디자인 가이드라인과 컴포넌트 명세를 포함합니다.',
      pdfUrl: '/docs/design-spec.pdf',
      pages: 42,
      date: '2024.04.10',
    },
    {
      id: 4,
      title: '최종 보고서',
      description: '프로젝트 전체 과정과 결과를 종합한 최종 보고서입니다.',
      pdfUrl: '/docs/final-report.pdf',
      pages: 56,
      date: '2024.05.20',
    },
    {
      id: 5,
      title: '사용성 평가 결과',
      description: '프로토타입 사용성 테스트 및 평가 결과 분석 보고서입니다.',
      pdfUrl: '/docs/usability-test.pdf',
      pages: 32,
      date: '2024.05.05',
    },
    {
      id: 6,
      title: '기술 문서',
      description: '시스템 아키텍처 및 구현 기술에 대한 상세 문서입니다.',
      pdfUrl: '/docs/technical-doc.pdf',
      pages: 38,
      date: '2024.04.25',
    },
    {
      id: 7,
      title: '요구사항 분석서',
      description: '사용자 요구사항 분석 및 기능 명세를 담은 문서입니다.',
      pdfUrl: '/docs/requirements.pdf',
      pages: 24,
      date: '2024.03.20',
    },
    {
      id: 8,
      title: '프로젝트 회고록',
      description: '프로젝트 진행 과정의 인사이트와 배운 점을 정리했습니다.',
      pdfUrl: '/docs/retrospective.pdf',
      pages: 18,
      date: '2024.05.30',
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            Documentation
          </h1>
          <p className="text-xl text-gray-600">
            프로젝트 관련 문서를 확인하고 다운로드하실 수 있습니다
          </p>
        </div>

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="group bg-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">📄</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {doc.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {doc.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                <span>{doc.pages} 페이지</span>
                <span>{doc.date}</span>
              </div>

              {/* Download Button */}
              <a
                href={doc.pdfUrl}
                download
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                PDF 다운로드
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Documentation
