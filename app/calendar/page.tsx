export default function CalendarPage() {
  const events = [
    { date: '2025-11-16', day: 'Sunday', title: 'Worship Service', time: '9:00 AM' },
    { date: '2025-11-16', day: 'Sunday', title: 'Worship Service', time: '12:00 PM' },
    { date: '2025-11-19', day: 'Wednesday', title: 'Prayer Meeting', time: '7:00 PM' },
    { date: '2025-11-23', day: 'Sunday', title: 'Youth Fellowship', time: '5:00 PM' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Church Calendar
          </h1>
          <p className="text-lg opacity-90">
            Upcoming events and programmes
          </p>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {events.map((event, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-border hover:border-secondary transition-colors"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-secondary font-semibold text-sm">
                        {event.day}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {new Date(event.date).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-primary">
                      {event.title}
                    </h3>
                  </div>
                  <div className="text-lg font-semibold text-primary min-w-fit">
                    {event.time}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Download Calendar */}
          <div className="mt-12 p-6 bg-muted rounded-lg text-center">
            <p className="text-muted-foreground mb-4">
              Add our events to your calendar
            </p>
            <button className="text-secondary font-semibold hover:underline">
              Download Calendar (.ics)
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
