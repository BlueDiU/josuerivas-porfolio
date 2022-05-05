import { IProject } from '../data/data';

function Card({ name, img, type, url }: IProject) {
  return (
    <article className="projects__card">
      <img
        src={img}
        alt={name}
        className="projects__img"
        loading="lazy"
      />

      <div className="projects__modal">
        <div>
          <span className="projects__subtitle">{type}</span>
          <h3 className="projects__title">{name}</h3>
          <a
            href={url}
            className="projects__button button button__small"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-link"></i>
          </a>
        </div>
      </div>
    </article>
  );
}

export default Card;
