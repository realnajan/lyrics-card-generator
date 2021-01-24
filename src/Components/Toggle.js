import React, { useEffect } from 'react'

export default function Toggle(props) {

    useEffect(() => {
        var instagram = document.getElementById('instagram')
        var twitter = document.getElementById('twitter')
    
        if(props.size == 0) {
            instagram.classList.add('border-gray-200')
            twitter.classList.remove('border-gray-200')
        } else if (props.size == 1) {
            instagram.classList.remove('border-gray-200')
            twitter.classList.add('border-gray-200')
        }
    });

    return (
        <button class="mt-8">
        <span onClick={() => props.setSize(1)} id='twitter' class="twitter bg-gray-100 twitter-span border-4 p-2 px-4 border-gray-100">Twitter</span>
        <span onClick={() => props.setSize(0)} id='instagram' class="instagram bg-gray-100 p-2 px-4 instagram-span border-4 border-gray-100">Instagram</span>
        </button>
    )
}
