import contactIllustration from '../../assets/contact_illustration.png'
import pageSvg13 from '../../assets/page_svg_13.svg'

const inputStyle = {
  background: '#ffffff',
  border: '2px solid rgba(96, 171, 168, 0.2)',
  borderRadius: 6,
  paddingLeft: 15,
  fontFamily: 'var(--font-poppins)',
  fontSize: 20,
  fontWeight: 500,
  color: '#000000',
  outline: 'none',
}

export default function Contact() {
  return (
    <section id="contact" className="relative h-[917px] bg-teal-light shadow-[4px_2px_10px_0px_rgba(6,78,92,0.97)]">
      <img src={pageSvg13} alt="" className="absolute" style={{ top: 113.1, left: 1321, width: 92, height: 95 }} />
      <h2
        className="absolute text-center font-poppins text-[50px] font-bold text-teal-deep text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
        style={{ top: 81, left: 163, width: 283 }}
      >
        Contact Us
      </h2>

      <form
        className="absolute font-poppins"
        style={{ top: 0, left: 0, width: 1440, height: 917 }}
        onSubmit={(event) => event.preventDefault()}
      >
        <input type="text" placeholder="First name" style={{ ...inputStyle, top: 192, left: 71, width: 550, height: 62, position: 'absolute' }} />
        <input type="text" placeholder="Last name" style={{ ...inputStyle, top: 294, left: 71, width: 550, height: 62, position: 'absolute' }} />
        <input type="email" placeholder="Email" style={{ ...inputStyle, top: 398, left: 71, width: 550, height: 62, position: 'absolute' }} />
        <textarea
          placeholder="Message"
          style={{ ...inputStyle, top: 518, left: 71, width: 550, height: 260, paddingTop: 15, resize: 'none', position: 'absolute' }}
        />
        <button
          type="submit"
          className="absolute rounded-[16px] bg-teal font-poppins text-[16px] font-bold text-white transition-colors hover:brightness-110"
          style={{ top: 797, left: 209, width: 269, height: 62 }}
        >
          Send Message
        </button>
      </form>

      <div className="absolute overflow-hidden" style={{ top: 243, left: 693, width: 676, height: 470 }}>
        <img
          src={contactIllustration}
          alt="Contact illustration"
          className="absolute max-w-none"
          style={{ top: '-8.15%', left: '-11.74%', width: '121.04%', height: '115.97%' }}
        />
      </div>
    </section>
  )
}