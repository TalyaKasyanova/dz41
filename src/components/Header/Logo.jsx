import "./Logo.scss";

function Logo() {
  return (
    <a href="index.html" className="logo">
      <img src={require("./logo.png")} alt="logo" className="logo-img"></img>
    </a>
  );
}

export default Logo;
