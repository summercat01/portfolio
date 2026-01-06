'use client'

import Image, { type StaticImageData } from 'next/image'
import { motion } from 'framer-motion'
import { useMemo } from 'react'

import AWSIcon from '@/assets/icons/AWS-Light.svg'
import CloudflareIcon from '@/assets/icons/Cloudflare-Light.svg'
import CSSIcon from '@/assets/icons/CSS.svg'
import CIcon from '@/assets/icons/C.svg'
import CursorIcon from '@/assets/icons/Cursor.svg'
import DockerIcon from '@/assets/icons/Docker.svg'
import FastAPIIcon from '@/assets/icons/FastAPI.svg'
import FigmaIcon from '@/assets/icons/Figma.svg'
import NotionIcon from '@/assets/icons/Notion.svg'
import FirebaseIcon from '@/assets/icons/Firebase-Light.svg'
import GitIcon from '@/assets/icons/Git.svg'
import GithubIcon from '@/assets/icons/Github-Dark.svg'
import GithubActionsIcon from '@/assets/icons/GithubActions-Dark.svg'
import GoIcon from '@/assets/icons/GoLang.svg'
import GradleIcon from '@/assets/icons/Gradle-Light.svg'
import HTMLIcon from '@/assets/icons/HTML.svg'
import HerokuIcon from '@/assets/icons/Heroku.svg'
import IdeaIcon from '@/assets/icons/Idea-Dark.svg'
import JavaIcon from '@/assets/icons/Java-Light.svg'
import JavaScriptIcon from '@/assets/icons/JavaScript.svg'
import LinuxIcon from '@/assets/icons/Linux-Light.svg'
import KubernetesIcon from '@/assets/icons/Kubernetes.svg'
import MySQLIcon from '@/assets/icons/MySQL-Dark.svg'
import MarkdownIcon from '@/assets/icons/Markdown-Light.svg'
import NestIcon from '@/assets/icons/NestJS-Dark.svg'
import NetlifyIcon from '@/assets/icons/Netlify-Light.svg'
import NextIcon from '@/assets/icons/NextJS-Light.svg'
import NginxIcon from '@/assets/icons/Nginx.svg'
import NodeIcon from '@/assets/icons/NodeJS.svg'
import PostgreSQLIcon from '@/assets/icons/PostgreSQL-Dark.svg'
import PrismaIcon from '@/assets/icons/Prisma.svg'
import PhotoshopIcon from '@/assets/icons/Photoshop.svg'
import PostmanIcon from '@/assets/icons/Postman.svg'
import PythonIcon from '@/assets/icons/Python-Light.svg'
import ReactIcon from '@/assets/icons/React.svg'
import RedisIcon from '@/assets/icons/Redis-Dark.svg'
import SQLiteIcon from '@/assets/icons/SQLite.svg'
import SpringIcon from '@/assets/icons/Spring-Light.svg'
import StyledIcon from '@/assets/icons/StyledComponents.svg'
import SupabaseIcon from '@/assets/icons/Supabase-Dark.svg'
import TailwindIcon from '@/assets/icons/TailwindCSS-Light.svg'
import TsIcon from '@/assets/icons/TypeScript.svg'
import UnityIcon from '@/assets/icons/Unity-Dark.svg'
import VercelIcon from '@/assets/icons/Vercel-Light.svg'
import VisualStudioIcon from '@/assets/icons/VisualStudio-Light.svg'
import ViteIcon from '@/assets/icons/Vite-Light.svg'
import VSCodeIcon from '@/assets/icons/VSCode-Dark.svg'
import VueIcon from '@/assets/icons/Vue.svg'
import EclipseLightIcon from '@/assets/icons/Eclipse-Light.svg'
import { techTags as techTagsSource } from '@/lib/data'

