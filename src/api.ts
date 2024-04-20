import type { FetchOptions } from 'ofetch'
import { $fetch } from 'ofetch'
import { defu } from 'defu'

interface GitHubIssue {
  title: string
  body: string
  number: number
  state: 'open' | 'closed'
  labels: { name: string }[]
  user: { login: string }
  comments: number
  comments_url: string
  assignees: string[]
  milestone: string
  created_at: string
  updated_at: string
  closed_at: string
  reactions: {
    '+1': number
    '-1': number
    'laugh': number
    'hooray': number
    'confused': number
    'heart': number
    'rocket': number
    'eyes': number
  }
  pull_request?: unknown
}

interface GitHubComment {
  body: string
  created_at: string
  user: {
    login: string
  }
}

const $gh = $fetch.create({
  headers: {
    'accept': 'application/vnd.github+json',
    'x-github-api-version': '2022-11-28',
  },
})

async function batchedFetch<T = unknown>(url: string, options?: FetchOptions) {
  const items: T[] = []
  let batch: T[]

  let page = 1
  do {
    batch = await $gh<T[]>(url, defu({
      query: {
        per_page: 100,
        page,
      },
    }, options))
    items.push(...batch)
    page++
  } while (batch && batch.length === 100)

  return items
}

export function fetchIssueComments(repo: string, issue: string | number) {
  return batchedFetch<GitHubComment>(`https://api.github.com/repos/${repo}/issues/${issue}/comments`)
}

export function fetchIssues(repo: string, options?: { closed?: boolean }) {
  return batchedFetch<GitHubIssue>(`https://api.github.com/repos/${repo}/issues`, {
    query: {
      state: options?.closed ? 'all' : 'open',
    },
  })
}
