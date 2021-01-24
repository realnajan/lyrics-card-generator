import React from 'react'
import Image from '../Components/Image.js';
import Title from '../Components/Title'

export default function Output(props) {
    
    try {

        if(props.imgVal==1) {
            var src = props.data.response.hits[0].result.primary_artist.image_url
        } else if(props.imgVal==2) {
            var src = props.data.response.hits[0].result.song_art_image_url
        } else if(props.imgVal==3) {
            var src = props.data.response.hits[1].result.primary_artist.image_url
        } else if(props.imgVal==4) {
            var src = props.data.response.hits[1].result.song_art_image_url
        } else if(props.imgVal==5) {
            var src = props.data.response.hits[2].result.primary_artist.image_url
        } else if(props.imgVal==6) {
            var src = props.data.response.hits[2].result.song_art_image_url
        }

    } catch (e) { var src = "" }


    return (
        <div class="flex-grow">
            <Title text="Output" />
            <Image imgPos={props.imgPos} canSize={props.canSize} size={props.size} setSize={props.setSize} Artist={props.Artist} Song={props.Song} Lyrics={props.Lyrics} src={src} />
        </div>
    )
}
