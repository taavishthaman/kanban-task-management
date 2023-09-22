import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

function StyledCheckbox() {
  return (
    <Checkbox
      icon={
        <div
          style={{
            display: "flex",
            backgroundColor: "#635FC7",
            alignSelf: "center",
            flex: 1,
            border: "1px solid #635FC7",
            overflow: "hidden",
          }}
        >
          <Icon.FiCheck color="#fff" size={14} />
        </div>
      }
      borderColor="#635FC7"
    />
  );
}

export default StyledCheckbox;
