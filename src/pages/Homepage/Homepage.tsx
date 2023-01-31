import React from "react";
import { BackgroundIMG, HomepageContainer, HomepageContentWrapper } from "./style";

const Homepage = () => {

    const ImgBackgroundArray = [
        "https://cdn.discordapp.com/attachments/1070077755120701540/1070078599455068160/elden-ring-keyart.png",

    ];

    let chosenImg = ImgBackgroundArray[0];
    //console.log(process.env.REACT_APP_RAWG_API_KEY);

  return (
    <HomepageContainer>
      <HomepageContentWrapper >
        <BackgroundIMG src={chosenImg} />
        <h2>Homepage</h2>
        
      </HomepageContentWrapper>
    </HomepageContainer>
    
  );
};

export default Homepage;
