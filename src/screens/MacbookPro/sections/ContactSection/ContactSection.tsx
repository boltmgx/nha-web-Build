import { CopyIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactSection = (): JSX.Element => {
  // Contact information data
  const contactInfo = [
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "You can send us an e-mail here.",
      content:
        "devguyuix@gmail.com. Please, don't include pinyin or phonetic symbols",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Or Call us",
      content: "+237 654 935 347 - +237 621 614 304",
    },
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      content: "Byiem Assi Acca-cia, behind the main MTN house",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-16 pb-20">
      <div className="flex flex-col items-center gap-10 px-[120px] w-full">
        {/* Badge with title */}
        <div className="flex w-[278px] items-center justify-center gap-3 pl-3.5 pr-[18px] py-1.5 rounded-[999px] overflow-hidden border border-solid border-slate-300 [background:radial-gradient(50%_50%_at_50%_50%,rgba(218,249,251,1)_0%,rgba(230,246,247,1)_13%,rgba(244,254,255,1)_30%,rgba(251,253,253,1)_58%,rgba(236,247,252,1)_68%,rgba(238,244,246,1)_80%,rgba(218,249,251,1)_100%)]">
          <div className="gap-1 px-3 py-0 bg-shadeswhite rounded-[100px] border-[0.75px] border-solid border-[#bbcaf3] inline-flex items-center">
            <div className="w-[5px] h-[5px] bg-project-blue rounded-[100px] blur-[1.5px]" />
            <div className="w-fit mt-[-0.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-project-blue text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-regular-font-style)]">
              NHA
            </div>
          </div>

          <div className="relative flex-1 font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-[#1e293bbf] text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
            Let&apos;s Get in Touch | Contact Our Team
          </div>

          <div className="absolute w-[26px] h-[199px] top-[-79px] left-[-35px] bg-[#fffffff2] rotate-[26.88deg] blur-[2.5px]" />
        </div>

        {/* Section heading */}
        <div className="flex flex-col items-center justify-center gap-9 w-full">
          <h2 className="w-[712px] mt-[-1.00px] font-heading-h2-small-semi-bold font-[number:var(--heading-h2-small-semi-bold-font-weight)] text-project-blue text-[length:var(--heading-h2-small-semi-bold-font-size)] text-center tracking-[var(--heading-h2-small-semi-bold-letter-spacing)] leading-[var(--heading-h2-small-semi-bold-line-height)] [font-style:var(--heading-h2-small-semi-bold-font-style)]">
            Need Some Help? Let&apos;s Get In Touch &amp; Leave Us A Message!
          </h2>

          <h4 className="w-[614px] font-heading-h4-small-semi-bold font-[number:var(--heading-h4-small-semi-bold-font-weight)] text-shadesblack text-[length:var(--heading-h4-small-semi-bold-font-size)] text-center tracking-[var(--heading-h4-small-semi-bold-letter-spacing)] leading-[var(--heading-h4-small-semi-bold-line-height)] [font-style:var(--heading-h4-small-semi-bold-font-style)]">
            Whether it is for support, commercial demands or partnership
            opportunities, our team is here to help you out.
          </h4>
        </div>
      </div>

      {/* Cards container */}
      <div className="w-full items-center justify-center">
        <div className="items-start gap-6 px-[120px] py-0 flex w-full">
          {/* Contact form card */}
          <Card className="flex flex-col items-start gap-6 p-4 flex-1 bg-shadeswhite rounded-xl border border-solid border-slate-200">
            <CardHeader className="p-0 w-full">
              <div className="flex h-[50px] items-center gap-4 w-full">
                <img
                  className="w-[57.06px] h-[50px]"
                  alt="Icon"
                  src="/icon-4.png"
                />
                <CardTitle className="flex-1 font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                  For Teams &amp; Startups
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0 w-full">
              <form className="flex flex-col items-start gap-4 w-full">
                {/* Account Name field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    Account Name
                  </label>
                  <div className="flex items-center gap-2 p-2 w-full rounded-lg border border-solid border-slate-300">
                    <img className="w-6 h-6" alt="Icon" src="/icon-18.svg" />
                    <Input
                      className="border-0 p-0 shadow-none h-auto font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder="Enter your Account name"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    Email
                  </label>
                  <div className="flex items-center gap-2 p-2 w-full rounded-lg border border-solid border-slate-300">
                    <img className="w-6 h-6" alt="Icon" src="/icon-20.svg" />
                    <Input
                      className="border-0 p-0 shadow-none h-auto font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder="Enter your Email"
                    />
                  </div>
                </div>

                {/* Telephone field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    Telephone
                  </label>
                  <div className="flex items-center gap-2 p-2 w-full rounded-lg border border-solid border-slate-300">
                    <img className="w-6 h-6" alt="Icon" src="/icon-21.svg" />
                    <Input
                      className="border-0 p-0 shadow-none h-auto font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder="Enter your Phone Number"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="flex flex-col items-start gap-1.5 w-full">
                  <label className="self-stretch mt-[-1.00px] font-caption-semi-bold font-[number:var(--caption-semi-bold-font-weight)] text-neutral-gray-700 text-[length:var(--caption-semi-bold-font-size)] tracking-[var(--caption-semi-bold-letter-spacing)] leading-[var(--caption-semi-bold-line-height)] [font-style:var(--caption-semi-bold-font-style)]">
                    Message
                  </label>
                  <div className="h-[142px] flex items-start gap-2 p-2 w-full rounded-lg border border-solid border-slate-300 relative">
                    <Textarea
                      className="border-0 p-0 shadow-none h-full resize-none font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-neutral-gray-400 text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]"
                      placeholder="Enter your Message"
                    />
                    <img
                      className="absolute w-2 h-2 bottom-1 right-1"
                      alt="Text area corner"
                      src="/text-area-corner-icon.svg"
                    />
                  </div>
                </div>

                {/* Submit button */}
                <Button className="w-full justify-center px-4 py-2 bg-project-blue rounded-lg text-shadeswhite font-medium text-lg leading-[22px]">
                  Send a Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact information card */}
          <Card className="flex flex-col items-start gap-6 p-4 flex-1 bg-shadeswhite rounded-xl border border-solid border-slate-300">
            <CardHeader className="p-0 w-full">
              <div className="flex h-[50px] items-center gap-4 w-full">
                <img
                  className="w-[57.06px] h-[50px]"
                  alt="Icon"
                  src="/icon-5.png"
                />
                <CardTitle className="flex-1 font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                  Contact our team
                </CardTitle>
              </div>
            </CardHeader>

            <CardContent className="p-0 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                {contactInfo.map((info, index) => (
                  <div
                    key={`contact-info-${index}`}
                    className="flex items-center justify-end gap-6 px-7 py-4 w-full bg-shadeswhite rounded-2xl border border-solid border-slate-300"
                  >
                    <div className="gap-2.5 p-2 rounded-lg border border-solid shadow-shadow-XS inline-flex items-center justify-center border-slate-300">
                      {info.icon}
                    </div>

                    <div className="flex flex-col items-start gap-2.5 flex-1">
                      <h5 className="self-stretch mt-[-1.00px] font-heading-h5-semi-bold font-[number:var(--heading-h5-semi-bold-font-weight)] text-neutral-gray-900 text-[length:var(--heading-h5-semi-bold-font-size)] tracking-[var(--heading-h5-semi-bold-letter-spacing)] leading-[var(--heading-h5-semi-bold-line-height)] [font-style:var(--heading-h5-semi-bold-font-style)]">
                        {info.title}
                      </h5>

                      <p className="self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-black text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                        {info.content}
                      </p>
                    </div>

                    <div className="gap-2.5 p-2 rounded-lg border border-solid shadow-shadow-XS inline-flex items-center justify-center border-slate-300">
                      <CopyIcon className="w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
