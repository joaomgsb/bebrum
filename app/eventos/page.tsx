import { EventsHero } from "@/components/sections/events-hero"
import { UpcomingEvents } from "@/components/sections/upcoming-events"
import { EventsGallery } from "@/components/sections/events-gallery"
import { EventsBooking } from "@/components/sections/events-booking"

export default function EventsPage() {
  return (
    <div className="min-h-screen">
      <EventsHero />
      <UpcomingEvents />
      <EventsGallery />
      <EventsBooking />
    </div>
  )
}