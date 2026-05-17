import facebook from "/facebook.png";
import github from "/github.png";
import instagram from "/instagram.png";
import mail from "/mail.png";

export default function Footer() {
  return (
    <div className="w-full p-7 flex flex-col text-center text-sm text-white/50">
      <p>Built and designed by Raahim Rubaiyat Teertho</p>
      <p>All rights reserved. ©</p>

      <div className="flex flex-row gap-3 justify-center mt-3 opacity-60">
        <a href="https://www.facebook.com/raahim.teertho/">
          <img src={facebook} alt="facebook" className="w-5 h-5 " />
        </a>

        <a href="https://github.com/Raahim-Rubaiyat-Teertho">
          <img src={github} alt="github" className="w-5 h-5" />
        </a>

        <a href="https://www.instagram.com/teertho/">
          <img src={instagram} alt="instagram" className="w-5 h-5" />
        </a>

        <a href="mailto:raahim.rubaiyat2021@gmail.com">
          <img src={mail} alt="mail" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
