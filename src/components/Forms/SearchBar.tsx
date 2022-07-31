import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";

export const SearchWrap = styled.div`
  flex: 1;
  & .searchInput {
    background: #fff;
    border-radius: 20px;
    padding: 15px 50px;
    box-shadow: 0 6px 15px #ededed;
  }

  & .searchButton {
    margin-left: -45px;
    font-size: 0;

    & svg {
      width: 20px;
      height: 20px;
      vertical-align: -3px;
    }
  }
`;

interface SearchBarProps {
  onChangeValue: (value: string) => void;
  onSearchEvent: () => void;
  disabledValue: boolean;
}

function SearchBar(props: SearchBarProps) {
  const { t } = useTranslation();

  const { onChangeValue, onSearchEvent, disabledValue } = props;

  const [eventChangeValue, setEventChangeValue] = React.useState("");

  const onValueChange = (value: string) => {
    if (value != null) {
      onChangeValue(value);
    }
  };

  return (
    <SearchWrap>
      <input
        placeholder={t("ISearchPlaceholder")}
        className="searchInput"
        onChange={(event) => {
          onChangeValue(event.currentTarget.value);
          setEventChangeValue(event.currentTarget.value);
        }}
      />
      <button
        type="submit"
        disabled={disabledValue}
        onClick={() => {
          onValueChange(eventChangeValue);
          onSearchEvent();
        }}
        className="searchButton"
      >
        <BsSearch />
        {t("ISearchSubmit")}
      </button>
    </SearchWrap>
  );
}

export default SearchBar;
