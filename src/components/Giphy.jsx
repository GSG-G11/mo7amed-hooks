
import { useState, useEffect } from 'react';
const Giphy = () => {
  const [searchWord, setSearchWord] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {

    if (searchWord.trim() === '') return;

    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchWord}&limit=5&api_key=GB2TIpB11wLmKBbNbYZ5b6F9HMYXs38a`
    )
      .then((res) => res.json())
        .then((data) => {
          console.log(data);
            setData(data.data.map((obj) => obj.images.original.url))
        })
      .catch((err) => console.log(err));
  }, [searchWord]);

  return (
    <>
      <input
        type="text"
        onChange={({ target: { value } }) => setSearchWord(value)}
        className="input"
      />
      <div className="holder">
        {data.map((img) => {
          return <img key={img} src={img} alt="img" />;
        })}
      </div>
    </>
  );
};

export default Giphy;