const iconMap: Record<string, StaticImageData | undefined> = {
  TypeScript: TsIcon,
  JavaScript: JavaScriptIcon,
  React: ReactIcon,
  'Next.js': NextIcon,
  Vue: VueIcon,
  Vite: ViteIcon,
  TailwindCSS: TailwindIcon,
  'styled-components': StyledIcon,
  Cursor: CursorIcon,
  C: CIcon,
  'Node.js': NodeIcon,
  Docker: DockerIcon,
  NestJS: NestIcon,
  Kubernetes: KubernetesIcon,
  Supabase: SupabaseIcon,
  Prisma: PrismaIcon,
  Vercel: VercelIcon,
  MySQL: MySQLIcon,
  PostgreSQL: PostgreSQLIcon,
  SQLite: SQLiteIcon,
  Redis: RedisIcon,
  AWS: AWSIcon,
  Cloudflare: CloudflareIcon,
  Git: GitIcon,
  GitHub: GithubIcon,
  'GitHub Actions': GithubActionsIcon,
  HTML: HTMLIcon,
  CSS: CSSIcon,
  Java: JavaIcon,
  Python: PythonIcon,
  Go: GoIcon,
  Gradle: GradleIcon,
    Notion: NotionIcon,
  Figma: FigmaIcon,
  Firebase: FirebaseIcon,
  FastAPI: FastAPIIcon,
  Netlify: NetlifyIcon,
  Nginx: NginxIcon,
  Eclipse: EclipseLightIcon,
  Heroku: HerokuIcon,
  Markdown: MarkdownIcon,
  Linux: LinuxIcon,
  'VS Code': VSCodeIcon,
  'Visual Studio': VisualStudioIcon,
  Unity: UnityIcon,
  Spring: SpringIcon,
  Photoshop: PhotoshopIcon,
  Postman: PostmanIcon,
  Idea: IdeaIcon,
}

export default function NotesCounter() {
  const desiredOrder = [
    // 상단 12개 (주 사용 스택)
    'TypeScript',
    'Next.js',
    'NestJS',
    'Supabase',
    'PostgreSQL',
    'AWS',
    'Vercel',
    'Cloudflare',
    'GitHub',
    'Cursor',
    'Notion',
    'Figma',
    // 나머지
    'JavaScript',
    'Java',
    'Python',
    'Go',
    'C',
    'React',
    'Vue',
    'Vite',
    'TailwindCSS',
    'styled-components',
    'CSS',
    'HTML',
    'Node.js',
    'FastAPI',
    'Spring',
    'MySQL',
    'SQLite',
    'Redis',
    'Firebase',
    'Prisma',
    'Docker',
    'Kubernetes',
    'Netlify',
    'Heroku',
    'Linux',
    'Nginx',
    'Postman',
    'VS Code',
    'Visual Studio',
    'Eclipse',
    'Idea',
    'Unity',
    'Git',
    'GitHub Actions',
    'Gradle',
    'Photoshop',
  ]

  const orderMap = useMemo(() => {
    const map = new Map<string, number>()
    desiredOrder.forEach((name, idx) => map.set(name, idx))
    return map
  }, [desiredOrder])

  const sortedTags = useMemo(() => {
    const sorted = [...techTagsSource].sort((a, b) => {
      const aOrder = orderMap.get(a.name)
      const bOrder = orderMap.get(b.name)

      if (aOrder !== undefined && bOrder !== undefined) return aOrder - bOrder
      if (aOrder !== undefined) return -1
      if (bOrder !== undefined) return 1

      return a.name.localeCompare(b.name)
    })

    return sorted
  }, [orderMap])

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">기술 스택</h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          짧은 문장 들어갈 공간
        </p>
      </div>

      <div className="mx-auto max-w-6xl flex flex-wrap justify-start gap-2 sm:gap-3">
        {sortedTags.map((tag, index) => {
          const icon = iconMap[tag.name]
          const isLongLabel = tag.name.length > 12
          const labelSize = isLongLabel ? 'text-[10px] sm:text-[11px]' : 'text-xs sm:text-sm'
          const iconSize = tag.name === 'Notion' || tag.name === 'Cursor' ? 54 : 64

          return (
            <motion.div
              key={tag.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.22,
                delay: index * 0.02,
                scale: { duration: 0.08, ease: 'easeOut' },
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center w-16 sm:w-20 gap-2 sm:gap-3"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border ${
                  tag.name === 'Cursor' || tag.name === 'Notion'
                    ? 'bg-white border-white/80 shadow-sm'
                    : 'bg-white/5 border-white/5'
                }`}
              >
                {icon && (
                  <Image
                    src={icon}
                    alt={`${tag.name} 아이콘`}
                    width={iconSize}
                    height={iconSize}
                    className="drop-shadow-xl"
                  />
                )}
              </div>
              <span
                className={`${labelSize} font-semibold text-gray-200 text-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-150 whitespace-nowrap leading-tight`}
              >
                {tag.name}
              </span>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
