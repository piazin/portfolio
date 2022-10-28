import React from "react";
import "./styles.css";

function CardProject({
  title,
  name_repo,
  stacks,
  background_image,
  link_to_live_app,
}) {
  return (
    <div
      className="card-project "
      style={{
        backgroundImage: `url(${
          background_image
            ? background_image
            : "https://i.kym-cdn.com/entries/icons/facebook/000/023/419/nerd_smoking.jpg"
        })`,
      }}
    >
      {link_to_live_app ? (
        <>
          <a
            href={link_to_live_app}
            target="_blank"
            rel="external"
            className="link-to-app"
          ></a>
          <span className="record-live"></span>
        </>
      ) : null}

      <div className="card-project-box-description">
        <h3 className="card-project-title">{title}</h3>
        <div className="card-project-content-description">
          <span className="card-project-stacks">
            {stacks?.map((stack) => (
              <i
                key={stack}
                className={`bx bxl-${stack} bx-sm icon`}
                style={{
                  color: `${
                    stack == "javascript"
                      ? "#EFD81D"
                      : stack == "nodejs"
                      ? "#75AD63"
                      : stack == "typescript"
                      ? "#2f74c0"
                      : stack == "css3"
                      ? "#264DE4"
                      : stack == "html5"
                      ? "#E54C21"
                      : stack == "react"
                      ? "#61DBFB"
                      : "#1e1e1e"
                  }`,
                }}
              ></i>
            ))}
            ...
          </span>

          <div className="card-project-github">
            <a
              href={`https://github.com/piazin/${name_repo}`}
              target="_blank"
              rel="external"
              className="link-to-github"
            >
              view in
            </a>
            <i className="bx bxl-github icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProject;
