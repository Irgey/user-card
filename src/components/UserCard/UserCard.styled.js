import { styled } from "styled-components";

const backgroundCard = `linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  )`;
export const StyledDiv = styled.div`
  width: 380px;
  height: 460px;
  padding-top: 28px;
  padding-bottom: 36px;
  background: ${backgroundCard};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;

  font-family: "Montserrat";
  font-weight: 500;
  font-size: 20px;
  line-height: calc(24 / 20);
  text-transform: uppercase;

  color: #ebd8ff;
  transition: scale 250ms;
  &:hover {
    scale: 1.02;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  padding: 0 36px 18px 36px;
`;
export const StyledLogo = styled.img`
  position: absolute;
  top: -8px;
`;

export const StyledStroke = styled.div`
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  height: 8px;
  width: 100%;
`;
export const StyledAvatarContainer = styled.div`
  position: relative;
`;

export const StyledAvatarBorder = styled.div`
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledAvatar = styled.img`
  width: 62px;
  height: 62px;
  background: ${backgroundCard};
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const StyledUserInfoWrapper = styled.div`
  padding: 62px 36px 0px 36px;
`;
export const StyledUl = styled.ul`
  list-style: none;
  text-align: center;
  margin-bottom: 26px;
`;
export const StyledLi = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;
export const StyledButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 196px;
  height: 50px;
  background: ${(props) => (props.$following ? "#5CD3A8;" : "#ebd8ff")};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;

  font-family: "Montserrat";
  font-weight: 600;
  font-size: 18px;
  line-height: calc(22 / 18);

  text-transform: uppercase;

  color: #373737;
  transition: scale 250ms;
  &:hover,
  &:focus {
    scale: 1.15;
  }
`;
