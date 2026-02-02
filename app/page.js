// app/page.tsx
import {HeroSection} from "./components/HeroSection"
import {AboutSection} from "./components/AboutSection"
import {ServicesSection} from "./components/ServicesSection"
import {TrainingsSection} from "./components/TrainingsSection"
import {EventsSection} from "./components/EventsSection"
import {FounderInfo} from "./components/FounderInfo"
// import {GallerySection} from "./components/GallerySection"
import {StatsSection} from "./components/StatsSection"
import {ResourcesSection} from "./components/ResourcesSection"
import {ContactSection} from "./components/ContactSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FounderInfo />
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
