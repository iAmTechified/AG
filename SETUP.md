# Church Website Setup Guide

## Environment Variables

Add these variables to your Vercel project environment:

### Backend API
\`\`\`
NEXT_PUBLIC_API_URL=https://api.church.com
NEXT_PUBLIC_API_TOKEN=[your_laravel_api_token]
\`\`\`

### PayStack Integration
\`\`\`
PAYSTACK_SECRET_KEY=sk_test_your_paystack_secret_key
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY=pk_test_your_paystack_public_key
\`\`\`

## API Integration

The API layer is configured in `/lib/api.ts`. It expects a Laravel backend with these endpoints:

### Sermons
- `GET /api/sermons?page=1&limit=12` - List sermons
- `GET /api/sermons/{id}` - Get sermon details

### News
- `GET /api/news?page=1&limit=12` - List news articles
- `GET /api/news/{id}` - Get news article

### Programmes
- `GET /api/programmes?page=1&limit=12` - List programmes
- `GET /api/programmes/{id}` - Get programme details

### Departments
- `GET /api/departments` - List departments
- `GET /api/departments/{id}` - Get department details

### Ministers
- `GET /api/ministers` - List ministers
- `GET /api/ministers/{id}` - Get minister details

### Gallery
- `GET /api/gallery?category=&tags=` - Get gallery images

### Giving
- `POST /api/giving` - Create payment transaction

## PayStack Setup

1. Create account at https://paystack.com
2. Get your test and live keys
3. Add secret key to environment variables
4. Test payments will use test credentials

## Customization Checklist

- [ ] Update church address in footer (currently "222 Clifford Road, Aba")
- [ ] Add church phone number
- [ ] Add church email
- [ ] Update service times
- [ ] Replace placeholder images with actual church photos
- [ ] Update mission and vision statements in /about
- [ ] Add leadership team members
- [ ] Add departments/units
- [ ] Connect your Laravel backend API
- [ ] Add PayStack credentials
- [ ] Update contact form handler
- [ ] Deploy to Vercel

## Features

### ✅ Implemented
- Homepage with hero video section & ambient animations
- Sermon library with video/audio player
- News/Blog system
- Programmes listing
- Departments directory
- Leadership directory
- Dynamic photo gallery with filtering
- Online giving with PayStack integration
- About page
- Contact form
- Church calendar
- Responsive mobile design
- Beautiful design system with navy/gold colors
- Smooth animations and transitions

### 🔄 Ready for Backend Connection
All pages have fallback mock data. Simply update `NEXT_PUBLIC_API_URL` and `NEXT_PUBLIC_API_TOKEN` to connect your Laravel API.

## Mock Data

During development, the app uses mock data from `/lib/api.ts`. When your backend is ready, the app will seamlessly switch to live data while maintaining the mock fallbacks for offline functionality.

## Deployment

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel settings
4. Deploy

The app will automatically rebuild when you push changes.
