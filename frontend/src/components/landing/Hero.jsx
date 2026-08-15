import heroPanel from '../../assets/hero_panel.svg'
import heroIllustration from '../../assets/hero_illustration.png'
import decoGroup43 from '../../assets/deco_group43.svg'
import decoGroup44 from '../../assets/deco_group44.svg'
import homeSvg01 from '../../assets/home_svg_01.svg'
import homeSvg02 from '../../assets/home_svg_02.svg'
import homeSvg07 from '../../assets/home_svg_07.svg'
import homeSvg08 from '../../assets/home_svg_08.svg'
import homeSvg10 from '../../assets/home_svg_10.svg'
import homeSvg11 from '../../assets/home_svg_11.svg'
import homeSvg13 from '../../assets/home_svg_13.svg'
import homeSvg14 from '../../assets/home_svg_14.svg'
import homeSvg16 from '../../assets/home_svg_16.svg'
import pageSvg11 from '../../assets/page_svg_11.svg'

export default function Hero() {
  return (
    <section id="home" className="relative h-[873px]">
      <img
        src={decoGroup43}
        alt=""
        className="absolute"
        style={{ top: -46, left: 6, width: 294, height: 146 }}
      />
      <img
        src={decoGroup44}
        alt=""
        className="absolute"
        style={{ top: 212, left: 1048, width: 294, height: 146 }}
      />
      <img
        src={homeSvg08}
        alt=""
        className="absolute"
        style={{ top: 255, left: 1048, width: 294, height: 175 }}
      />
      <img
        src={pageSvg11}
        alt=""
        className="absolute"
        style={{ top: 120.8, left: 1338.2, width: 321, height: 187 }}
      />
      <img
        src={homeSvg11}
        alt=""
        className="absolute"
        style={{ top: 826, left: 43.7, width: 75, height: 77 }}
      />
      <img
        src={homeSvg02}
        alt=""
        className="absolute"
        style={{ top: 451, left: 22, width: 82, height: 76 }}
      />
      <img
        src={homeSvg07}
        alt=""
        className="absolute"
        style={{ top: 828, left: 1161, width: 103, height: 86 }}
      />
      <img
        src={homeSvg13}
        alt=""
        className="absolute"
        style={{ top: 97, left: 41.8, width: 93, height: 126 }}
      />
      <img
        src={homeSvg16}
        alt=""
        className="absolute"
        style={{ top: 409, left: 1371.8, width: 93, height: 126 }}
      />
      <img
        src={homeSvg10}
        alt=""
        className="absolute"
        style={{ top: 237.4, left: 1392.7, width: 72, height: 39 }}
      />
      <img
        src={homeSvg01}
        alt=""
        className="absolute"
        style={{ top: 184, left: 648, width: 106, height: 74 }}
      />

      <div className="absolute" style={{ top: 211, left: 67, width: 1305, height: 617 }}>
        <img src={heroPanel} alt="" className="absolute inset-0 h-full w-full" />
        <h1
          className="absolute font-poppins text-[50px] font-bold leading-[1.26] text-white"
          style={{ top: 287, left: 104, width: 742 }}
        >
          Centralized Digital Platform for Structured Prescription Digitization
        </h1>
        <img src={homeSvg14} alt="" className="absolute" style={{ top: 553, left: 104, width: 185, height: 8 }} />
        <p
          className="absolute font-poppins text-[20px] font-medium leading-normal text-white"
          style={{ top: 579, left: 104, width: 742 }}
        >
          Mediseena is a centralized digital platform that converts handwritten prescriptions into
          organized, secure, and accessible digital records for better healthcare.
        </p>
        <a
          href="/register"
          className="absolute flex items-center justify-center rounded-[14px] bg-teal-deep font-poppins text-[32px] font-medium text-white no-underline transition-colors hover:brightness-110"
          style={{ top: 699, left: 211, width: 276, height: 78 }}
        >
          Get Started
        </a>
        <img
          src={heroIllustration}
          alt="Prescription digitization illustration"
          className="absolute object-contain"
          style={{ top: 322, left: 771, width: 556, height: 411 }}
        />
      </div>
    </section>
  )
}