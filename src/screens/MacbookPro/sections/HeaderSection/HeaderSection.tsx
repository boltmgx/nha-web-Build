import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollToSection } from "../../../../components/ScrollToSection";
import { useLanguage } from "../../../../hooks/useLanguage";
import { translations } from "../../../../utils/translations";

export const HeaderSection = (): JSX.Element => {
  const { language } = useLanguage();
  const t = translations[language].header;

  return (
    <section id="header" className="flex flex-col items-center gap-[60px] relative">
      {/* Top banner with gradient background */}
      <div className="flex w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 relative rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)] animate-fade-in">
        <Badge className="inline-flex items-center gap-1 px-3 py-0 relative bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3]">
          <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px] animate-pulse" />
          <span className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
            NHA
          </span>
        </Badge>

        <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
          {t.badge}
        </div>

        <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
      </div>

      {/* Main content container */}
      <div className="flex flex-col items-center gap-8 relative">
        {/* Background image */}
        <div className="absolute w-[1283px] h-[697px] top-[-74px] left-[-179px] bg-[url(/mask-group.png)] bg-[100%_100%]" />

        {/* Headings section */}
        <div className="flex flex-col items-center gap-2 relative self-stretch w-full">
          {/* First heading row - YOUR HEALTH RECORDS */}
          <div className="flex items-center gap-5 relative animate-slide-up">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-neutral-gray-900 text-[75px] text-center tracking-[-3.00px] leading-[90.0px] whitespace-nowrap">
              {t.title1}
            </h1>

            <div className="flex flex-col items-start gap-2.5 relative">
              <div className="relative w-[666px] h-[85px]">
                <div className="flex flex-col w-[1020px] items-start gap-8 relative left-[-178px]">
                  <div className="flex self-stretch w-full flex-col items-center gap-4 relative">
                    <div className="flex items-center gap-5 relative">
                      <div className="flex flex-col items-start gap-2.5 relative">
                        <div className="relative w-[667px] h-[102px]">
                          <div className="relative h-[90px]">
                            <div className="flex items-center justify-center gap-2.5 absolute top-0 left-0">
                              <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-project-blue text-[75px] text-center tracking-[-3.00px] leading-[90.0px] whitespace-nowrap animate-text-glow">
                                {t.title2}
                              </h1>
                            </div>

                            <div className="w-[667px] absolute h-[90px] top-0 left-0">
                              <div className="items-center gap-2.5 inline-flex justify-center relative">
                                <img
                                  className="relative w-[667px] h-[90px] mt-[-298.50px] ml-[-643.50px]"
                                  alt="Health RECORDS"
                                />

                                <img
                                  className="absolute w-[139px] h-[279px] top-[-93px] left-[-119px] animate-float"
                                  alt="Rectangle"
                                  src="/rectangle-5629.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second heading row - YOUR SECURE CONTROL */}
          <div className="flex items-center justify-center gap-5 relative self-stretch w-full animate-slide-up animation-delay-200">
            <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-neutral-gray-900 text-[75px] text-center tracking-[-3.00px] leading-[90.0px] whitespace-nowrap">
              {t.title3}
            </h1>

            <div className="flex flex-col items-center justify-end gap-2.5 relative">
              <div className="relative w-[654px] h-[85px]">
                <div className="flex flex-col items-start gap-8 relative top-px">
                  <div className="flex flex-col items-center gap-4 relative">
                    <div className="flex items-center justify-center gap-5 relative">
                      <div className="flex flex-col w-[654px] items-start gap-2.5 relative">
                        <div className="relative w-[741px] h-[102px] mr-[-87.00px]">
                          <div className="relative w-[654px] h-[90px]">
                            <div className="flex items-center justify-center gap-2.5 absolute top-0 left-0">
                              <h1 className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-extrabold text-[#007aff] text-[75px] text-center tracking-[-3.00px] leading-[90.0px] whitespace-nowrap animate-text-glow">
                                {t.title4}
                              </h1>
                            </div>

                            <div className="w-[654px] absolute h-[90px] top-0 left-0">
                              <div className="items-center gap-2.5 inline-flex justify-center relative">
                                <img
                                  className="relative w-[654px] h-[90px] mt-[-397.50px] ml-[-650.50px]"
                                  alt="Control secure"
                                />

                                <img
                                  className="absolute w-[137px] h-[278px] top-[-93px] left-[-105px] animate-float animation-delay-1000"
                                  alt="Rectangle"
                                  src="/rectangle-5629-1.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle text */}
        <div className="flex flex-col w-[924px] items-center relative animate-slide-up animation-delay-400">
          <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-black text-[25px] text-center tracking-[-0.50px] leading-10">
            {t.subtitle1}
          </h2>

          <div className="flex items-end justify-center gap-1 relative self-stretch w-full">
            <h2 className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-black text-2xl text-center tracking-[-0.48px] leading-[19.2px]">
              <br /> {t.subtitle2}
            </h2>

            <div className="h-[42px] items-end flex-[0_0_auto] inline-flex justify-center relative">
              <span className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#007aff] text-[33px] text-center tracking-[-0.66px] leading-[26.4px] whitespace-nowrap">
                {""}
              </span>

              <div className="relative w-3.5 h-[45px] mt-[-3.00px] -ml-1">
                <div className="absolute -top-0.5 left-0 font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#007aff] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)] animate-blink">
                  |
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard preview card */}
        <Card className="relative w-[900px] h-60 bg-neutral-gray-50 rounded-[25px] overflow-hidden border-[0.5px] border-solid border-slate-300 animate-slide-up animation-delay-600 hover:shadow-xl transition-all duration-500 hover:scale-105">
          <CardContent className="p-0">
            <div className="relative h-60 rounded-[25px]">
              <div className="absolute w-[820px] h-[200px] top-5 left-10">
                {/* Doctor's office section */}
                <div className="absolute w-[330px] h-[156px] top-[22px] left-0 rounded-[15px] bg-[linear-gradient(180deg,rgba(53,206,215,0.08)_0%,rgba(53,206,215,0.16)_100%)] animate-pulse-slow">
                  <div className="absolute w-[400px] h-[76px] top-10 left-0">
                    <img
                      className="absolute w-[330px] h-5 top-7 left-[70px] animate-slide-right"
                      alt="Line wrapper mask"
                      src="/line-wrapper-mask-group-1.svg"
                    />

                    <img
                      className="absolute w-[165px] h-5 top-7 left-0 animate-slide-left"
                      alt="Line wrapper mask"
                      src="/line-wrapper-mask-group.svg"
                    />

                    {/* Data badge */}
                    <div className="absolute w-[179px] h-[47px] top-3.5 left-[18px] bg-neutral-gray-50 rounded-[200px] overflow-hidden shadow-[0px_4px_10.4px_-3.5px_#16023113,0px_0.48px_1.26px_-1.75px_#1602312a] animate-bounce-slow">
                      <div className="relative h-[47px] rounded-[200px]">
                        <div className="absolute h-[18px] top-[13px] left-[21px] [font-family:'Inter',Helvetica] font-medium text-project-blue text-[13.8px] tracking-[0.30px] leading-[18px] whitespace-nowrap">
                          Your Practiced Data
                        </div>

                        <div className="absolute w-[179px] h-[47px] top-0 left-0 rounded-[200px] border-2 border-solid border-[#05a5ce59]" />
                      </div>
                    </div>

                    {/* Icon box */}
                    <div className="absolute w-[76px] h-[76px] top-0 left-[213px] bg-neutral-gray-50 rounded-[20px] overflow-hidden shadow-[0px_4px_10.4px_-3.5px_#16023113,0px_0.48px_1.26px_-1.75px_#1602312a] animate-spin-slow">
                      <div className="relative h-[76px] rounded-[20px]">
                        <div className="absolute w-[49px] h-[43px] top-4 left-[13px] bg-[url(/icon.png)] bg-[100%_100%]" />

                        <div className="w-[76px] h-[76px] rounded-[20px] border-2 border-solid border-[#05a5ce59] absolute top-0 left-0" />
                      </div>
                    </div>

                    {/* Small icon */}
                    <div className="absolute w-11 h-11 top-[15px] left-[308px] bg-neutral-gray-50 rounded-[60px] overflow-hidden shadow-[0px_4px_10.4px_-3.5px_#16023113,0px_0.48px_1.26px_-1.75px_#1602312a] animate-pulse">
                      <div className="relative h-11 rounded-[60px]">
                        <div className="absolute w-6 h-6 top-2.5 left-2.5 bg-[url(/svg-611789796-534.svg)] bg-[100%_100%]" />

                        <div className="w-11 h-11 rounded-[60px] border-2 border-solid border-[#05a5ce59] absolute top-0 left-0" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute h-[18px] top-3 left-24 opacity-60 [font-family:'Inter',Helvetica] font-medium text-project-blue text-[13.8px] tracking-[0.30px] leading-[18px] whitespace-nowrap">
                    Your Doctor&apos;s Office
                  </div>
                </div>

                {/* Badge slider visualization */}
                <img
                  className="absolute w-[440px] h-[200px] top-0 left-[380px] animate-float"
                  alt="Badge slider"
                  src="/badgeslider.svg"
                />
              </div>

              <div className="w-[900px] h-60 rounded-[25px] border border-solid border-[#13388214] absolute top-0 left-0" />
            </div>
          </CardContent>
        </Card>

        {/* Call to action buttons */}
        <div className="flex items-start gap-2.5 relative animate-slide-up animation-delay-800">
          <ScrollToSection targetId="download">
            <Button className="px-10 py-2 bg-project-blue rounded-[20px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] hover:bg-project-blue/90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {t.getStarted}
            </Button>
          </ScrollToSection>

          <ScrollToSection targetId="contact">
            <Button
              variant="outline"
              className="px-10 py-2 rounded-[20px] border border-solid border-slate-300 font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-neutral-gray-900 text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)] hover:bg-neutral-gray-100 transition-all duration-300 hover:scale-105"
            >
              {t.bookDemo}
            </Button>
          </ScrollToSection>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute w-[961px] h-[871px] top-[132px] left-[1035px] rounded-[558.72px_0px_0px_558.72px] [background:radial-gradient(50%_50%_at_21%_3%,rgba(6,180,190,0.12)_72%,rgba(255,255,255,1)_100%)] opacity-75 animate-pulse-slow" />
    </section>
  );
};