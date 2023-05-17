import {
  StyledAvatar,
  StyledAvatarBorder,
  StyledAvatarContainer,
  StyledButton,
  StyledDiv,
  StyledLi,
  StyledLogo,
  StyledStroke,
  StyledUl,
  StyledUserInfoWrapper,
  StyledWrapper,
} from "./UserCard.styled";

export const UserCard = () => {
  return (
    <StyledDiv>
      <StyledWrapper>
        {" "}
        <img src="/src/images/cardPic.png" alt="Card logo" />
        <StyledLogo src="/src/images/Logo.png" alt="Card logo" />
      </StyledWrapper>
      <StyledAvatarContainer>
        <StyledAvatarBorder src="/src/images/Hansel.png">
          <StyledAvatar src="/src/images/Hansel.png" />
        </StyledAvatarBorder>
        <StyledStroke></StyledStroke>
      </StyledAvatarContainer>
      <StyledUserInfoWrapper>
        <StyledUl>
          <StyledLi>Tweets</StyledLi>
          <StyledLi>Followers</StyledLi>
        </StyledUl>
        <StyledButton>Follow</StyledButton>
      </StyledUserInfoWrapper>
    </StyledDiv>
  );
};
