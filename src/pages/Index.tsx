import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedIn from "@/components/FeaturedIn";
import ApproachSection from "@/components/ApproachSection";
import PortfolioSection from "@/components/PortfolioSection";
import DestinationsSection from "@/components/DestinationsSection";
import AlbumSection from "@/components/AlbumSection";
import TeamSection from "@/components/TeamSection";
import FullwidthPortrait from "@/components/FullwidthPortrait";
import CountersSection from "@/components/CountersSection";
import JournalSection from "@/components/JournalSection";
import BookingSection from "@/components/BookingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="custom-cursor">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <FeaturedIn />
      <ApproachSection />
      <PortfolioSection />
      <DestinationsSection />
      <AlbumSection />
      <TeamSection />
      <FullwidthPortrait />
      <CountersSection />
      <JournalSection />
      <BookingSection />
      <TestimonialsSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
