// API Integration Layer for Laravel Backend
// Replace API_BASE_URL with your actual backend URL
// Add NEXT_PUBLIC_API_TOKEN to your environment variables for authentication

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.church.com'
const API_TOKEN = process.env.NEXT_PUBLIC_API_TOKEN || ''

interface FetchOptions extends RequestInit {
  params?: Record<string, string | number | boolean>
}

async function apiCall<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { params, ...fetchOptions } = options

  // Build URL with query parameters
  let url = `${API_BASE_URL}${endpoint}`
  if (params) {
    const searchParams = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      searchParams.append(key, String(value))
    })
    url += `?${searchParams.toString()}`
  }

  // Set up headers
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...fetchOptions.headers,
  }

  if (API_TOKEN) {
    headers['Authorization'] = `Bearer ${API_TOKEN}`
  }

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('[API Error]', endpoint, error)
    throw error
  }
}

// Sermons
export async function getSermons(page = 1, limit = 12) {
  return apiCall('/api/sermons', {
    params: { page, limit },
  })
}

export async function getSermonById(id: string) {
  return apiCall(`/api/sermons/${id}`)
}

// News
export async function getNews(page = 1, limit = 12) {
  return apiCall('/api/news', {
    params: { page, limit },
  })
}

export async function getNewsById(id: string) {
  return apiCall(`/api/news/${id}`)
}

// Programmes
export async function getProgrammes(page = 1, limit = 12) {
  return apiCall('/api/programmes', {
    params: { page, limit },
  })
}

export async function getProgrammeById(id: string) {
  return apiCall(`/api/programmes/${id}`)
}

// Departments
export async function getDepartments() {
  return apiCall('/api/departments')
}

export async function getDepartmentById(id: string) {
  return apiCall(`/api/departments/${id}`)
}

// Ministers
export async function getMinisters() {
  return apiCall('/api/ministers')
}

export async function getMinisterById(id: string) {
  return apiCall(`/api/ministers/${id}`)
}

// Gallery
export async function getGallery(category?: string, tags?: string[]) {
  return apiCall('/api/gallery', {
    params: {
      ...(category && { category }),
      ...(tags?.length && { tags: tags.join(',') }),
    },
  })
}

// Giving - Create payment with PayStack
export async function createPayment(type: string, amount: number, email: string) {
  return apiCall('/api/giving', {
    method: 'POST',
    body: JSON.stringify({
      type,
      amount,
      email,
    }),
  })
}

// Mock data fallbacks (for development)
export const mockSermons = [
  {
    id: '1',
    title: 'The Power of Faith',
    description: 'Understanding how faith shapes our spiritual journey',
    date: '2025-11-10',
    preacher: 'Pastor John Doe',
    video_url: '/placeholder.svg',
    audio_url: null,
    duration: '45 mins',
    category: 'Main Service',
    views: "1.5k"
  },
  {
    id: '2',
    title: 'Walking in the Spirit',
    description: 'A practical guide to living a spirit-filled life',
    date: '2025-11-03',
    preacher: 'Pastor Jane Smith',
    video_url: '/placeholder.svg',
    audio_url: null,
    duration: '40 mins',
    category: 'Main Service',
    views: "1.5k"
  },
]

export const mockNews = [
  {
    id: '1',
    title: 'Annual Youth Convention Announced',
    content: 'Join us for an exciting weekend of worship, teaching, and fellowship',
    date: '2025-11-12',
    author: 'Communications Team',
    featured_image: '/placeholder.svg',
    category: 'Events',
  },
  {
    id: '2',
    title: 'New Prayer Room Now Open',
    content: 'Dedicated space for intercession and prayer meetings',
    date: '2025-11-08',
    author: 'Communications Team',
    featured_image: '/placeholder.svg',
    category: 'Announcements',
  },
]

export const mockDepartments = [
  {
    id: '1',
    name: 'Youth Ministry',
    description: 'Engaging young people in worship and spiritual growth',
    leader: 'Brother David',
    image: 'https://placeholder.svg?height=300&width=400&query=youth-ministry',
    contact_email: 'youth@church.com',
  },
  {
    id: '2',
    name: 'Ushering Department',
    description: 'Welcoming and serving our congregation',
    leader: 'Sister Mary',
    image: 'https://placeholder.svg?height=300&width=400&query=ushering',
    contact_email: 'ushers@church.com',
  },
]

export const mockMinisters = [
  {
    id: '1',
    name: 'Pastor John Doe',
    title: 'Senior Pastor',
    bio: 'Called to ministry in 2000, Pastor John brings years of experience in leading and teaching',
    image: 'https://placeholder.svg?height=400&width=300&query=pastor-john',
    social_links: [],
  },
]
