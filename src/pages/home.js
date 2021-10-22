import React from "react";
import Hero from "../images/img_Main_1920.png";
import HeroMobImg from "../images/img_Main_Mob.png";
import styled from "styled-components";
import Carousel, { consts } from "react-elastic-carousel";
import "../index.css";
import Album1 from "../images/Album1.png";
import Album2 from "../images/Album2.png";
import Album3 from "../images/Album3.png";
import Album4 from "../images/Album4.png";
import ArrowLeft from "../images/btn_Arrow_Left.png";
import ArrowRight from "../images/btn_Arrow_Right.png";

const HeroSection = styled.div`
  width: 100%;
  color: #ffffff;
  position: "relative;";
  height: 750px;
  height: 100vh;
  @media (min-width: 1000px) {
    height: 100vh;
  }
`;

const HeroMob = styled.img`
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  width: 100%;
  top: 85px;
  left: 0;
  color: #fff;
  background: #000cf6;
  position: relative;
  height: 100vh;
  @media (max-width: 600px) {
    height: 100vh;
    display: block;
  }
  @media (min-width: 600px) {
    height: 100vh;
    display: none;
  }
`;
const HeroImg = styled.img`
  grid-column: 1;
  grid-row: 1;
  z-index: 1;
  width: 100%;
  height: 750px;
  top: 0;
  left: 0;
  color: #fff;
  background: #000cf6;
  position: relative;
  height: 100vh;
  @media (min-width: 600px) {
    display: block;
    height: 100vh;
  }
  @media (max-width: 600px) {
    display: none;
    height: 100vh;
  }
`;

const CarouselItem = styled.div`
  text-align: -webkit-center;
`;

const StyledCarousel = styled(Carousel)`
  grid-column: 1;
  grid-row: 1;
  z-index: 2;
  bottom: 24px;
  position: absolute;
  margin: auto;

  @media (max-width: 1000px) {
    width: 100vw;
  }
`;

const GalleriCarousel = styled(Carousel)`
  width: 80%;
  margin: auto;
`;

const CarouselH1 = styled.h1`
  height: 88px;
  font-family: Myriad Pro;
  font-style: italic;
  font-weight: normal;
  font-size: calc(27px + 3vw);
  width: 70vw;
  line-height: 42px;
  /* or 100% */
  margin-bottom: 2vw;
  text-align: center;
  letter-spacing: -0.025em;
  @media (min-width: 1000px) {
    line-height: 64px;
  }
  @media (max-width: 400px) {
    width: 85vw;
  }
`;
const CarouselP = styled.p`
  height: 26px;
  left: 272px;
  top: 601px;
margin:0px
  font-family: Myriad Pro;
  font-style: normal;
  font-weight: 300;
  font-size: calc(13px + 0.5vw);
  line-height: 26px;
  text-align: center;
  width: 70vw;
  @media (max-width: 1000px) {
    width: 75vw;
  }
  @media (max-width: 400px) {
    padding-top:0em;
    padding-bottom: 1em;
  }
`;
const LearnMoreButton = styled.button`
  padding: 8px 40px;

  width: 162px;
  height: 37px;
  left: calc(50% - 162px / 2 - 0.5px);
  top: calc(50% - 37px / 2 - 447px);
  margin: 1em;
  /* /Primary Red */

  border: 2px solid #ee2624;
  box-sizing: border-box;
  border-radius: 30px;
  background: black;
  color: white;
`;

const NewReleases = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  @media (max-width: 600px) {
    padding-top: 5em;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2.5em;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  user-select: none;

  :activ {
    border: none;
  }
  :focus {
    border: none;
  }
`;
const Arrows = styled.img`
  width: 2em;
  @media (max-width: 600px) {
    display: none;
  }
`;

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];
const myArrow = ({ type, onClick, isEdge }) => {
  const pointer =
    type === consts.PREV ? (
      <Arrows src={ArrowLeft} />
    ) : (
      <Arrows src={ArrowRight} />
    );
  return (
    <Button onClick={onClick} disabled={isEdge}>
      {pointer}
    </Button>
  );
};

function Home() {
  return (
    <div>
      <HeroSection>
        <HeroMob src={HeroMobImg} />
        <HeroImg src={Hero} />
        <StyledCarousel enableAutoPlay autoPlaySpeed={2500} itemsToShow={1}>
          <CarouselItem>
            <CarouselH1>
              Taking the finest
              <br />
              of Ethiopian music to the world!
            </CarouselH1>{" "}
            <br />
            <CarouselP>
              Itat assequia voluption rest re rati to et pe a sit, consequi que
              voloren ihictemque alis ipicaep raturi
            </CarouselP>
            <br />
            <LearnMoreButton>Learn more</LearnMoreButton>{" "}
          </CarouselItem>

          <CarouselItem>
            <CarouselH1>
              Taking the finest
              <br />
              of African music to the world!
            </CarouselH1>{" "}
            <br />
            <CarouselP>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been
            </CarouselP>
            <br />
            <LearnMoreButton>Learn more</LearnMoreButton>{" "}
          </CarouselItem>

          <CarouselItem>
            <CarouselH1>
              Taking the finest
              <br />
              of Arabic music to the world!
            </CarouselH1>{" "}
            <br />
            <CarouselP>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
            </CarouselP>
            <br />
            <LearnMoreButton>Learn more</LearnMoreButton>{" "}
          </CarouselItem>

          <CarouselItem>
            <CarouselH1>
              Taking the finest
              <br />
              of Armenian music to the world!
            </CarouselH1>{" "}
            <br />
            <CarouselP>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when
            </CarouselP>
            <br />
            <LearnMoreButton>Learn more</LearnMoreButton>{" "}
          </CarouselItem>
        </StyledCarousel>
      </HeroSection>
      <div>
        <NewReleases>
          <hr
            style={{
              left: "0",
              width: "40%",
              background: "#8C8C8C",
              color: "green",
              zIndex: 9999,
              height: 2,
              border: "none",
              marginLeft: 0,
            }}
          />
          <h2
            style={{
              fontSize: "36px",
              fontFamily: "Myriad Pro",
              fontStyle: "normal",
              fontWeight: "300",
              lineHeight: "40px",
              letterSpacing: 0,
            }}
          >
            New Releases
          </h2>
          <hr
            style={{
              right: "0",
              width: "40%",
              background: "#8C8C8C",
              color: "green",
              zIndex: 9999,
              height: 2,
              border: "none",
              marginRight: 0,
            }}
          />
        </NewReleases>

        <GalleriCarousel
          breakPoints={breakPoints}
          itemsToScroll={1}
          renderArrow={myArrow}
          itemPadding={[0, 80]}
          outerSpacing={0}
        >
          <div>
            <img src={Album1} />{" "}
          </div>
          <div>
            <img src={Album2} />{" "}
          </div>
          <div>
            <img src={Album3} />{" "}
          </div>
          <div>
            <img src={Album4} />{" "}
          </div>
          <div>
            <img src={Album1} />{" "}
          </div>
          <div>
            <img src={Album2} />{" "}
          </div>
          <div>
            <img src={Album3} />{" "}
          </div>
          <div>
            <img src={Album4} />{" "}
          </div>
        </GalleriCarousel>
      </div>
    </div>
  );
}

export default Home;
