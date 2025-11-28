const Documentation = () => {
  const documents = [
    {
      id: 1,
      title: 'Needfinding',
      pdfUrl: '/docs/1.pdf',
      imageUrl: '/docs/1.png',
      pages: 15,
      date: '2024.03.01',
    },
    {
      id: 2,
      title: 'Point of View & Experience Prototypes',
      pdfUrl: '/docs/2.pdf',
      imageUrl: '/docs/2.png',
      pages: 28,
      date: '2024.03.15',
    },
    {
      id: 3,
      title: 'Concept Video',
      pdfUrl: '/docs/3.pdf',
      imageUrl: '/docs/3.png',
      pages: 42,
      date: '2024.04.10',
    },
    {
      id: 4,
      title: 'Low-Fidelity Prototype & Test',
      pdfUrl: '/docs/4.pdf',
      imageUrl: '/docs/4.png',
      pages: 56,
      date: '2024.05.20',
    },
    {
      id: 5,
      title: 'Medium-fi Prototype',
      pdfUrl: '/docs/5.pdf',
      imageUrl: '/docs/5.png',
      pages: 32,
      date: '2024.05.05',
    },
    {
      id: 6,
      title: 'Group Heuristic Evaluation',
      pdfUrl: '/docs/heuristic-evaluation.pdf',
      imageUrl: '/docs/6.png',
      pages: 38,
      date: '2024.04.25',
    },
    {
      id: 7,
      title: 'Hi-fidelity Prototype',
      pdfUrl: '/docs/hifi-prototype.pdf',
      imageUrl: '/docs/7.png',
      pages: 24,
      date: '2024.03.20',
    },
    {
      id: 8,
      title: 'Poster & Pitch Slide',
      pdfUrl: '/docs/poster-pitch.pdf',
      imageUrl: '/docs/8.png',
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
              className="group bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200"
            >
              {/* Image Section */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={doc.imageUrl}
                  alt={doc.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug min-h-[3rem]">
                  {doc.title}
                </h3>

                {/* Meta Info */}
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Documentation
