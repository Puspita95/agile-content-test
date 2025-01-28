export type SearchBoxProp = {
  searchInput: string;
  handleChangeInput: (value: string) => void;
  handleSearchBtnClick: (searchInput: string) => void;
};
