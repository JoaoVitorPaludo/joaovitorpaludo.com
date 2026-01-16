import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { getGithubRepositories } from '../../../../controller/home/projects/projects.controller'

interface Project {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string | null
  topics: string[]
  language: string
  stargazers_count: number
}

export const useProjects = () => {
  const { t } = useTranslation('projects')
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  useEffect(() => {
    const handleGetRepositories = async () => {
      try {
        const { data } = await getGithubRepositories()
        console.log(data)
        setProjects(data)
      } catch (error) {
      } finally {
        setLoading(false)
      }
    }
    handleGetRepositories()
  }, [])

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex(
      (prev) => (prev - 1 + projects.length) % projects.length,
    )
  }

  return {
    projects,
    loading,
    currentProjectIndex,
    setLoading,
    nextProject,
    prevProject,
    t,
    setCurrentProjectIndex,
  }
}
