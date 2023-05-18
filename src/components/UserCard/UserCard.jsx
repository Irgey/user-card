import { useEffect, useState } from "react";
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
import { fetchUsers, followUser, unfollowUser } from "../../services/userAPI";

export const UserCard = (props) => {
  const { followers, avatar, tweets, following } = props;
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(following);
  const handleFollow = () => {
    followUser(props).then(() => {
      setFollowersCount(followersCount + 1);
      setIsFollowing(true).catch((error) => {
        alert(error);
      });
    });
  };
  const handleUnfollow = () => {
    unfollowUser(props).then(() => {
      setFollowersCount(followersCount - 1);
      setIsFollowing(false);
    });
  };
  return (
    <StyledDiv>
      <StyledWrapper>
        {" "}
        <img src="./src/images/cardPic.png" alt="GoIt logo" />
        <StyledLogo src="./src/images/Logo.png" alt="Card logo" />
      </StyledWrapper>
      <StyledAvatarContainer>
        <StyledAvatarBorder>
          <StyledAvatar src={avatar} />
        </StyledAvatarBorder>
        <StyledStroke></StyledStroke>
      </StyledAvatarContainer>
      <StyledUserInfoWrapper>
        <StyledUl>
          <StyledLi>{tweets} Tweets</StyledLi>
          <StyledLi>{followersCount} Followers</StyledLi>
        </StyledUl>
        {isFollowing ? (
          <StyledButton $following onClick={() => handleUnfollow(props)}>
            Following
          </StyledButton>
        ) : (
          <StyledButton onClick={() => handleFollow(props)}>
            Follow
          </StyledButton>
        )}
      </StyledUserInfoWrapper>
    </StyledDiv>
  );
};
