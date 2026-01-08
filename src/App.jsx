import { useState } from "react";
import "./App.css";
import Champion from "./components/Champion";
import AddChampionModal from "./components/AddChampionModal";

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [champions, setChampions] = useState([
    {
      id: "steinitz",
      name: "Wilhelm Steinitz",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpntpDFh.jpeg",
      years: "1886 - 1894",
      country: "Austria",
    },
    {
      id: "lasker",
      name: "Emanuel Lasker",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpSMzrrG.jpeg",
      years: "1894-1921",
      country: "Germany",
    },
    {
      id: "capablanca",
      name: "Jose Raul Capablanca",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpl6eb2D.jpeg",
      years: "1921 - 1927",
      country: "Cuba",
    },
    {
      id: "alekhine",
      name: "Alexander Alekhine",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpDtvv6F.jpeg",
      years: "1927 - 1935, 1937 - 1946",
      country: "Russia",
    },
    {
      id: "euwe",
      name: "Max Euwe",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpepz5vO.jpeg",
      years: "1935 - 1937",
      country: "Netherlands",
    },
    {
      id: "botvinnik",
      name: "Mikhail Botvinnik",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php5FphOK.jpeg",
      years: "1948 - 1957, 1958 - 1960, 1961 - 1963",
      country: "Russia",
    },
    {
      id: "smyslov",
      name: "Vasily Smyslov",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php2NaZ5O.jpeg",
      years: "1957 - 1958",
      country: "Russia",
    },
    {
      id: "tal",
      name: "Mikhail Tal",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php94EiHq.jpeg",
      years: "1960 - 1961",
      country: "Latvia",
    },
    {
      id: "petrosian",
      name: "Tigran Petrosian",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php8DUGGx.jpeg",
      years: "1963 - 1969",
      country: "Armenia",
    },
    {
      id: "spassky",
      name: "Boris Spassky",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpqvtDEr.jpeg",
      years: "1969 - 1972",
      country: "Russia",
    },
    {
      id: "fischer",
      name: "Bobby Fischer",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpyqe4zE.jpeg",
      years: "1972 - 1975",
      country: "United States",
    },
    {
      id: "karpov",
      name: "Anatoly Karpov",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpdWrLWO.jpeg",
      years: "1975 - 1985",
      country: "Russia",
    },
    {
      id: "kasparov",
      name: "Garry Kasparov",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpDzqHgr.jpeg",
      years: "1985 - 2000",
      country: "Russia",
    },
    {
      id: "kramnik",
      name: "Vladimir Kramnik",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/php6MSm9t.jpeg",
      years: "2000 - 2007",
      country: "Russia",
    },
    {
      id: "anand",
      name: "Viswanathan Anand",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpFMy4uQ.jpeg",
      years: "2007 - 2013",
      country: "India",
    },
    {
      id: "carlsen",
      name: "Magnus Carlsen",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpDDuqK0.jpeg",
      years: "2013 - 2023",
      country: "Norway",
    },
    {
      id: "liren",
      name: "Ding Liren",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpopdjZ4.jpg",
      years: "2023 - 2024",
      country: "China",
    },
    {
      id: "dommaraju",
      name: "Gukesh Dommaraju",
      imgUrl:
        "https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/NathanielGreen/phpaL0xY6.jpg",
      years: "2024 - present",
      country: "India",
    },
  ]);

  const deleteChampion = (id) => {
    setChampions((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <>
      <div>
        <h1>Chess Champions</h1>
        <button
          type="button"
          className="btn btn-success"
          data-bs-toggle="modal"
          data-bs-target="#addChampionModal"
          aria-label="AddChampion"
        >
          +
        </button>
      </div>

      <input
        className="form-control my-3"
        placeholder="Search by name..."
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        type="text"
      />
      <div className="container-lg py-5">
        <div className="section-card mb-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            {champions
              .filter((c) =>
                c.name.toLowerCase().includes(inputSearch.trim().toLowerCase())
              )
              .map((c) => (
                <Champion
                  key={c.id}
                  champion={c}
                  deleteChamp={() => deleteChampion(c.id)}
                />
              ))}
          </div>
        </div>
      </div>
      <AddChampionModal champions={champions} setChampions={setChampions} />
    </>
  );
}

export default App;
