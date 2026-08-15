import cardIconBg from '../../assets/card_icon_bg.svg'
import iconSearching from '../../assets/icon_searching.png'
import iconOcr from '../../assets/icon_ocr.png'
import iconStructured from '../../assets/icon_structured.png'
import iconDownloading from '../../assets/icon_downloading.svg'
import iconDownload from '../../assets/icon_download.png'

const features = [
  {
    title: 'Prescription Scanning',
    body: 'Upload or capture handwritten prescriptions in PDF format',
    icon: iconSearching,
    iconStyle: { top: 42, left: 51, width: 125, height: 99 },
  },
  {
    title: 'OCR Text Extraction',
    body: 'OCR technology extracts technology text and identifies key details',
    icon: iconOcr,
    iconStyle: { top: 28, left: 50, width: 127, height: 127 },
  },
  {
    title: 'Structured Information',
    body: 'Converts unstructured text into organized, structured medical information',
    icon: iconStructured,
    iconStyle: { top: 19, left: 41, width: 145, height: 145 },
  },
  {
    title: 'Review and Save',
    body: 'Review the extracted information, then save the verified prescription',
    icon: iconDownloading,
    iconStyle: { top: 33, left: 46, width: 135, height: 135 },
  },
  {
    title: 'Download',
    body: 'Download prescription information as PDF documents',
    icon: iconDownload,
    iconStyle: { top: 26, left: 71, width: 85, height: 127 },
  },
]

export default function Features() {
  return (
    <section id="features" className="relative h-[829px]">
      <p
        className="absolute text-center font-poppins text-[24px] font-normal text-teal"
        style={{ top: 213, left: 362, width: 715 }}
      >
        Features
      </p>
      <h2
        className="absolute text-center font-poppins text-[50px] font-bold text-teal text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ top: 249, left: 362, width: 715 }}
      >
        Our Features &amp; Services
      </h2>
      {features.map((feature, index) => (
        <div
          key={feature.title}
          className="absolute rounded-[16px] border-2 border-teal bg-white"
          style={{ top: 352, left: 45 + index * 280.5, width: 228, height: 388 }}
        >
          <img src={cardIconBg} alt="" className="absolute" style={{ top: 49, left: 62, width: 103, height: 103 }} />
          <img src={feature.icon} alt={feature.title} className="absolute" style={feature.iconStyle} />
          <h3
            className="absolute text-center font-poppins text-[24px] font-medium leading-[1.2] text-teal-deep"
            style={{ top: 172, left: 0, width: 227, height: 73 }}
          >
            {feature.title}
          </h3>
          <p
            className="absolute text-center font-poppins text-[15px] font-normal leading-normal text-teal-deep"
            style={{ top: 266, left: 0, width: 227, height: 122 }}
          >
            {feature.body}
          </p>
        </div>
      ))}
    </section>
  )
}