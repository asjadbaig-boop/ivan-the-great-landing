import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import LeadMagnetForm from '../components/LeadMagnetForm'
import MarqueeTicker from '../components/MarqueeTicker'
import PainPoints from '../components/PainPoints'
import TheCoach from '../components/TheCoach'
import WhatYouGet from '../components/WhatYouGet'
import MemberTransformations from '../components/MemberTransformations'
import VideoTestimonials from '../components/VideoTestimonials'
import CommunityWins from '../components/CommunityWins'
import Pricing from '../components/Pricing'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <LeadMagnetForm />
      <MarqueeTicker />
      <PainPoints />
      <TheCoach />
      <WhatYouGet />
      <MemberTransformations />
      <VideoTestimonials />
      <CommunityWins />
      <Pricing />
      <Footer />
    </>
  )
}
