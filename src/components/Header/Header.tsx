import { useLayoutEffect } from 'react';

import PROFILE_IMG from '../../assets/img/profile.png';
import PDF from '../../assets/pdf/curr-vita.pdf';

import ScrollReveal from 'scrollreveal';

/* styles */
import './Header.scss';

interface IProps {
  themeBtn: React.MutableRefObject<HTMLElement | null>;
  changeTheme: () => void;
}

function Header({ themeBtn, changeTheme }: IProps) {
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  });

  useLayoutEffect(() => {
    sr.reveal(`.profile__border`);
    sr.reveal(`.profile__name`, { delay: 500 });
    sr.reveal(`.profile__profession`, { delay: 600 });
    sr.reveal(`.profile__social`, { delay: 700 });
    sr.reveal(`.profile__info-group`, {
      interval: 100,
      delay: 700,
    });
    sr.reveal(`.profile__buttons`, { delay: 800 });
    sr.reveal(`.filters__content`, { delay: 900 });
    sr.reveal(`.filters`, { delay: 1000 });
  }, [sr]);

  return (
    <div>
      <header className="profile container">
        {/* Theme button */}
        <i
          className="ri-moon-line change-theme"
          id="theme-button"
          ref={themeBtn}
          onClick={changeTheme}
        ></i>

        <div className="profile__container grid">
          <div className="profile__data">
            <div className="profile__border">
              <div className="profile__perfil">
                <img src={PROFILE_IMG} alt="josue rivas" />
              </div>
            </div>

            <h2 className="profile__name">Josué Rivas</h2>
            <h3 className="profile__profession">
              Web developer
            </h3>

            <ul className="profile__social">
              <a
                href="https://twitter.com/Blue_DiU"
                target="_blank"
                rel="noreferrer"
                className="profile__social-link"
              >
                <i className="ri-twitter-line"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/josu%C3%A9-rivas-396995214/"
                target="_blank"
                rel="noreferrer"
                className="profile__social-link"
              >
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a
                href="https://github.com/BlueDiU"
                target="_blank"
                rel="noreferrer"
                className="profile__social-link"
              >
                <i className="ri-github-line"></i>
              </a>
            </ul>
          </div>

          <div className="profile__info grid">
            <div className="profile__info-group">
              <h3 className="profile__info-number">0</h3>
              <p className="profile__info-description">
                Years of <br /> work
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">+2</h3>
              <p className="profile__info-description">
                Completed <br /> projects
              </p>
            </div>
            <div className="profile__info-group">
              <h3 className="profile__info-number">4 years</h3>
              <p className="profile__info-description">
                University <br /> studies
              </p>
            </div>
          </div>

          <div className="profile__buttons">
            <div
              className="button"
              onClick={() => window.open(PDF)}
            >
              Download CV <i className="ri-download-line"></i>
            </div>

            <div className="profile__buttons-small">
              {/* Insert a real number plus country code  */}
              <a
                href="https://api.whatsapp.com/send?phone=51123456789&text=Hello, more information!"
                target="_blank"
                rel="noreferrer"
                className="button button__small button__gray"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
              {/* Insert your brand name or profile */}
              <a
                href="https://m.me/bedimcode"
                target="_blank"
                rel="noreferrer"
                className="button button__small button__gray"
              >
                <i className="ri-messenger-line"></i>
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
