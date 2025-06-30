import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const FeaturesSection = (): JSX.Element => {
  // Feature card data for the bottom section
  const featureCards = [
    {
      id: "unite-records",
      darkBg: true,
      title: "Unite Your Fragmented Health Records",
      description:
        "Centralize your entire medical history from every clinic and hospital into one secure, accessible app.",
      imagePath: "/grid-mask.png",
      bgImagePath: "/rectangle-5636-1.svg",
      illustration: {
        type: "complex",
        content: (
          <div className="relative w-full h-[357.2px]">
            <div className="absolute w-[300px] h-[331px] top-[-194px] left-[99px] rounded-[32.55px]">
              <div className="relative w-[286px] h-[315px] top-2 left-[7px] bg-[#cef5ff] rounded-[32.55px] overflow-hidden">
                <div className="flex w-[260px] items-center justify-center gap-[13.29px] px-[31.9px] py-[10.63px] relative top-[229px] left-[7px] bg-project-blue rounded-[26.58px]">
                  <div className="relative w-fit mt-[-1.33px] font-paragraph-p2-semi-bold font-[number:var(--paragraph-p2-semi-bold-font-weight)] text-shadeswhite text-[length:var(--paragraph-p2-semi-bold-font-size)] tracking-[var(--paragraph-p2-semi-bold-letter-spacing)] leading-[var(--paragraph-p2-semi-bold-line-height)] [font-style:var(--paragraph-p2-semi-bold-font-style)]">
                    Receive
                  </div>
                </div>
              </div>
            </div>
            {/* Icons and connecting lines */}
            <div className="inline-flex items-center justify-center gap-[10.85px] p-[9.52px] absolute top-[234px] left-[21px] rounded-[59.49px] backdrop-blur-[4.46px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.46px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.17)_100%),linear-gradient(227deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.25)_50%,rgba(0,0,0,0.25)_100%)]">
              {[1, 2].map((_, index) => (
                <div
                  key={`icon-left-${index}`}
                  className="flex w-[71.39px] h-[71.39px] items-center justify-center gap-[8.11px] relative bg-neutral-gray-300 rounded-[811.27px] border-[none] shadow-[inset_0px_-0.9px_0.9px_#00000014,inset_0px_1.81px_0.9px_#ffffff4c]"
                >
                  <div className="relative w-[55.92px] h-[55.92px]">
                    <div className="w-14 h-14">
                      <div className="h-14">
                        <div className="relative w-[33px] h-[43px] top-1.5 left-3">
                          <div className="relative h-[43px]">
                            <img
                              className="absolute w-[30px] h-[37px] top-[7px] left-[3px]"
                              alt="Path"
                              src="/path.svg"
                            />
                            <img
                              className="absolute w-7 h-[39px] top-0 left-0"
                              alt="Shape"
                              src="/shape.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute w-[90px] h-[152px] top-[137px] left-52">
              <div className="gap-[5.95px] top-[62px] left-0 overflow-hidden inline-flex items-center justify-center p-[9.52px] absolute rounded-[59.49px] backdrop-blur-[4.46px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.46px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.17)_100%),linear-gradient(227deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.25)_50%,rgba(0,0,0,0.25)_100%)]">
                <div className="flex w-[71.39px] h-[71.39px] items-center justify-center gap-[8.11px] relative bg-neutral-gray-300 rounded-[811.27px] border-[none] shadow-[inset_0px_-0.9px_0.9px_#00000014,inset_0px_1.81px_0.9px_#ffffff4c]">
                  <div className="relative w-[55.92px] h-[55.92px]">
                    <div className="w-14 h-14">
                      <div className="h-14">
                        <div className="relative w-[42px] h-[39px] top-2 left-[7px]">
                          <div className="relative h-[39px]">
                            <img
                              className="absolute w-[11px] h-[11px] top-[5px] left-[23px]"
                              alt="Shape"
                              src="/shape-2.svg"
                            />
                            <img
                              className="absolute w-[42px] h-[39px] top-0 left-0"
                              alt="Shape"
                              src="/shape-8.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[5px] h-[62px] top-0 left-[45px] rotate-180">
                <div className="relative h-[62px]">
                  <img
                    className="absolute w-[5px] h-[62px] top-0 left-0 -rotate-180"
                    alt="Main"
                    src="/main.svg"
                  />
                  <img
                    className="absolute w-[5px] h-[62px] top-0 left-0 -rotate-180"
                    alt="Line"
                    src="/line-1.png"
                  />
                </div>
              </div>
            </div>

            <div className="gap-[10.85px] top-[234px] left-[329px] inline-flex items-center justify-center p-[9.52px] absolute rounded-[59.49px] backdrop-blur-[4.46px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.46px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.17)_100%),linear-gradient(227deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.25)_50%,rgba(0,0,0,0.25)_100%)]">
              {[1, 2].map((_, index) => (
                <div
                  key={`icon-right-${index}`}
                  className="flex w-[71.39px] h-[71.39px] items-center justify-center gap-[8.11px] relative bg-neutral-gray-300 rounded-[811.27px] border-[none] shadow-[inset_0px_-0.9px_0.9px_#00000014,inset_0px_1.81px_0.9px_#ffffff4c]"
                >
                  <div className="relative w-[55.92px] h-[55.92px]">
                    <div className="w-14 h-14">
                      <div className="h-14">
                        <div className="relative w-[33px] h-[43px] top-1.5 left-3">
                          <div className="relative h-[43px]">
                            <img
                              className="absolute w-[30px] h-[37px] top-[7px] left-[3px]"
                              alt="Path"
                              src="/path.svg"
                            />
                            <img
                              className="absolute w-7 h-[39px] top-0 left-0"
                              alt="Shape"
                              src="/shape.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <img
              className="absolute w-[99px] h-[98px] top-[137px] left-[92px]"
              alt="Bend line"
              src="/bend-line.svg"
            />
            <img
              className="absolute w-[99px] h-[98px] top-[137px] left-[313px]"
              alt="Bend line"
              src="/bend-line-1.svg"
            />
          </div>
        ),
      },
    },
    {
      id: "maximum-security",
      darkBg: false,
      title: "Maximum Security",
      subtitle: "Digitalization Without Compromising Security",
      imagePath: "/group-26653.png",
      checkpoints: [
        "Secure and confidential data transmission through the use of encryption standards",
        "100% compliant with the new data protection law, regularly reviewed by experts",
        "Full transparency and traceability for every data query",
      ],
    },
    {
      id: "your-health",
      darkBg: false,
      title: "Your Health, Your Hands",
      description:
        "Rest assured your sensitive health information is protected with advanced encryption and robust privacy controls, fostering complete trust in your digital health journey",
      illustration: {
        type: "simple",
        content: (
          <div className="relative w-[67px] h-[78px] top-[107px] left-[217px]">
            <div className="relative w-[65px] h-[67px] left-px">
              <img
                className="absolute w-[25px] h-[41px] top-0 left-7"
                alt="Shape"
                src="/shape-7.svg"
              />
              <img
                className="absolute w-[65px] h-7 top-10 left-0"
                alt="Shape"
                src="/shape-4.svg"
              />
            </div>
          </div>
        ),
      },
    },
    {
      id: "unlock-knowledge",
      darkBg: true,
      title: "Unlock Your Health Knowledge",
      description:
        "Access personalized insights and clear educational resources directly within your app. Understand your conditions, prevention, and treatment options for a healthier life",
      imagePath: "/grid-mask-1.png",
      bgImagePath: "/rectangle-5636.svg",
      illustration: {
        type: "circle",
        content: (
          <div className="relative w-[83.29px] h-[137.66px]">
            <img
              className="absolute w-[42px] h-[38px] top-0 left-[19px]"
              alt="Graph"
              src="/graph.png"
            />
            <div className="absolute w-[83px] h-[94px] top-[43px] left-0 bg-[url(/shape-3.svg)] bg-[100%_100%]">
              <img
                className="absolute w-[29px] h-[29px] top-5 left-[35px]"
                alt="Path"
                src="/path-1.svg"
              />
            </div>
          </div>
        ),
      },
    },
  ];

  return (
    <section className="flex flex-col w-full items-center justify-end gap-[138px] px-4 md:px-8 lg:px-[205px] py-0 relative">
      {/* Header section */}
      <div className="flex flex-col items-center gap-16 relative w-full">
        {/* Badge */}
        <div className="flex items-center justify-center relative">
          <Badge className="flex items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 rounded-[999px] overflow-hidden border border-solid border-slate-200 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
            <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center relative">
              <div className="relative w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
              <div className="relative w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
                NHA
              </div>
            </div>
            <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
              What makes us unique
            </div>
            <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
          </Badge>
        </div>

        {/* Heading text */}
        <div className="flex flex-col items-center gap-[23px] relative w-full">
          <h2 className="text-project-blue text-[28px] md:text-[39px] font-semibold text-center tracking-[-1.56px] leading-[1.5] font-['Inter',Helvetica] max-w-[1200px]">
            Nha Healthtech Is The Interface Solution That Prepares Your Medical
            Records In A Uniform Structure And Gives You The Opportunity To
            Share It With Ease
          </h2>
          <p className="text-black text-[20px] md:text-[28px] font-medium text-center tracking-[-0.56px] leading-[1.2] font-['Inter',Helvetica] max-w-[994px]">
            Once You Login, You Can Easily Share Your Medical Records – With
            Different Health Centers Across Cameroon Seamlessly&nbsp;&nbsp;–
            With Nha App
          </p>
        </div>
      </div>

      {/* Feature cards section */}
      <div className="flex flex-col gap-7 w-full">
        {/* First row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full">
          {/* Dark card - Unite Your Fragmented Health Records */}
          <Card className="bg-[#0b252b] rounded-[21.7px] overflow-hidden shadow-[0px_3.62px_18.09px_#00000014] border-none">
            <CardContent className="p-[36.17px] flex flex-col items-center justify-center gap-[21.7px] relative">
              <img
                className="absolute w-full h-[443px] top-0 left-0"
                alt="Grid mask"
                src="/grid-mask.png"
              />
              <img
                className="absolute w-[1152px] h-[1191px] top-[-387px] left-[-290px]"
                alt="Rectangle"
                src="/rectangle-5636-1.svg"
              />

              {featureCards[0].illustration.content}

              <div className="flex flex-col w-full items-start gap-[16.28px] relative z-10">
                <h3 className="text-white text-[30.7px] font-bold tracking-[-0.61px] leading-[25.3px] font-['Inter',Helvetica]">
                  Unite Your Fragmented Health Records
                </h3>
                <div className="flex items-center justify-between gap-[3.62px] w-full">
                  <p className="flex-1 opacity-60 text-white text-[20.8px] font-normal tracking-[0] leading-[21.7px] font-['Inter',Helvetica]">
                    Centralize your entire medical history from every clinic and
                    hospital into one secure, accessible app.
                  </p>
                  <div className="inline-flex items-center justify-center p-[7.23px] rounded-[7.23px] border-[0.9px] border-solid border-[#ffffff99] shadow-[0px_3.62px_7.23px_#00000014]">
                    <img
                      className="w-[21.7px] h-[21.7px]"
                      alt="Icon"
                      src="/icon-8.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Light card - Maximum Security */}
          <Card className="bg-shadeswhite rounded-[21.7px] border-[0.9px] border-solid border-slate-300 shadow-[0px_3.62px_18.09px_#00000014]">
            <CardContent className="p-[25.32px] flex flex-col items-center gap-[29.84px]">
              <div className="relative w-full h-[280.33px] bg-[#e0f8ff] rounded-[14.47px] overflow-hidden">
                <div className="relative w-full h-full bg-[url(/group-26653.png)] bg-[100%_100%]">
                  <img
                    className="absolute w-[72px] h-[72px] top-[104px] left-0 right-0 mx-auto"
                    alt="Log icon"
                    src="/log-icon-1.svg"
                  />
                </div>
              </div>

              <div className="flex flex-col items-end gap-[28.94px] w-full">
                <div className="flex flex-col items-start gap-[10.85px] w-full">
                  <h3 className="text-project-blue text-[20.8px] font-semibold tracking-[-0.42px] leading-[25.3px] font-['Inter',Helvetica]">
                    Maximum Security
                  </h3>
                  <p className="text-black text-[20.8px] font-medium tracking-[0] leading-[25.3px] font-['Inter',Helvetica]">
                    Digitalization Without Compromising Security
                  </p>
                </div>

                <div className="flex flex-col items-start gap-[21.7px] w-full">
                  {featureCards[1].checkpoints.map((checkpoint, index) => (
                    <div
                      key={`security-point-${index}`}
                      className="flex items-center gap-[14.47px] w-full"
                    >
                      <div className="w-[21.7px] h-[21.7px] bg-[#007aff1a] rounded-[180.86px] flex items-center justify-center">
                        <div className="relative w-3.5 h-3.5 opacity-75">
                          <img
                            className="absolute w-3 h-[9px] top-[3px] left-0.5"
                            alt="Checkmark"
                            src={`/group${index > 0 ? `-${index}` : ""}.png`}
                          />
                        </div>
                      </div>
                      <p className="text-black text-[16.3px] font-normal tracking-[0] leading-[19.9px] font-['Inter',Helvetica]">
                        {checkpoint}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Second row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full">
          {/* Light card - Your Health, Your Hands */}
          <Card className="bg-shadeswhite rounded-[21.7px] border-[0.9px] border-solid border-slate-300 shadow-[0px_3.62px_18.09px_#00000014]">
            <CardContent className="p-[25.32px] flex flex-col items-start gap-[10.85px]">
              <div className="relative w-full h-[280.33px] bg-[#e0f8ff] rounded-[14.47px] overflow-hidden">
                {featureCards[2].illustration.content}
              </div>

              <div className="w-full flex flex-col items-start gap-[19.89px]">
                <h3 className="text-project-blue text-[20.8px] font-semibold tracking-[-0.42px] leading-[25.3px] font-['Inter',Helvetica]">
                  Your Health, Your Hands
                </h3>
                <div className="flex items-end justify-between gap-[10.85px] w-full">
                  <p className="flex-1 text-black text-[20.8px] font-medium tracking-[0] leading-[25.3px] font-['Inter',Helvetica]">
                    Rest assured your sensitive health information is protected
                    with advanced encryption and robust privacy controls,
                    fostering complete trust in your digital health journey
                  </p>
                  <div className="inline-flex items-center justify-center gap-[9.04px] p-[7.23px] rounded-[7.23px] border-[0.9px] border-solid border-slate-300 shadow-[0px_3.62px_7.23px_#00000014]">
                    <img
                      className="w-[21.7px] h-[21.7px]"
                      alt="Icon"
                      src="/icon-8.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Dark card - Unlock Your Health Knowledge */}
          <Card className="bg-[#0b252b] rounded-[21.7px] overflow-hidden shadow-[0px_3.62px_18.09px_#00000014] border-none">
            <CardContent className="p-[36.17px] flex flex-col items-center justify-center gap-[57.87px] relative">
              <img
                className="absolute w-full h-[443px] top-0 left-0"
                alt="Grid mask"
                src="/grid-mask-1.png"
              />
              <img
                className="absolute w-[1066px] h-[1215px] top-[-426px] left-[-172px]"
                alt="Rectangle"
                src="/rectangle-5636.svg"
              />

              <div className="inline-flex items-center justify-center gap-[5.95px] p-[9.52px] relative z-10 rounded-[904.3px] overflow-hidden backdrop-blur-[4.46px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.46px)_brightness(100%)] bg-[linear-gradient(0deg,rgba(255,255,255,0.17)_0%,rgba(255,255,255,0.17)_100%),linear-gradient(227deg,rgba(0,0,0,0.25)_0%,rgba(255,255,255,0.25)_50%,rgba(0,0,0,0.25)_100%)]">
                <div className="flex w-[226.07px] h-[226.07px] items-center justify-center gap-[8.11px] bg-neutral-gray-300 rounded-[811.27px] border-[none] shadow-[inset_0px_-1.81px_1.81px_#00000014,inset_0px_3.62px_1.81px_#ffffff4c]">
                  {featureCards[3].illustration.content}
                </div>
              </div>

              <div className="w-full flex flex-col items-start gap-[19.89px] relative z-10">
                <h3 className="text-white text-[30.7px] font-bold tracking-[-0.61px] leading-[25.3px] font-['Inter',Helvetica]">
                  Unlock Your Health Knowledge
                </h3>
                <div className="flex items-end justify-between gap-[3.62px] w-full">
                  <p className="flex-1 opacity-60 text-white text-[20.8px] font-normal tracking-[0] leading-[21.7px] font-['Inter',Helvetica]">
                    Access personalized insights and clear educational resources
                    directly within your app. Understand your conditions,
                    prevention, and treatment options for a healthier life
                  </p>
                  <div className="inline-flex items-center justify-center gap-[9.04px] p-[7.23px] rounded-[7.23px] border-[0.9px] border-solid border-[#ffffff99] shadow-[0px_3.62px_7.23px_#00000014]">
                    <img
                      className="w-[21.7px] h-[21.7px]"
                      alt="Icon"
                      src="/icon-8.svg"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
