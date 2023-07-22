"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Page = ({ params }) => {
  const [transcript, setTranscript] = useState([])

  useEffect(() => {
    fetchUserData()
  }, [])

  const fetchUserData = async () => {
    try {
      const encodedParams = new URLSearchParams();
      encodedParams.set('videoId', `${params.id}`);

      const options = {
        method: 'POST',
        url: 'https://youtube-scraper-2023.p.rapidapi.com/video_transcript',
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': 'e5f29817d1msh459c3ed83f39785p1c3aafjsnf3e1e5c9dac9',
          'X-RapidAPI-Host': 'youtube-scraper-2023.p.rapidapi.com'
        },
        data: encodedParams,
      }

      const response = await axios.request(options);
      console.log(response.data)
      setTranscript(response.data.transcript);

    } catch (error) {
      alert(error)
    }
  }

  console.log(transcript)

  return (
    <div className="w-full min-h-[100vh] bg-[#0c0c0c]">
      <div className="main_transcript">
        <div className="video_box">
          <iframe autoplay className="w-full video_main" src={`https://www.youtube.com/embed/${params?.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="transcript_mai mt-5">
          {transcript?.map((item, index) => (
            <div key={index} className="transcript text-slate-200">
              {item?.snippet}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page;
