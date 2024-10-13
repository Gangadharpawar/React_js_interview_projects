import {
  useState,
  useEffect,
  useContext,
  useRef,
  useReducer,
  useCallback,
  useMemo,
} from "react";

const PeopleList = [
  "Shashi Koshy",
  "Dhriti Taneja",
  "Dipa Mishra",
  "Ansh Thakkar",
  "Lakshmi Thaker",
  "Sushila Matthai",
  "Shresth Nigam",
  "Bhavana Biswas",
  "Vasudha Mangat",
  "Priya Saran",
  "Gangadhar Pawar",
];

const Searchtext = () => {
  const [searchTerm, SetsearchTerm] = useState("");
  const [searchResults, SetsearchResults] = useState([]);

  const HandelChange = (e) => {
    SetsearchTerm(e.target.value);
  };

  useEffect(() => {
    const Result = PeopleList.filter((person) =>
      person.toLowerCase().includes(searchTerm.toLowerCase())
    );
    SetsearchResults(Result);
  }, [searchTerm]);

  return (
    <div className="MyApp">
      <h2>4**Search Text **</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search"
        onChange={HandelChange}
        style={{ width: 595 }}
      />
      <ul>
        {searchResults.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default Searchtext;
