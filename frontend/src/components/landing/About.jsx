import pageSvg01 from '../../assets/page_svg_01.svg'
import pageSvg10 from '../../assets/page_svg_10.svg'
import pageSvg13 from '../../assets/page_svg_13.svg'
import pageSvg14 from '../../assets/page_svg_14.svg'
import pageSvg18 from '../../assets/page_svg_18.svg'
import pageSvg19 from '../../assets/page_svg_19.svg'
import decoGroup42 from '../../assets/deco_group42.svg'

export default function About() {
  return (
    <section id="about" className="relative h-[1539px]">
      <img
        src={pageSvg01}
        alt=""
        className="absolute"
        style={{ top: -36.7, left: 39.7, width: 82, height: 76 }}
      />
      <img
        src={pageSvg19}
        alt=""
        className="absolute"
        style={{ top: -57.3, left: 1161, width: 103, height: 115 }}
      />
      <img
        src={pageSvg18}
        alt=""
        className="absolute"
        style={{ top: 758.5, left: 511, width: 145, height: 127 }}
      />
      <img
        src={pageSvg18}
        alt=""
        className="absolute"
        style={{ top: 111.5, left: 732, width: 145, height: 127 }}
      />
      <img
        src={pageSvg14}
        alt=""
        className="absolute"
        style={{ top: 677, left: 36, width: 82, height: 82 }}
      />
      <img
        src={pageSvg14}
        alt=""
        className="absolute"
        style={{ top: 1391, left: 969, width: 82, height: 82 }}
      />
      <img
        src={pageSvg13}
        alt=""
        className="absolute"
        style={{ top: 633, left: 1361.7, width: 92, height: 95 }}
      />
      <img
        src={pageSvg10}
        alt=""
        className="absolute"
        style={{ top: 386, left: 1339, width: 92, height: 95 }}
      />
      <img
        src={decoGroup42}
        alt=""
        className="absolute"
        style={{ top: 59, left: -39, width: 163.3, height: 92.4 }}
      />

      <h2
        className="absolute font-poppins text-[50px] font-bold text-teal"
        style={{ top: 188, left: 138, width: 174 }}
      >
        ABOUT
      </h2>
      <div className="absolute bg-teal-deep" style={{ top: 262, left: 138, width: 125, height: 8 }} />
      <div className="absolute bg-teal" style={{ top: 292, left: 0, width: 1440, height: 306 }}>
        <p
          className="font-poppins text-[20px] font-medium leading-normal text-white"
          style={{ top: 33, left: 138, width: 1110, position: 'absolute' }}
        >
          Mediseena is a centralized digital platform designed to digitize handwritten
          prescriptions. Using OCR technology, it extracts and structures prescription information
          into organized, secure, and easily accessible digital records, reducing misinterpretation
          and improving efficiency in healthcare management.
        </p>
      </div>

      <h2
        className="absolute text-center font-poppins text-[50px] font-bold text-teal text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ top: 722, left: 830, width: 579 }}
      >
        MEET THE CREATORS
      </h2>
      <div className="absolute bg-teal-deep" style={{ top: 797, left: 1104, width: 269, height: 8 }} />
    </section>
  )
}