'use client'

import Image, { type StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function WorkFlow() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  type Step = {
    id: number
    title: string
    subtitle: string
    icon: string | StaticImageData
    iconAlt?: string
    iconWrapperClass?: string
    color: string
    description: string
    details: string[]
    bgGradient: string
  }

  const renderIcon = (icon: string | StaticImageData, alt: string, size = 48) => {
    if (typeof icon === 'string') {
      return (
        <span
          className="inline-flex items-center justify-center"
          style={{ fontSize: `${size}px` }}
          aria-label={alt}
        >
          {icon}
        </span>
      )
    }

    return (
      <Image
        src={icon}
        alt={`${alt} 아이콘`}
        width={size}
        height={size}
        className="drop-shadow-lg"
      />
    )
  }

  // 7개 개발 플로우 데이터
  const workflowSteps: Step[] = [
    {
      id: 1,
      title: '언어 선택',
      subtitle: 'Language',
      icon: '💻',
      color: 'blue',
      description: '프로젝트에 적합한 프로그래밍 언어를 선택하고 개발 환경을 구성합니다.',
      details: [
        'JavaScript',
        'TypeScript',
        'ESLint/Prettier',
        'VS Code',
        'Node.js 환경'
      ],
      bgGradient: 'from-red-400 to-orange-400'
    },
    {
      id: 2,
      title: '프로젝트 기획',
      subtitle: 'Planning',
      icon: '📋',
      color: 'purple',
      description: '요구사항 분석과 프로젝트 구조를 설계하고 일정을 계획합니다.',
      details: [
        '프로젝트 문서화',
        '업무 플로우 설계',
        '팀 협업 관리',
        '데이터베이스 설계',
        '일정 관리'
      ],
      bgGradient: 'from-orange-400 to-yellow-400'
    },
    {
      id: 3,
      title: 'UI/UX 디자인',
      subtitle: 'Design',
      icon: '🎨',
      color: 'pink',
      description: '사용자 경험을 고려한 인터페이스를 디자인하고 프로토타입을 제작합니다.',
      details: [
        '프로토타이핑',
        'UI 컴포넌트 디자인',
        '사용자 플로우 설계',
        '반응형 디자인',
        '디자인 시스템 구축'
      ],
      bgGradient: 'from-yellow-400 to-green-400'
    },
    {
      id: 4,
      title: '프론트엔드 개발',
      subtitle: 'Frontend',
      icon: '🖥️',
      color: 'green',
      description: '사용자 인터페이스를 구현하고 인터랙티브한 웹 애플리케이션을 개발합니다.',
      details: [
        'Next.js',
        'React',
        'Tailwind CSS',
        'TypeScript',
        '상태 관리'
      ],
      bgGradient: 'from-green-400 to-blue-400'
    },
    {
      id: 5,
      title: '백엔드 개발',
      subtitle: 'Backend',
      icon: '⚙️',
      color: 'orange',
      description: '서버 로직과 데이터베이스를 구축하고 API를 개발합니다.',
      details: [
        'Supabase',
        'PostgreSQL',
        '인증 시스템',
        '실시간 데이터베이스',
        '파일 스토리지'
      ],
      bgGradient: 'from-blue-400 to-indigo-400'
    },
    {
      id: 6,
      title: '배포 및 운영',
      subtitle: 'Deployment',
      icon: '🚀',
      color: 'red',
      description: '클라우드 플랫폼에 배포하고 모니터링 시스템을 구축합니다.',
      details: [
        'Vercel 배포',
        '도메인 설정',
        '자동 배포',
        '성능 모니터링',
        'CDN 최적화'
      ],
      bgGradient: 'from-indigo-400 to-purple-400'
    },
    {
      id: 7,
      title: 'AI 통합',
      subtitle: 'AI Integration',
      icon: '🤖',
      color: 'cyan',
      description: 'AI 기술을 활용하여 서비스의 가치를 향상시키고 자동화를 구현합니다.',
      details: [
        'Cursor AI',
        '코드 자동완성',
        '코드 리뷰',
        '디버깅 지원',
        '개발 효율성 향상'
      ],
      bgGradient: 'from-purple-400 to-pink-400'
    }
  ]

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
    >
      {/* 섹션 헤더 */}
      <motion.div 
        className="text-center pt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          개발 플로우
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          체계적인 개발 과정을 통한 완성도 높은 프로젝트 구현하고자 하였습니다.
        </p>
      </motion.div>

      {/* 개발 플로우 카드들 */}
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex overflow-x-auto pb-4">
          {workflowSteps.map((step, index) => (
            <div
              key={step.id}
              className={`relative cursor-pointer transition-all duration-500 ease-in-out overflow-hidden shadow-lg ${
                hoveredCard === index 
                  ? 'flex-[2] min-w-[400px]' 
                  : 'flex-[0.5] min-w-[80px]'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* 배경 그라디언트 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-90`} />
              
              {/* 카드 내용 */}
              <div className="relative h-[680px] p-6 text-white flex flex-col">
                
                {/* 축소된 상태 */}
                {hoveredCard !== index && (
                  <motion.div 
                    className="flex flex-col items-center justify-center h-full text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-3 flex items-center justify-center">
                      {renderIcon(step.icon, step.iconAlt ?? step.title, 44)}
                    </div>
                    <div className="text-sm font-medium text-white drop-shadow-lg">
                      {step.id === 1 && "언어"}
                      {step.id === 2 && "기획"}
                      {step.id === 3 && "디자인"}
                      {step.id === 4 && "프론트엔드"}
                      {step.id === 5 && "백엔드"}
                      {step.id === 6 && "배포"}
                      {step.id === 7 && "AI"}
                    </div>
                    <div className="text-xs text-white drop-shadow-md mt-1 opacity-80">
                      {step.id === 1 && "TypeScript"}
                      {step.id === 2 && "Notion"}
                      {step.id === 3 && "Figma"}
                      {step.id === 4 && "Next.js"}
                      {step.id === 5 && "Supabase"}
                      {step.id === 6 && "Vercel"}
                      {step.id === 7 && "Cursor"}
                    </div>
                  </motion.div>
                )}

                {/* 확장된 상태 */}
                {hoveredCard === index && (
                  <motion.div 
                    className="h-full flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {/* 헤더 */}
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="shrink-0">
                          {renderIcon(step.icon, step.iconAlt ?? step.title)}
                        </span>
                        <div>
                          <div className="text-2xl font-bold text-white drop-shadow-lg">{step.title}</div>
                          <div className="text-sm opacity-90 text-white drop-shadow-md">{step.subtitle}</div>
                        </div>
                      </div>
                      <div className="text-sm leading-relaxed opacity-95 text-white drop-shadow-md">
                        {step.description}
                      </div>
                    </div>

                    {/* 상세 내용 */}
                    <div className="flex-1 mb-6">
                      <h4 className="text-lg font-semibold mb-4 opacity-95 text-white drop-shadow-md">주요 기술 스택</h4>
                      <div className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 p-2"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                          >
                            <div className="w-3 h-3 bg-white rounded-full opacity-80" />
                            <span className="text-sm opacity-90 font-medium text-white drop-shadow-sm">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* 추가 정보 섹션 */}
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3 opacity-95 text-white drop-shadow-md">핵심 포인트</h4>
                        <div className="text-sm opacity-90 leading-relaxed text-white drop-shadow-sm">
                          {step.id === 1 && "TypeScript는 타입 안정성을 제공하여 개발 과정에서 오류를 줄이고 코드 품질을 향상시킵니다. 대규모 프로젝트에서 특히 유용합니다."}
                          {step.id === 2 && "Notion은 프로젝트 관리와 문서화를 한 곳에서 처리할 수 있게 해줍니다. 팀 협업과 지식 관리를 효율적으로 지원합니다."}
                          {step.id === 3 && "Figma는 협업 중심의 디자인 도구로 실시간 피드백과 프로토타이핑을 통해 아이디어를 빠르게 구체화할 수 있습니다."}
                          {step.id === 4 && "Next.js는 React 기반의 풀스택 프레임워크로 SSR, 라우팅, 최적화 기능을 제공하여 현대적인 웹 애플리케이션을 구축할 수 있습니다."}
                          {step.id === 5 && "Supabase는 PostgreSQL 기반의 BaaS로 실시간 데이터베이스, 인증, 스토리지를 통합 제공하여 빠른 개발을 가능하게 합니다."}
                          {step.id === 6 && "Vercel은 Next.js와 완벽하게 통합되어 자동 배포, CDN, 성능 최적화를 제공하여 개발자 경험을 크게 향상시킵니다."}
                          {step.id === 7 && "Cursor AI는 코드 작성부터 리뷰, 디버깅까지 개발 전 과정을 지원하여 개발 생산성을 혁신적으로 개선합니다."}
                        </div>
                      </div>
                    </div>

                  </motion.div>
                )}
              </div>

            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
