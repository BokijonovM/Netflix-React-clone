import Section from "./components/Section";
import TvShows from "./components/TvShows";
import OwnMovie from "./components/OwnMovie";

import React from "react";

function MainSection() {
  return (
    <div>
      <TvShows />
      {/* <OwnMovie /> */}
      <Section heading="Harry Potter" title="Harry Potter" />
      <Section heading="Marvel" title="Marvel" />
      <Section heading="Lord of the Rings" title="Lord of the Rings" />
      <Section heading="Witcher" title="Witcher" />
    </div>
  );
}

export default MainSection;
