// API Response Types

export interface Sermon {
  id: string
  title: string
  description: string
  date: string
  preacher: string
  video_url: string
  audio_url?: string
  duration: string
  category: string
}

export interface News {
  id: string
  title: string
  content: string
  date: string
  author: string
  featured_image: string
  category: string
}

export interface Programme {
  id: string
  title: string
  date: string
  time: string
  location: string
  description: string
}

export interface Department {
  id: string
  name: string
  description: string
  leader: string
  image: string
  contact_email: string
}

export interface Minister {
  id: string
  name: string
  title: string
  bio: string
  image: string
  social_links?: string[]
}

export interface GalleryImage {
  id: string
  image_url: string
  title: string
  description: string
  date: string
  tags: string[]
  category: string
}

export interface PayStackResponse {
  status: boolean
  message: string
  data?: {
    authorization_url: string
    access_code: string
    reference: string
  }
}
