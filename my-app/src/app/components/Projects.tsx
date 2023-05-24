import React from "react";
import crypto from "./../../../public/assets/projrcts/crypto.jpg";
import twitch from "./../../../public/assets/projrcts/twitch.jpg";
import netflix from "./../../../public/assets/projrcts/netflix.jpg";
import property from "./../../../public/assets/projrcts/property.jpg";

import Projetcitem from "./Projetitem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-w[1240px] mx-auto px-6 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4"> What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Projetcitem
            title="Property Finder"
            backgroundImg={property}
            ProjectUrl="/property"
          />
          <Projetcitem
            title="Crypto App"
            backgroundImg={crypto}
            ProjectUrl="/crypto"
          />
          <Projetcitem
            title="Twitch App"
            backgroundImg={twitch}
            ProjectUrl="/twitch"
          />
          <Projetcitem
            title="Netflix App"
            backgroundImg={netflix}
            ProjectUrl="/netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
