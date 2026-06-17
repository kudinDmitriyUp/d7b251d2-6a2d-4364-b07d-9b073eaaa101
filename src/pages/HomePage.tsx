import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesArrowCards from '@/components/sections/features/FeaturesArrowCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TestimonialMarqueeOverlayCards from '@/components/sections/testimonial/TestimonialMarqueeOverlayCards';
import { Clock, Coffee } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroOverlay
      tag="Veletržní 839/49, Praha 7"
      title="Your Neighborhood Specialty Coffee Spot"
      description="Experience industrial charm, artisan pastries, and professional coffee in the heart of Prague 7-Holešovice."
      primaryButton={{
        text: "View Menu",
        href: "#menu",
      }}
      secondaryButton={{
        text: "Directions",
        href: "#contact",
      }}
      imageSrc="https://images.pexels.com/photos/31358912/pexels-photo-31358912.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="About Us"
      title="Industrial Style, Relaxed Atmosphere"
      description="Cafe Hrnek is a discreet neighborhood gem. We serve more than just great coffee; we provide a space to slow down and enjoy the small moments in a curated, industrial-inspired setting."
      items={[
        {
          icon: Coffee,
          title: "Specialty Coffee",
          description: "Professional brewing techniques featuring flat whites and artisanal roasts.",
        },
        {
          icon: Coffee,
          title: "Homemade Food",
          description: "Fresh cinnamon pastries, mozzarella toast, and seasonal breakfast options.",
        },
        {
          icon: Clock,
          title: "Relaxed Vibe",
          description: "The perfect spot for your morning ritual or an afternoon of slow work.",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/4790053/pexels-photo-4790053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesArrowCards
      tag="Our Highlights"
      title="More Than a Cafe"
      description="Discover why our guests return time and time again."
      items={[
        {
          title: "Artisan Coffee Culture",
          tags: [
            "Specialty",
            "Fresh",
          ],
          imageSrc: "https://images.pexels.com/photos/30444143/pexels-photo-30444143.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Gourmet Breakfasts",
          tags: [
            "Healthy",
            "Freshly Made",
          ],
          imageSrc: "https://images.pexels.com/photos/7071232/pexels-photo-7071232.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Industrial Atmosphere",
          tags: [
            "Relaxing",
            "Cool Vibe",
          ],
          imageSrc: "https://images.pexels.com/photos/29205832/pexels-photo-29205832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="menu" data-section="menu">
    <SectionErrorBoundary name="menu">
          <FeaturesImageBento
      tag="Popular Menu Items"
      title="Curated Treats"
      description="From perfect flat whites to our signature cinnamon buns."
      items={[
        {
          title: "Cinnamon Roll",
          description: "Warm, soft, and perfectly spiced.",
          imageSrc: "https://images.pexels.com/photos/9949102/pexels-photo-9949102.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Flat White",
          description: "Professionally prepared specialty coffee.",
          imageSrc: "https://images.pexels.com/photos/4671862/pexels-photo-4671862.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Scrambled Eggs",
          description: "On homemade bread with fresh spread.",
          imageSrc: "https://images.pexels.com/photos/27554108/pexels-photo-27554108.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Mozzarella Toast",
          description: "Crispy, fresh, and accurate.",
          imageSrc: "https://images.pexels.com/photos/15512508/pexels-photo-15512508.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Granola Bowl",
          description: "Seasonal yogurt with house granola.",
          imageSrc: "https://images.pexels.com/photos/19933488/pexels-photo-19933488.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Cappuccino",
          description: "Classic Italian style coffee.",
          imageSrc: "https://images.pexels.com/photos/31875562/pexels-photo-31875562.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Banana Bread",
          description: "A favorite neighborhood classic.",
          imageSrc: "https://images.pexels.com/photos/32106689/pexels-photo-32106689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialMarqueeOverlayCards
      tag="What Guests Say"
      title="Loved by the Neighborhood"
      description="Join 770+ reviewers who rated us 4.7/5 stars."
      testimonials={[
        {
          name: "Sagit Tohar",
          role: "Local Guide",
          company: "Visitor",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/36342215/pexels-photo-36342215.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Verena Geiregger",
          role: "Local Guide",
          company: "Traveler",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/9210490/pexels-photo-9210490.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "C S P",
          role: "Local Guide",
          company: "Regular",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/33421713/pexels-photo-33421713.png?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Anonymous Guest",
          role: "Customer",
          company: "Neighborhood",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/8936935/pexels-photo-8936935.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          name: "Coffee Lover",
          role: "Visitor",
          company: "Prague 7",
          rating: 5,
          imageSrc: "https://images.pexels.com/photos/29291840/pexels-photo-29291840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Visit Us"
      text="Open daily until 6pm. Visit us at Veletržní 839/49, Praha 7-Holešovice."
      primaryButton={{
        text: "Get Directions",
        href: "https://maps.app.goo.gl/4bZL24RM8KhbPvDWA",
      }}
      secondaryButton={{
        text: "Call +420 608 672 661",
        href: "tel:+420608672661",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
