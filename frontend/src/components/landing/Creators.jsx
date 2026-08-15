import photoJosh from '../../assets/photo_josh.png'
import photoMiggy from '../../assets/photo_miggy.png'
import photoStephane from '../../assets/photo_stephane.png'
import photoSonny from '../../assets/photo_sonny.png'
import decoGroup43 from '../../assets/deco_group43.svg'
import decoGroup44 from '../../assets/deco_group44.svg'
import socialFb from '../../assets/social_fb.svg'
import socialIg from '../../assets/social_ig.svg'
import socialGmail from '../../assets/social_gmail.svg'

const socials = (x, y, { fb, ig, mail }) => [
  { src: socialFb, alt: 'Facebook', href: fb, style: { top: y, left: x } },
  { src: socialIg, alt: 'Instagram', href: ig, style: { top: y, left: x + 30 } },
  { src: socialGmail, alt: 'Email', href: mail, style: { top: y, left: x + 60 } },
]

const creators = [
  {
    name: 'Mr. Joshua Cyron Santos',
    photo: photoJosh,
    photoStyle: { top: 49, left: 51, width: 218, height: 218 },
    cardStyle: { top: 0, left: 0, background: '#d9eaea', borderColor: '#8ec3c1' },
    nameCenter: 342,
    nameColor: '#064e5c',
    socials: socials(109, 415, {
      fb: 'https://www.facebook.com/share/1BnJmYQ5mq/?mibextid=wwXIfr',
      ig: 'https://www.instagram.com/shua_snts?igsh=MTk4cHkwdzl0dWtyYg==&igsi=MTk4cHkwdzl0dWtyYg==',
      mail: 'mailto:joshuacyron.santos@my.jru.edu',
    }),
  },
  {
    name: 'Mr. Miggy Rivera',
    photo: photoMiggy,
    photoStyle: { top: 147, left: 406, width: 218, height: 232 },
    cardStyle: { top: 105, left: 342, background: '#064e5c', borderColor: '#064e5c' },
    nameCenter: 447,
    nameColor: '#f6f8fc',
    deco: { top: 142, left: 368, width: 294, height: 146, rotate: 0 },
    socials: socials(475, 524, {
      fb: 'https://www.facebook.com/share/1BYAkeefdK/?mibextid=wwXIfr',
      ig: 'https://www.instagram.com/raive.exp?igsh=b3NmbTBpbnplODMw&igsi=b3NmbTBpbnplODMw',
      mail: 'mailto:miggy.rivera@my.jru.edu',
    }),
  },
  {
    name: 'Ms. Stephane Aira Cayetano',
    photo: photoStephane,
    photoStyle: { top: 49, left: 761, width: 218, height: 218 },
    cardStyle: { top: 0, left: 710, background: '#f6f8fc', borderColor: '#d9eaea' },
    nameCenter: 342,
    nameColor: '#064e5c',
    deco: { top: 343, left: 730, width: 294, height: 146, rotate: 0 },
    socials: socials(830, 428, {
      fb: 'https://www.facebook.com/share/1BrDf1pRkf/?mibextid=wwXIfr',
      ig: 'https://www.instagram.com/teypiteypi?igsh=cTlkOThpbWJtNW04&igsi=cTlkOThpbWJtNW04&utm_source=qr',
      mail: 'mailto:stephaneaira.cayetano@my.jru.edu',
    }),
  },
  {
    name: 'Mr. Sonny Jr. Berdin',
    photo: photoSonny,
    photoStyle: { top: 142, left: 1109, width: 218, height: 216 },
    cardStyle: { top: 105, left: 1058, background: '#60aba8', borderColor: '#d9eaea' },
    nameCenter: 447,
    nameColor: '#064e5c',
    deco: { top: 121, left: 1070, width: 294, height: 146, rotate: 180 },
    socials: socials(1177, 525, {
      fb: 'https://www.facebook.com/share/1EepnAbPp9/?mibextid=wwXIfr',
      ig: 'https://www.instagram.com/snnys.wrld?igsh=MTZvMnBsc3lqYW1nNA==&igsi=MTZvMnBsc3lqYW1nNA==',
      mail: 'mailto:sonnyjr.berdin@my.jru.edu',
    }),
  },
]

export default function Creators() {
  return (
    <div className="relative" style={{ top: 832, left: 31, width: 1378, height: 611 }}>
      {creators.map((creator) => (
        <div
          key={creator.name}
          className="absolute rounded-[49px] border-[7px] shadow-[-1px_0px_18.7px_9px_rgba(0,0,0,0.29)]"
          style={{ ...creator.cardStyle, width: 320, height: 506 }}
        >
          {creator.deco && (
            <img
              src={creator.deco.rotate ? decoGroup44 : decoGroup43}
              alt=""
              className="absolute"
              style={{
                top: creator.deco.top,
                left: creator.deco.left,
                width: creator.deco.width,
                height: creator.deco.height,
                transform: `rotate(${creator.deco.rotate}deg)`,
              }}
            />
          )}
          <img src={creator.photo} alt={creator.name} className="absolute rounded-[15px]" style={creator.photoStyle} />
          <p
            className="absolute w-full px-2 text-center font-poppins text-[32px] font-light italic leading-[1.2]"
            style={{ top: creator.nameCenter - 37, color: creator.nameColor }}
          >
            {creator.name}
          </p>
          {creator.socials.map((social) => (
            <a
              key={social.alt}
              href={social.href}
              target={social.alt === 'Email' ? undefined : '_blank'}
              rel="noreferrer"
              className="absolute block h-[20px] w-[20px]"
              style={social.style}
              aria-label={social.alt}
            >
              <img src={social.src} alt="" className="h-full w-full" />
            </a>
          ))}
        </div>
      ))}
    </div>
  )
}