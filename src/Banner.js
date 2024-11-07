import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg)`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_content">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <a href="itms-services://?action=download-manifest&url=https://netflix-clone-delta-sable-40.vercel.app/ORUphones.plist">
            Install Your App
          </a>
          <a href="itms-services://?action=download-manifest&url=https://netflix-clone-delta-sable-40.vercel.app/OruStores.plist">
            Install Store App
          </a>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is a test descriptionThis is a test descriptionThis is a test description
                This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description
                This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description
                This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description
                This is a test descriptionThis is a test descriptionThis is a test description`,
            130
          )}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
