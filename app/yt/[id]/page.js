"use client"
import React, { useEffect, useState } from 'react'
import { BsArrowLeftSquare } from 'react-icons/bs'
import Link from 'next/link'
import useFetch from '../../../hooks/useFetch'

const Page = ({ params }) => {
  const [transcript, setTranscript] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchUserData()
  }, [params.id])

  const fetchUserData = async () => {
    try {
      setLoading(true)
      const data = await useFetch(params?.id)
      setTranscript(data);
      setLoading(false)
    } catch (error) {
      alert(error)
    }
  }


  return (
    <div className="w-full min-h-[100vh] bg-[#0c0c0c]">
      <div className="main_transcript">
        <div className="video_box">
          <iframe autoplay className="w-full video_main" src={`https://www.youtube.com/embed/${params?.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div className="backbtn mt-5 ml-3 cursor-pointer">
            <Link href="/">
              <BsArrowLeftSquare className="text-white back_btn"/>
            </Link>
        </div>

        <div className="transcript_mai mt-10">
         {loading ? (
          <div className="load_box w-full flex justify-center items-center h-[30vh]">
            <div class="loader"></div>
          </div>
         ):(
          <>
            {transcript?.length > 0 ?(
              <>
              {transcript?.map((item, index) => (
              <div key={index} className="transcript text-slate-200">
                {item?.snippet}
              </div>
            ))}
              </>
            ):(
              <div className="w-full h-full flex justify-center items-center text-white">
                  Caption Not Found
              </div>
            )}
          </>
         )}
        </div>
      </div>
    </div>
  )
}

export default Page;
