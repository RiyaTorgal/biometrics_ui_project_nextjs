// app/page.tsx
import {HeroSection} from "./components/HeroSection"
import {AboutSection} from "./components/AboutSection"
import {ServicesSection} from "./components/ServicesSection"
import {TrainingsSection} from "./components/TrainingsSection"
import {EventsSection} from "./components/EventsSection"
// import {GallerySection} from "./components/GallerySection"
import {StatsSection} from "./components/StatsSection"
import {ResourcesSection} from "./components/ResourcesSection"
import {ContactSection} from "./components/ContactSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TrainingsSection />
      <EventsSection />
      {/* <GallerySection /> */}
      <StatsSection />
      <ResourcesSection />
      <ContactSection />
    </>
  )
}
