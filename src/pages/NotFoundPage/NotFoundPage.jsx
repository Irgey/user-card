import { useEffect } from "react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  useEffect(() => {
    document.body.style.color = " #0b0b0b";
  }, {});
  return (
    <>
      <h1>Whoops!</h1>
      <p>404 Page Not Found</p>
      <img
        alt="Dogs on vacation"
        src="https://coschedule.com/_next/image?url=%2Fimg%2Fvacation.gif&w=640&q=75"
      ></img>
      <p>Looks like this page went on vacation.</p>
      <p>
        Try our <Link to="/">homepage</Link> instead.
      </p>
    </>
  );
};
