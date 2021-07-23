import React from "react";
import FilterStyled from "./FilterStyled";

const Filter = ({ filter, onChange }) => {
  return (
    <FilterStyled>
      <h3 className="title">Finde contacts by name</h3>
      <form>
        <label>
          <input
            type="text"
            name="name"
            value={filter}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={onChange}
            className="finde-input"
            autocomplete="off"
          />
        </label>
      </form>
    </FilterStyled>
  );
};

export default Filter;
