import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Result from "./components/Results/Result";
import ShimmerEffect from "./components/ShimmerEffect/ShimmerEffect";
import useDebounce from "./hooks/useDebounce";
import useFetchFilteredAnimal from "./hooks/useFetchFilteredAnimal";
import useFetchAnimalList from "./hooks/useFetchAnimalList";

function App() {
  const [searchInput, setSearchInput] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  const { animalList } = useFetchAnimalList();

  const debouncedSearch = useDebounce(searchInput, 500);
  const { filteredAnimalList, isLoading } = useFetchFilteredAnimal(
    debouncedSearch,
    animalList
  );

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) {
      setSearchInput(search);
    }
  }, [location.search]);

  const handleSearchBtnClick = () => {
    if (!searchInput) return;
    navigate(`/results?search=${searchInput}`);
  };

  const handleChangeInput = (value: string) => {
    setSearchInput(value);
  };

  return (
    <div>
      <header data-testid="header">
        <Header
          onChange={handleChangeInput}
          searchInput={searchInput}
          onSearch={handleSearchBtnClick}
        />
      </header>
      <main role="main">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSearch={handleSearchBtnClick}
                searchInput={searchInput}
                onChange={handleChangeInput}
              />
            }
          />
          <Route
            path="/results"
            element={
              isLoading ? (
                <div>
                  <ShimmerEffect count={7} />
                </div>
              ) : (
                <Result
                  searchInput={searchInput}
                  filteredAnimalList={filteredAnimalList}
                  isLoading={isLoading}
                />
              )
            }
          />
        </Routes>
      </main>
      <footer data-testid="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
