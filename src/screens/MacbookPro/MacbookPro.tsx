import React from "react";
import { Button } from "../../components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { LanguageToggle } from "../../components/LanguageToggle";
import { ScrollToSection } from "../../components/ScrollToSection";
import { useLanguage } from "../../hooks/useLanguage";
import { translations } from "../../utils/translations";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection/ContactSection";
import { DownloadSection } from "./sections/DownloadSection";
import { FaqSection } from "./sections/FaqSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { FooterSection } from "./sections/FooterSection";
import { GetStartedSection } from "./sections/GetStartedSection";
import { HeaderSection } from "./sections/HeaderSection";
import { PricingSection } from "./sections/PricingSection";
import { SecuritySection } from "./sections/SecuritySection";
import { TeamSection } from "./sections/TeamSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const MacbookPro = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language];

  // Navigation menu items data
  const navItems = [
    { name: t.nav.features, active: true, targetId: "features" },
    { name: t.nav.product, active: false, targetId: "user-profile" },
    { name: t.nav.testimonials, active: false, targetId: "testimonials" },
    { name: t.nav.pricing, active: false, targetId: "pricing" },
    { name: t.nav.faq, active: false, targetId: "faq" },
    { name: t.nav.contact, active: false, targetId: "contact" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-full relative">
        {/* Fixed navigation bar */}
        <div className="flex flex-col w-full items-center justify-center gap-2.5 pt-4 pb-2 px-4 md:px-[120px] fixed top-0 left-0 z-50 backdrop-blur-md bg-white/90">
          <div className="flex w-full max-w-[1320px] items-center justify-between px-4 md:px-9 py-6 relative bg-neutral-gray-50 rounded-xl border border-solid border-slate-300 shadow-lg">
            {/* Logo */}
            <div className="relative flex items-center h-9 animate-fade-in">
              <div className="w-[41px] h-9 bg-[url(/icon-7.png)] bg-[100%_100%]" />
              <div className="ml-[2px]">
                <div className="[font-family:'Poppins',Helvetica] font-black text-transparent">
                  <span className="text-black">NHA-</span>
                  <span className="text-[#01a0c6]">HEALTHTECH</span>
                </div>
                <div className="[font-family:'Open_Sans',Helvetica] font-bold text-black text-[8.4px]">
                  Digitally Transforming Healthcare
                </div>
              </div>
            </div>

            {/* Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    <ScrollToSection
                      targetId={item.targetId}
                      className={`inline-flex items-center justify-center gap-2.5 px-2 py-0.5 relative flex-[0_0_auto] rounded transition-all duration-300 hover:scale-105 ${
                        item.active
                          ? "bg-neutral-gray-50 border-[0.7px] border-solid border-slate-300 shadow-[0px_4px_15px_#00000014]"
                          : "hover:bg-neutral-gray-100"
                      }`}
                    >
                      <div
                        className={`relative w-fit mt-[-0.70px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-semi-bold-font-style)] transition-colors ${
                          item.active
                            ? "text-shadesblack"
                            : "text-neutral-gray-600 hover:text-project-blue"
                        }`}
                      >
                        {item.name}
                      </div>
                    </ScrollToSection>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button and Language Toggle */}
            <div className="flex items-center gap-2">
              <ScrollToSection targetId="download">
                <Button className="bg-project-blue rounded-[20px] px-6 py-2 hover:bg-project-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <span className="font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-neutral-gray-50 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    {t.nav.getStarted}
                  </span>
                </Button>
              </ScrollToSection>
              <LanguageToggle />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full items-center gap-[120px] pt-[200px] pb-0 px-0 bg-neutral-gray-50">
          <HeaderSection />
          <UserProfileSection />
          <FeaturesSection />
          <GetStartedSection />
          <SecuritySection />
          <PricingSection />
          <TeamSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
          <DownloadSection />
          <AboutSection />
          <FooterSection />
        </div>
      </div>
    </div>
  );
};