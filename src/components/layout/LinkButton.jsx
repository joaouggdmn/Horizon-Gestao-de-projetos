import { Link } from "react-router-dom";

function LinkButton({ to, style, text }) {
  return (
    <Link className={style} to={to}>
      {text}
    </Link>
  );
}

export default LinkButton;
