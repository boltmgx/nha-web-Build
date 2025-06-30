import React from "react";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  // Social media icons data
  const socialIcons = [
    { src: "/icon-29.svg", alt: "Social media icon" },
    { src: "/icon-31.svg", alt: "Social media icon" },
    { src: "/icon-32.svg", alt: "Social media icon" },
    { src: "/icon-33.svg", alt: "Social media icon" },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-16 py-9 w-full">
      <footer className="w-full px-[120px]">
        <Card className="bg-project-primary-dark rounded-3xl p-8 text-white">
          <CardContent className="p-0 space-y-9">
            <div className="flex flex-col space-y-9 w-full">
              <div className="flex flex-wrap justify-between gap-8">
                {/* Company Info Section */}
                <div className="flex flex-col gap-9 max-w-[442px]">
                  {/* Logo */}
                  <div className="relative flex items-center h-[50px]">
                    <div className="w-[57px] h-[50px] bg-[url(/icon-6.png)] bg-[100%_100%]" />
                    <div className="ml-2">
                      <div className="font-black text-[25.5px]">
                        <span className="text-white">NHA-</span>
                        <span className="text-[#46d5fa] text-[25.8px]">
                          HEALTHTECH
                        </span>
                      </div>
                      <div className="font-['Open_Sans',Helvetica] font-bold text-[11.6px]">
                        Digitally Transforming Healthcare
                      </div>
                    </div>
                  </div>

                  {/* Company Description */}
                  <p className="font-paragraph-p2-regular text-neutral-gray-300">
                    NHA-HEALTHTECH is a HealthTech startup registered in
                    Cameroon, in the pre-seed phase, created to develop and make
                    available health technology and digital health solutions for
                    individuals/patients and healthcare facilities in Africa,
                    particularly in Cameroon.
                  </p>

                  {/* Social Media Icons */}
                  <div className="flex items-center gap-[11px]">
                    {socialIcons.map((icon, index) => (
                      <div
                        key={`social-icon-${index}`}
                        className="inline-flex p-1 bg-shadeswhite rounded-[100px] overflow-hidden"
                      >
                        <img
                          className="w-[18px] h-[18px]"
                          alt={icon.alt}
                          src={icon.src}
                        />
                      </div>
                    ))}
                    <img
                      className="w-[26px]"
                      alt="Social media links"
                      src="/social-media-links.svg"
                    />
                  </div>
                </div>

                {/* Credentials Section */}
                <div className="flex flex-col gap-4 max-w-[503px]">
                  <h4 className="font-heading-h4-small-semi-bold text-neutral-gray-50">
                    Credentials
                  </h4>
                  <div className="flex flex-wrap justify-between gap-4">
                    <div className="flex flex-col gap-2 min-w-[170px]">
                      <h5 className="font-subheading-semi-bold text-neutral-gray-50">
                        Email
                      </h5>
                      <p className="font-paragraph-p2-regular text-neutral-gray-300">
                        devguyuix@gmail.com
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h5 className="font-subheading-semi-bold text-neutral-gray-50">
                        Telephone
                      </h5>
                      <p className="font-paragraph-p2-regular text-neutral-gray-300">
                        +237 654 935 347 - 621 614 304
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="bg-neutral-gray-300/20" />
            </div>
          </CardContent>

          <CardFooter className="flex justify-between p-0 pt-9">
            <p className="font-heading-h4-semi-bold text-neutral-gray-50 whitespace-nowrap">
              SINCE. 2025
            </p>
            <p className="font-heading-h4-semi-bold text-neutral-gray-50 whitespace-nowrap">
              ©NHA_HEALTHTECH. All rights reserved
            </p>
          </CardFooter>
        </Card>
      </footer>
    </section>
  );
};
