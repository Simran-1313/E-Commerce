import React from "react";


const Footer = ({footerData}) => {
  
  return (
    <div className="bg-black   text-[#FAFAFA] pt-[5rem]  md:px-[8.5rem] px-8">
      <div className="flex w-full max-w-[1440px] xl:px-[8.5rem]  lg:px-[3.5rem] md:px-[3rem]  mx-auto  flex-wrap justify-between gap-[40px]">
        {footerData.sections.map((section, index) => (
          <div className="flex-col justify-between" key={index}>
            <h2 className="text-xl font-medium mb-6">{section.title}</h2>
            {section.content.map((item, subIndex) => (
              <div className="mb-[16px]" key={subIndex}>
                {item.url ? <a href={item.url} className="text-base font-normal ">{item.text}</a> :<div className=" max-w-[178px]">{item.text}</div>}
              </div>
            ))}
          </div>
        ))}
        <div>
        <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="mb-2">{footerData.downloadApp.text}</p>
          <div className="flex space-x-2 mb-4">
            {footerData.downloadApp.images.map((image, index) => (
              <img key={index} src={image.src} alt={image.alt} className="w-24 h-auto" />
            ))}
          </div>
          <div className="flex space-x-4">
            {footerData.downloadApp.socials.map((social, index) => (
              <a key={index} href={social.link}>
                <img src={social.icon} alt={social.name} />
              </a>
            ))}
          </div>
          

        </div>
        
      </div>
      <div className="mt-10 pt-6 pb-8 text-center text-[#F9F9F933]/20">
        <p>© Copyright Rimel 2022. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
