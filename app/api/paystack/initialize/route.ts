import { NextRequest, NextResponse } from 'next/server'

// PayStack test credentials - Replace with your actual keys
const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY || 'sk_test_your_secret_key'

export async function POST(request: NextRequest) {
  try {
    const { type, amount, email } = await request.json()

    if (!amount || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        amount,
        metadata: {
          type,
        },
      }),
    })

    const data = await response.json()

    if (data.status) {
      return NextResponse.json(data.data)
    } else {
      return NextResponse.json(
        { error: 'PayStack initialization failed' },
        { status: 400 }
      )
    }
  } catch (error) {
    console.error('PayStack error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
