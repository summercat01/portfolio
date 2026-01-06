'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

import { techTags as techTagsSource } from '@/lib/data'

export default function NotesCounter() {
  const sortedTags = useMemo(() => [...techTagsSource].sort((a, b) => b.count - a.count), [])

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">기술 앨범</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          워드클라우드 대신 사진 앨범처럼 기술 태그를 정리했습니다. 노트에서 자주 다룬
          순서대로 색감 있는 타일로 배치해 한눈에 볼 수 있어요.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-4 sm:p-6 shadow-2xl shadow-black/20 backdrop-blur">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-4">
          {sortedTags.map((tag, index) => (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 dark:bg-white/5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.55)]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tag.color}`} />
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.14),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.16),transparent_38%)]" />
                <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
              </div>

              <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-[11px] font-semibold bg-white/70 text-gray-900 dark:bg-black/40 dark:text-white/90 shadow-sm">
                {tag.count}회
              </div>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
                <span className="text-xs uppercase tracking-[0.08em] text-white/80">#{index + 1}</span>
                <span className="mt-1 text-sm sm:text-base font-semibold text-white drop-shadow">
                  {tag.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
