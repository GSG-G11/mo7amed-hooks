import { useState, useEffect } from 'react';

const GenerateImages = () => {
  const [searchWord, setSearchWord] = useState('');
  const [GenerateImages, setGenerateImages] = useState('');

  useEffect(() => {

    fetch(`https://robohash.org/${searchWord}`)
      .then((res) => setGenerateImages(res.url))
      .catch((err) => console.log(err));

  }, [searchWord]);

  return (
    <>
      <input
        type="text"
        value={searchWord}
        onChange={({ target: { value } }) => setSearchWord(value)}
        className="input"
      />
      <div className="holder">
        <img src={GenerateImages} alt="GenerateImages" />
      </div>
    </>
  );
};

export default GenerateImages;
