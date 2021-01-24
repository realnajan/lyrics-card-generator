import React, { useState, useEffect } from 'react';
import Input from './Input.js';
import Output from './Output.js';

export default function Main(props) {

    const token = "0izXeq9IgWF__2zZ-VW-h6aJhgBorPXFaU7v7kbNqjfpijxE2zjwi1yIv94cGu1W"
    
    const [searchTerm, setSearchTerm] = useState('')

    const [searchResults, setSearchResults] = useState('')

    const [imgVal, setImgVal] = useState('')

    const [Artist, setArtist] = useState('')
    const [Song, setSong] = useState('')
    const [Lyrics, setLyrics] = useState(["", "", "", ""])

    const [imgSize, setImgSize] = useState(0)
    const [canSize, setCanSize] = useState('500px')
    const [imgPos, setImgPos] = useState(0)

    function LyricSetter(value, index) {
      var newLyrics = [...Lyrics];
      newLyrics[index] = value;
      setLyrics(newLyrics);
      console.log(Lyrics);
    }

    function sizeSetter(value) {
      setImgSize(value);
      reRenderOutput();
      console.log('image size changed')
      if(value == 1) {
        setCanSize("281px");
        setImgPos(-50)
        console.log(value)
      } else if (value == 0) {
        setCanSize("500px");
        console.log(value)
        setImgPos(0)
      }
    }


    var outputKey = 0;
    function reRenderOutput() {
      outputKey = + new Date;
    }
    reRenderOutput()

    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          console.log(searchTerm)
          fetch("https://api.genius.com/search?q=" + searchTerm + "&access_token=" + token)
          .then(res => res.json())
          .then((data) => {
          setSearchResults(data);
          try { console.log(data.response.hits[0].result.primary_artist.image_url) } catch (e) {}
          })

        }, 1000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [searchTerm])
    



    return (
        <div class="p-12">
        <section class="flex md:flex-row flex-col">
            <Input size={imgSize} setSize={sizeSetter} data={searchResults} rerender={reRenderOutput} func={setImgVal} setArtist={setArtist} setSong={setSong} setLyrics={LyricSetter} setSearchTerm={setSearchTerm}/>
            <Output imgPos={imgPos} canSize={canSize} key={outputKey} data={searchResults} Artist={Artist} Song={Song} Lyrics={Lyrics} imgVal={imgVal}/>
        </section>
        </div>
    )
}
