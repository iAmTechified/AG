import PayStackPaymentForm from '@/components/giving/paystack-payment-form'

export default function OfferingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Give an Offering
          </h1>
          <p className="text-lg opacity-90">
            Present your offerings to God as an act of worship
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PayStackPaymentForm
            type="offering"
            title="Give an Offering"
            description="Support the work of God with your offering"
          />
        </div>
      </section>
    </div>
  )
}
