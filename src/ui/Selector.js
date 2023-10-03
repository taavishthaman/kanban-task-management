import Select from "react-select";
import { useSelector } from "react-redux";
import { useState } from "react";

function Selector({ options = [], register, isEditSession, onChangeHandler }) {
  const { darkMode } = useSelector((state) => state.app);

  if (!options.length) {
    return <></>;
  }

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
      defaultValue={options[0]}
      onChange={onChangeHandler}
    />
  );
}

export default Selector;
