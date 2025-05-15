import React from "react";
import { motion } from "framer-motion";
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

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="bg-background text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-[1440px] h-[1024px] mx-auto relative">
        {/* Header */}
        <motion.div {...fadeIn}>
          <Card className="absolute w-[1392px] h-[101px] top-6 left-6 bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
            <CardContent className="p-0">
              <div className="flex w-[1343px] items-center justify-between relative top-[42px] left-6">
                <motion.div 
                  className="relative w-fit [font-family:'Gilroy-Light',Helvetica] font-normal text-[25px] tracking-[0] leading-[normal] whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="italic font-light">JULIA</span>
                  <span className="font-light">&nbsp;</span>
                  <span className="font-medium">HUANG</span>
                </motion.div>
                <motion.div className="flex gap-8" variants={staggerChildren}>
                  {navLinks.map((link) => (
                    <motion.button
                      key={link}
                      className="text-sm tracking-wide hover:text-primary/80 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link}
                    </motion.button>
                  ))}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Hero Card */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="absolute w-[565px] h-[479px] top-[146px] left-6 bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
            <CardContent className="p-0">
              <motion.div 
                className="absolute w-[475px] top-56 left-6 font-normal text-[56px] tracking-[0] leading-[56px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="font-bold">Artist Redefining </span>
                <span className="font-light italic">Architecture</span>
                <span className="font-bold"> with AI-Driven Design</span>
              </motion.div>
              <motion.img
                className="absolute w-[119px] h-[119px] top-[34px] left-[416px]"
                alt="Flower ICON"
                src="/flower-icon.svg"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card className="absolute w-[330px] h-[476px] top-[149px] left-[614px] rounded-[20px] overflow-hidden border-none">
            <motion.img 
              src="/image.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </Card>
        </motion.div>

        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="absolute w-[447px] h-[726px] top-[149px] left-[968px] bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
            <CardContent className="p-0">
              {projectItems.map((project, index) => (
                <motion.div
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
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-[25px]">{project.name}</span>
                    {project.hasImage && (
                      <motion.img
                        src="/arrow.svg"
                        alt="Arrow"
                        className="w-[26px] h-[26px]"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </div>
                  {project.hasImage && (
                    <motion.div 
                      className="absolute w-[399px] h-[269px] top-[51px] left-0 rounded-2xl overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.4 }}
                    >
                      <img
                        src="/lilcoderman-pink-chair-sitting-on-table-in-a-room-in-the-style--.png"
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                  {index < 3 && (
                    <Separator className="absolute w-[399px] h-0.5 top-[${index === 0 ? '348' : index === 1 ? '70' : '69'}px] bg-white/10" />
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="absolute w-[448px] h-[351px] top-[649px] left-6 bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
            <CardContent className="p-0">
              <motion.img
                className="absolute w-[38px] h-[38px] top-8 left-6"
                alt="Circle ICON"
                src="/circle-icon.svg"
                animate={{ rotate: 360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute w-[296px] top-[154px] left-6 font-light text-xl tracking-[0] leading-[25px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Julia Huang is an innovative AI artist, renowned for blending
                cutting-edge technology with creative expression. Based in LA, she
                crafts unique digital art experiences accessible globally.
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Card className="absolute w-[448px] h-[351px] top-[649px] left-[496px] bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
            <CardContent className="p-0">
              <motion.div 
                className="flex w-[400px] items-end justify-between absolute top-[30px] left-6"
                whileHover={{ x: 10 }}
              >
                <div className="font-light text-[15px]">
                  Have some
                  <br />
                  questions?
                </div>
                <motion.img
                  className="w-[38px] h-[38px]"
                  alt="Arrow"
                  src="/arrow.svg"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>
              <motion.div 
                className="absolute top-[258px] left-6 font-medium text-[55px]"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                Contact me
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Social Media Footer */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <Card className="absolute w-[448px] h-[101px] top-[899px] left-[968px] bg-card/30 backdrop-blur-sm rounded-[20px] border border-white/10">
            <CardContent className="p-0">
              <div className="flex w-[334px] items-center justify-between relative top-[45px] left-[57px]">
                {socialLinks.map((link) => (
                  <motion.button
                    key={link}
                    className="font-light text-[15px] hover:text-primary/80 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link}
                  </motion.button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};