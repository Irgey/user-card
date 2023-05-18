import { useEffect, useState } from "react";
import { fetchUsers } from "../../services/userAPI";
import { StyledSection, StyledUl } from "./UsersPage.styled";
import { UserCard } from "../../components/UserCard/UserCard";
import { StyledButton } from "../../components/UserCard/UserCard.styled";
import { useNavigate } from "react-router-dom";

export const UsersPage = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [isAnyUsersLeft, setIsAnyUsersLeft] = useState(true);
  const [page, setPage] = useState(1);
  const loadUsers = (page) => {
    fetchUsers(page).then((users) => {
      if (users.length === 0) {
        setIsAnyUsersLeft(false);
        alert("That's all users");
      }
      setUsers((prevState) => [...prevState, ...users]);
    });
  };

  useEffect(() => {
    document.body.style.backgroundImage = "";
    loadUsers(page);
    setPage((prevState) => prevState + 1);
  }, []);
  return (
    <>
      {" "}
      <StyledButton
        onClick={() => {
          setUsers([]);
          setIsAnyUsersLeft(true);
          navigate("/");
        }}
      >
        Home Page
      </StyledButton>
      <StyledSection>
        <StyledUl>
          {users &&
            users.map((user) => (
              <li key={user.id}>
                {" "}
                <UserCard {...user} />
              </li>
            ))}
        </StyledUl>
        {isAnyUsersLeft && (
          <StyledButton
            $following
            onClick={() => {
              setPage((prevState) => prevState + 1);
              loadUsers(page);
            }}
          >
            Load More
          </StyledButton>
        )}
      </StyledSection>
    </>
  );
};
