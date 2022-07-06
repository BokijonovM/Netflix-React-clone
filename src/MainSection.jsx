import Section from "./components/Section";
import TvShows from "./components/TvShows";
import OwnMovie from "./components/OwnMovie";

import React from "react";

function MainSection({search}) {
  return (
    <div style={{minHeight:'80vh'}}>
      <TvShows />
      {search.length>3? <Section heading="Search Result" title={search} /> :<>
      {/* <OwnMovie /> */}
      <Section heading="Harry Potter" title="Harry Potter" />
      <Section heading="Marvel" title="Marvel" />
      <Section heading="Lord of the Rings" title="Lord of the Rings" />
      <Section heading="Witcher" title="Witcher" />
      </>}
    </div>
  );
}

export default MainSection;
