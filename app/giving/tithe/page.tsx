import PayStackPaymentForm from '@/components/giving/paystack-payment-form'

export default function TithePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Return Your Tithe
          </h1>
          <p className="text-lg opacity-90">
            'Bring the whole tithe into the storehouse' - Malachi 3:10
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PayStackPaymentForm
            type="tithe"
            title="Pay Your Tithe"
            description="Return the first tenth to God"
          />
        </div>
      </section>
    </div>
  )
}
