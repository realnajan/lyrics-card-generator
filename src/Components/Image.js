import React, { useEffect, useState } from 'react'
import useWindowDimensions from '../Hooks/useWindowDimensions'
import logo from '../Images/logo.png'

export default function Image(props) {

    const { height, width } = useWindowDimensions();

    const [render, setRender] = useState(0);

    const canWidth = '500px'
    var canHeight = props.canSize
    var imgPosY = props.imgPos
    var dataURL = "#"


    useEffect(() => {   

        const canvas = document.getElementById('canvas')
        const ctx = canvas.getContext("2d")
        const img = document.getElementById('image')
        const logo = document.getElementById('logo')

        if(props.size == 1) {
            canHeight = '281px'
            imgPosY = -50
            console.log("twitter size")
        } else if (props.size == 0) {
            canHeight = '500px'
            imgPosY = 0
            console.log("twitter size")
        }

        img.onload = () => {
            ctx.drawImage(img, 0, imgPosY, canvas.width, canvas.width)
            ctx.drawImage(logo, canvas.width - 60, 20, 40, 48)
            Draw()
        }

        img.crossOrigin = "anonymous"

        function Draw() {
                ctx.font = "20px Arial"
                function drawLyrics(string, height) { 
                    ctx.fillStyle = "white"
                    var width = ctx.measureText(string).width;
                    ctx.fillRect(35, canvas.height - (height + 27), width + 10, 40); 
                    ctx.fillStyle = "black"
                    ctx.fillText(string, 40, canvas.height - height) 
                }
                if(props.Lyrics[0]) {drawLyrics(props.Lyrics[0], 220)}
                if(props.Lyrics[1]) {drawLyrics(props.Lyrics[1], 180)}
                if(props.Lyrics[2]) {drawLyrics(props.Lyrics[2], 140)}
                if(props.Lyrics[3]) {drawLyrics(props.Lyrics[3], 100)}

                if(props.Artist && props.Song) { 
                    ctx.fillStyle = "black"
                    var width = ctx.measureText(props.Artist + " - " + props.Song).width;
                    ctx.fillRect(35, canvas.height - (40 + 27), width + 10, 40); 
                    ctx.fillStyle = "white"
                    ctx.fillText(props.Artist + " - " + props.Song, 40, canvas.height - 40) 
                }

                var dataURL = canvas.toDataURL("application/octet-stream");
                var downloadlink = document.getElementById('download-link')
                downloadlink.href=dataURL
        }
    })

    const canvasWidth = window.innerWidth / 3

    return (
        <div class="mt-6 flex flex-col">
        <canvas id="canvas" width={canWidth} height={canHeight} />
        <img id="image" crossorigin="anonymous" src={props.src} class="hidden w-full" />
        <img id="logo" src={logo} class="hidden"></img>
        <a href={dataURL} target="_blank" id="download-link" class="download-link bg-yellow-400 p-3 px-6 mt-6 inline-block text-center">Download</a>
        </div>

    )
}
