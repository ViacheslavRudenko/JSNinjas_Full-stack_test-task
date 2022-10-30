import { Pagination } from "@mui/material";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Paginations = () => {
  const [search, setSearch] = useSearchParams();
  const quantity = useSelector((state) => state.superheroes.quantity);
  const setPage = (currentPage) => {
    const linkWithoutPagesInfo = search
      .toString()
      .slice(0, search.toString().search("page"));
    setSearch(linkWithoutPagesInfo + `page=${currentPage}&limit=5`);
  };

  return (
    <Pagination
      onChange={(e, v) => {
        setPage(v);
      }}
      page={+search.getAll("page")}
      count={Math.ceil(quantity / +search.getAll("limit"))}
    />
  );
};

export default Paginations;
