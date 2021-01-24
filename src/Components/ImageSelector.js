import React from 'react'

export default function ImageSelector(props) {
    try {
        var src1 = props.data.response.hits[0].result.primary_artist.image_url
        var src2 = props.data.response.hits[0].result.song_art_image_url
        var src3 = props.data.response.hits[1].result.primary_artist.image_url
        var src4 = props.data.response.hits[1].result.song_art_image_url
        var src5 = props.data.response.hits[2].result.primary_artist.image_url
        var src6 = props.data.response.hits[2].result.song_art_image_url
    } catch(e) {
        var src1=""
    }
    return (
        <div class="flex flex-wrap p-3 justify-start bg-gray-200 w-full md:w-5/6 xl:w-1/2">
            <button onClick={() => props.func(1)} class="w-1/3"><img src={src1}></img></button>
            <button onClick={() => props.func(2)} class="w-1/3"><img src={src2}></img></button>
            <button onClick={() => props.func(3)} class="w-1/3"><img src={src3}></img></button>
            <button onClick={() => props.func(4)} class="w-1/3"><img src={src4}></img></button>
            <button onClick={() => props.func(5)} class="w-1/3"><img src={src5}></img></button>
            <button onClick={() => props.func(6)} class="w-1/3"><img src={src6}></img></button>
    
        </div>
    )
}
