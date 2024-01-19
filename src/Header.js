import { useState } from "react";

const Header = (props) => {
  const { country } = props;
  const [name, SetName] = useState("Anuj");

  return (
    <div>
      <h1>
        Hello, {name} from {country}
      </h1>
      <button
        onClick={() => {
          name === "Anuj" ? SetName("Kalash") : SetName("Anuj");
        }}
      >
        Change Name
      </button>
    </div>
  );
};
export default Header;
