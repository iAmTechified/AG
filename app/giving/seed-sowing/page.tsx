import PayStackPaymentForm from '@/components/giving/paystack-payment-form'

export default function SeedSowingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Sow Your Seeds
          </h1>
          <p className="text-lg opacity-90">
            Plant seeds for spiritual growth and harvest blessings
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PayStackPaymentForm
            type="seed_sowing"
            title="Sow a Seed"
            description="Plant seeds in faith for spiritual growth"
          />
        </div>
      </section>
    </div>
  )
}
