import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Highlights",
    "href": "#features"
  },
  {
    "name": "Menu",
    "href": "#menu"
  },
  {
    "name": "Reviews",
    "href": "#testimonials"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="floatingGradient" heroBackground="lightRaysCenter">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="Cafe Hrnek"
      ctaButton={{
        text: "Get Directions",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Cafe Hrnek"
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Location",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "https://instagram.com",
            },
            {
              label: "Call Us",
              href: "tel:+420608672661",
            },
            {
              label: "Directions",
              href: "https://maps.app.goo.gl/4bZL24RM8KhbPvDWA",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
