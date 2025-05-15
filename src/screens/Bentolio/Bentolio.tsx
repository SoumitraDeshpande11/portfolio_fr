import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";

export const Bentolio = (): JSX.Element => {
  const navLinks = ["PROJECTS", "ABOUT", "CONTACT"];
  const socialLinks = ["INSTAGRAM", "TWITTER", "LINKEDIN"];
  const projectItems = [
    { name: "Musea", hasImage: true },
    { name: "Elara", hasImage: false },
    { name: "Verve", hasImage: false },
    { name: "Zephyr", hasImage: false },
  ];

  return (
    <div className="bg-background text-foreground">
      <div className="w-[1440px] h-[1024px] mx-auto relative">
        {/* Header */}
        <Card className="absolute w-[1392px] h-[101px] top-6 left-6 bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
          <CardContent className="p-0">
            <div className="flex w-[1343px] items-center justify-between relative top-[42px] left-6">
              <div className="relative w-fit [font-family:'Gilroy-Light',Helvetica] font-normal text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                <span className="italic font-light">JULIA</span>
                <span className="font-light">&nbsp;</span>
                <span className="font-medium">HUANG</span>
              </div>
              <div className="flex gap-8">
                {navLinks.map((link) => (
                  <button
                    key={link}
                    className="text-sm tracking-wide hover:text-primary/80 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Hero Card */}
        <Card className="absolute w-[565px] h-[479px] top-[146px] left-6 bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
          <CardContent className="p-0">
            <div className="absolute w-[475px] top-56 left-6 font-normal text-[56px] tracking-[0] leading-[56px]">
              <span className="font-bold">Artist Redefining </span>
              <span className="font-light italic">Architecture</span>
              <span className="font-bold"> with AI-Driven Design</span>
            </div>
            <img
              className="absolute w-[119px] h-[119px] top-[34px] left-[416px]"
              alt="Flower ICON"
              src="/flower-icon.svg"
            />
          </CardContent>
        </Card>

        {/* Profile Image Card */}
        <Card className="absolute w-[330px] h-[476px] top-[149px] left-[614px] rounded-[20px] overflow-hidden border-none">
          <img src="/image.png" alt="Profile" className="w-full h-full object-cover" />
        </Card>

        {/* Projects Card */}
        <Card className="absolute w-[447px] h-[726px] top-[149px] left-[968px] bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
          <CardContent className="p-0">
            {projectItems.map((project, index) => (
              <div
                key={project.name}
                className={`absolute ${
                  index === 0
                    ? "w-[401px] h-[350px] top-[34px]"
                    : index === 1
                    ? "w-[401px] h-[72px] top-[425px]"
                    : index === 2
                    ? "w-[401px] h-[71px] top-[538px]"
                    : "w-[82px] h-[30px] top-[651px]"
                } left-6`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[25px]">{project.name}</span>
                  {project.hasImage && (
                    <img
                      src="/arrow.svg"
                      alt="Arrow"
                      className="w-[26px] h-[26px]"
                    />
                  )}
                </div>
                {project.hasImage && (
                  <div className="absolute w-[399px] h-[269px] top-[51px] left-0 rounded-2xl overflow-hidden">
                    <img
                      src="/lilcoderman-pink-chair-sitting-on-table-in-a-room-in-the-style--.png"
                      alt={project.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                {index < 3 && (
                  <Separator className="absolute w-[399px] h-0.5 top-[${index === 0 ? '348' : index === 1 ? '70' : '69'}px] bg-white/10" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* About Card */}
        <Card className="absolute w-[448px] h-[351px] top-[649px] left-6 bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
          <CardContent className="p-0">
            <img
              className="absolute w-[38px] h-[38px] top-8 left-6"
              alt="Circle ICON"
              src="/circle-icon.svg"
            />
            <div className="absolute w-[296px] top-[154px] left-6 font-light text-xl tracking-[0] leading-[25px]">
              Julia Huang is an innovative AI artist, renowned for blending
              cutting-edge technology with creative expression. Based in LA, she
              crafts unique digital art experiences accessible globally.
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card className="absolute w-[448px] h-[351px] top-[649px] left-[496px] bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
          <CardContent className="p-0">
            <div className="flex w-[400px] items-end justify-between absolute top-[30px] left-6">
              <div className="font-light text-[15px]">
                Have some
                <br />
                questions?
              </div>
              <img
                className="w-[38px] h-[38px]"
                alt="Arrow"
                src="/arrow.svg"
              />
            </div>
            <div className="absolute top-[258px] left-6 font-medium text-[55px]">
              Contact me
            </div>
          </CardContent>
        </Card>

        {/* Social Media Footer */}
        <Card className="absolute w-[448px] h-[101px] top-[899px] left-[968px] bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
          <CardContent className="p-0">
            <div className="flex w-[334px] items-center justify-between relative top-[45px] left-[57px]">
              {socialLinks.map((link) => (
                <button
                  key={link}
                  className="font-light text-[15px] hover:text-primary/80 transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};