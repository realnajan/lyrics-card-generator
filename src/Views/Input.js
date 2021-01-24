import React from 'react'
import Inputelement from '../Components/Inputelement';
import LyricsInput from '../Components/LyricsInput'
import ImageSelector from '../Components/ImageSelector';
import Title from '../Components/Title.js';
import Toggle from '../Components/Toggle';

export default function Input(props) {
    
    return (
        <div class="flex-grow">
            <Title text="Lyrics Card Generator"></Title>
            <Inputelement func={props.setSearchTerm} placeholder="Search song or artist"/>
            <ImageSelector func={props.func} data={props.data} />    

            <Inputelement func={props.setArtist} placeholder="Type Artist"/>
            <Inputelement func={props.setSong} placeholder="Type Song"/>
            <LyricsInput func={props.setLyrics}/>

            <Toggle size={props.size} setSize={props.setSize}></Toggle>

        </div>
    )
}
