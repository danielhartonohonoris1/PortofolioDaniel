'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'

import { useState } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/utils/service/Fetcher'
import { IProject } from '@/utils/interface/Project'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { GithubStats } from '@/components/common/GithubStats'

export default function Project() {
  const [filter, setFilter] = useState('all')

  const { data, isLoading, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL as string}/project`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false },
  )

  return (
    <div className="">
      <TextSection icon="⚒️" text="it's My Projects." />
      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
      </div>
    </div>
  )
}
