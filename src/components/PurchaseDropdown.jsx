import React from "react";
import Select from "react-select";
const PurchaseDropdown = ({ product_options }) => {
  const options = 
    product_options.map((item) => {
      return { value: item.id, label: item.name };
    })
  ;
  return (
    <Select
      components={{
        IndicatorSeparator: () => null,
      }}
      defaultValue={{ label: options[0].label, value: options[0].value }}
      options={options}
      isClearable={false}
      isSearchable={false}
      styles={{
        dropdownIndicator: (provided, state) => ({
          ...provided,
          transform: state.selectProps.menuIsOpen && "rotate(180deg)",
        }),
        control: (provided, state) => ({
          ...provided,
          boxShadow: "none",
          border: "none",
          cursor: "pointer",
        }),
        menu: (provided, state) => ({
          ...provided,
          cursor: "pointer",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          backgroundColor: state.isFocused && "#ebeced",
          color: state.isFocused && "black",
        }),
      }}
    />
  );
};

export default PurchaseDropdown;
