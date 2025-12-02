'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'

interface PayStackPaymentFormProps {
  type: string
  title: string
  description: string
}

export default function PayStackPaymentForm({
  type,
  title,
  description,
}: PayStackPaymentFormProps) {
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null)

  const presets = [1000, 5000, 10000, 25000]

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || (!amount && selectedPreset === null)) {
      alert('Please fill in all fields')
      return
    }

    const paymentAmount = selectedPreset || parseInt(amount)

    setLoading(true)

    try {
      // Initialize PayStack payment
      const response = await fetch('/api/paystack/initialize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type,
          amount: paymentAmount * 100, // PayStack uses kobo
          email,
        }),
      })

      const data = await response.json()

      if (data.authorization_url) {
        // Redirect to PayStack payment page
        window.location.href = data.authorization_url
      } else {
        alert('Payment initialization failed')
      }
    } catch (error) {
      console.error('Payment error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg p-8 border border-border max-w-md mx-auto">
      <h2 className="font-serif text-2xl font-bold text-primary mb-2">{title}</h2>
      <p className="text-muted-foreground mb-8">{description}</p>

      <form onSubmit={handlePayment} className="space-y-6">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Email Address
          </label>
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Amount Presets */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Quick Amount
          </label>
          <div className="grid grid-cols-2 gap-2">
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setSelectedPreset(preset)
                  setAmount('')
                }}
                className={`py-2 px-3 rounded-lg border-2 font-medium text-sm transition-all ${
                  selectedPreset === preset
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary'
                }`}
              >
                {preset.toLocaleString()} NGN
              </button>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Or enter custom amount
          </label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setSelectedPreset(null)
              }}
              min="100"
            />
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              NGN
            </span>
          </div>
        </div>

        {/* Total */}
        {(amount || selectedPreset) && (
          <div className="bg-muted rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
            <p className="font-serif text-2xl font-bold text-primary">
              {(selectedPreset || parseInt(amount)).toLocaleString()} NGN
            </p>
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          className="w-full"
          disabled={loading || (!amount && selectedPreset === null)}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 animate-spin" size={18} />
              Processing...
            </>
          ) : (
            'Proceed to Payment'
          )}
        </Button>

        {/* Security Note */}
        <p className="text-xs text-muted-foreground text-center">
          Powered by PayStack. Your payment information is secure and encrypted.
        </p>
      </form>
    </div>
  )
}
