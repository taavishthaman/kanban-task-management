import Select from "react-select";
import { useSelector } from "react-redux";

function Selector() {
  const { darkMode } = useSelector((state) => state.app);

  const options = [
    { value: "Todo", label: "Todo" },
    { value: "Doing", label: "Doing" },
    { value: "Done", label: "Done" },
  ];

  return (
    <Select
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          "&:hover": { borderColor: "#635FC7" },
          borderColor: "rgba(130, 143, 163, 0.25)",
          boxShadow: "none",
          fontFamily: "Plus Jakarta Sans",
          fontSize: "13px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "23px",
          backgroundColor: darkMode
            ? "var(--color-dark-grey)"
            : "var(--color-white)",

          color: darkMode ? "var(--color-white)" : "var(--color-black)",
        }),
        option: (styles, { isSelected }) => {
          return {
            ...styles,
            color: "var(--color-medium-grey)",
            fontSize: "13px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "23px",
            backgroundColor: darkMode
              ? "var(--color-dark-grey)"
              : "var(--color-white)",
          };
        },
        placeholder: (defaultStyles) => {
          return {
            ...defaultStyles,
            color: darkMode
              ? "rgba(255, 255, 255, 0.25)"
              : "rgba(0, 0, 0, 0.25)",
          };
        },
      }}
      theme={(theme) => ({
        ...theme,
        colors: {
          text: darkMode ? "var(--color-white)" : "var(--color-black)",
        },
      })}
      options={options}
    />
  );
}

export default Selector;
