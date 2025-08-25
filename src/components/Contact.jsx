import { useGSAP } from "@gsap/react";
import { openingHours, socials } from "../../constants";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
const Contact = () => {
  useGSAP(() => {
    const title = SplitText.create("#contact h2", { type: "words" });
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: "#contact", start: "top center" },
      ease: "power1.inOut",
    });
    const timelineleaf = gsap.timeline({
      scrollTrigger: { trigger: "#contact", start: "top center", scrub: true },
      ease: "power1.inOut",
    });
    timeline
      .from(title.words, {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
      })
      .from("#contact h3, #contact p", {
        opacity: 0,
        yPercent: 100,
        stagger: 0.2,
      });
    timelineleaf
      .to("#f-right-leaf", {
        y: "-200",
        duration: 1,
        ease: "power1.inOut",
      })
      .to(
        "#f-left-leaf",
        {
          x: "-100",
          duration: 1,
          ease: "power1.inOut",
        },
        0
      );
  });
  return (
    <footer id="contact">
      <img
        src="/images/footer-right-leaf.png"
        alt="leaf-right"
        id="f-right-leaf"
      />
      <img
        src="/images/footer-left-leaf.png"
        alt="leaf-left"
        id="f-left-leaf"
      />
      <div className="content">
        <h2>Where to find Us</h2>
        <div>
          <h3>Visit Our Bar</h3>
          <p>Latakia, syria</p>
        </div>
        <div>
          <h3>Contact Us</h3>
          <p>+9639956899223</p>
          <p>alitarraf777@gmail.com</p>
        </div>
        <div>
          <h3>Open Every Day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day} : {time.time}
            </p>
          ))}
        </div>
        <div>
          <h3>Socials</h3>
          <div className="flex-center gap-5">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img src={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
