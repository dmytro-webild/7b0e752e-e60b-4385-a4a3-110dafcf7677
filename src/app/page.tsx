"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterCard from '@/components/sections/footer/FooterCard';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import { Award, Leaf, Wine } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="medium"
      sizing="mediumLargeSizeLargeTitles"
      background="noise"
      cardStyle="glass-depth"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="semibold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingOverlay
            navItems={[
              { name: "Home", id: "hero" },
              { name: "Menu", id: "products" },
              { name: "Reviews", id: "testimonials" },
              { name: "Contact", id: "contact" },
            ]}
            brandName="Eatery"
          />
        </div>

        <div id="hero" data-section="hero">
          <HeroSplitDualMedia
            background={{ variant: "gradient-bars" }}
            title="Authentic Flavors, Crafted with Passion."
            description="Experience a culinary journey where tradition meets contemporary flair. Fresh ingredients, masterful techniques, and a warm atmosphere await you."
            tag="Voted Best in Town"
            mediaItems={[
              { imageSrc: "http://img.b2bpic.net/free-photo/details-catered-holiday-table-restaurant_8353-9663.jpg", imageAlt: "Restaurant ambiance" },
              { imageSrc: "http://img.b2bpic.net/free-photo/wine-glass_74190-3492.jpg", imageAlt: "Signature dish" }
            ]}
            mediaAnimation="slide-up"
            rating={5}
            ratingText="Based on 500+ reviews"
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            useInvertedBackground={false}
            tag="Our Philosophy"
            title="A Legacy of Culinary Excellence"
            description="We believe that great food brings people together. Our kitchen uses only the freshest, locally sourced ingredients to create dishes that tell a story."
            subdescription="Join us for a dining experience that is as memorable as it is delicious."
            imageSrc="http://img.b2bpic.net/free-photo/woman-washing-fresh-vegetables-tomatoes_158595-2078.jpg"
            mediaAnimation="blur-reveal"
            icon={Award}
            imageAlt="Chef preparing fresh ingredients"
          />
        </div>

        <div id="products" data-section="products">
          <ProductCardThree
            animationType="slide-up"
            textboxLayout="split-description"
            gridVariant="four-items-2x2-equal-grid"
            useInvertedBackground={true}
            products={[
              { id: "1", name: "Signature Artisan Pizza", price: "$18", imageSrc: "http://img.b2bpic.net/free-photo/bowl-with-pasta-wooden-table-with-decorative-bicycle-pizza-box_181624-19177.jpg" },
              { id: "2", name: "Garden Harvest Salad", price: "$14", imageSrc: "http://img.b2bpic.net/free-photo/grilled-pear-toasted-bacon-blackberries-nuts-delicious-baby-spinach-salad_127032-3582.jpg" },
              { id: "3", name: "Velvet Chocolate Tart", price: "$12", imageSrc: "http://img.b2bpic.net/free-photo/front-view-delicious-chocolate-cake_23-2148549963.jpg" },
              { id: "4", name: "Ocean Catch Platter", price: "$28", imageSrc: "http://img.b2bpic.net/free-photo/salmon-steak_74190-2765.jpg" },
              { id: "5", name: "Grilled Prime Steak", price: "$32", imageSrc: "http://img.b2bpic.net/free-photo/fried-piece-meat-potatoes-fried-tomato_140725-6649.jpg" },
              { id: "6", name: "Hand-rolled Tagliatelle", price: "$22", imageSrc: "http://img.b2bpic.net/free-photo/pasta-with-tomatoes-grated-cheese_141793-897.jpg" },
            ]}
            title="Menu Highlights"
            description="Indulge in our carefully curated selection of signatures."
          />
        </div>

        <div id="features" data-section="features">
          <FeatureCardTwentyFive
            animationType="slide-up"
            textboxLayout="split"
            useInvertedBackground={false}
            features={[
              {
                title: "Farm to Table",                description: "100% locally sourced ingredients delivered daily.",                icon: Leaf,
                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/high-angle-delicious-pizza-with-tomatoes-parmesan-cheese_23-2148753756.jpg" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/flexitarian-diet-food-composition_23-2148955502.jpg" },
                ]
              },
              {
                title: "Expert Chefs",                description: "Masters of their craft with 20+ years of experience.",                icon: Award,
                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/chocolate-syrup-pouring-vanilla-ice-cream-dessert_84443-86130.jpg" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/raw-oysters-with-lemon-ice_93675-129076.jpg" },
                ]
              },
              {
                title: "Craft Cocktails",                description: "Hand-mixed drinks to perfectly pair with your meal.",                icon: Wine,
                mediaItems: [
                  { imageSrc: "http://img.b2bpic.net/free-photo/roasted-rib-with-sliced-fried-vegetables-sauce_141793-830.jpg" },
                  { imageSrc: "http://img.b2bpic.net/free-photo/tagliatelle-with-cream-sauce-salmon_140725-2219.jpg" },
                ]
              }
            ]}
            title="The Eatery Difference"
            description="Why locals choose us every weekend."
          />
        </div>

        <div id="metrics" data-section="metrics">
          <MetricCardTwo
            animationType="slide-up"
            textboxLayout="default"
            gridVariant="bento-grid"
            useInvertedBackground={true}
            metrics={[
              { id: "m1", value: "15,000+", description: "Happy Diners" },
              { id: "m2", value: "450+", description: "5-Star Reviews" },
              { id: "m3", value: "12", description: "Years Serving" },
            ]}
            title="Serving Smiles Daily"
            description="Our numbers speak for themselves."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardTwelve
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Alice Johnson", imageSrc: "http://img.b2bpic.net/free-photo/healthy-people-girl-happy-lunch_1303-1901.jpg" },
              { id: "2", name: "Mark Spencer", imageSrc: "http://img.b2bpic.net/free-photo/attractive-happy-young-bearded-man-trendy-hat-texting-messages-via-social-networks-browsing-internet-using-free-wifi-his-electronic-device-coffee-break-restaurant_273609-1934.jpg" },
              { id: "3", name: "Elena Rodriguez", imageSrc: "http://img.b2bpic.net/free-photo/high-angle-smiley-people-with-drinks_23-2150124809.jpg" },
              { id: "4", name: "David Kim", imageSrc: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517411.jpg" },
              { id: "5", name: "Sarah Miller", imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-sitting-table_23-2149212148.jpg" },
            ]}
            cardTitle="What Diners Say"
            cardTag="Testimonials"
            cardAnimation="slide-up"
          />
        </div>

        <div id="faq" data-section="faq">
          <FaqDouble
            textboxLayout="split-description"
            useInvertedBackground={true}
            faqs={[
              { id: "f1", title: "Do I need a reservation?", content: "Yes, we highly recommend booking in advance, especially on weekends." },
              { id: "f2", title: "Is parking available?", content: "We offer complimentary valet parking right at our entrance." },
              { id: "f3", title: "Do you offer vegan options?", content: "Absolutely, our menu includes a variety of plant-based dishes." },
            ]}
            title="Common Questions"
            description="Everything you need to know before visiting."
            faqsAnimation="slide-up"
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactCTA
            useInvertedBackground={false}
            background={{ variant: "gradient-bars" }}
            tag="Get in Touch"
            title="Book Your Table"
            description="Ready for an unforgettable meal? Give us a call or send a message to reserve your spot."
            buttons={[
              { text: "Call Now", href: "tel:+15551234567" },
              { text: "Message on WhatsApp", href: "https://wa.me/15551234567" },
            ]}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterCard
            logoText="Eatery"
            copyrightText="© 2025 Eatery. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}