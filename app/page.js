"use client"

import React, { useState } from 'react';
import validUrl from "valid-url";
import { useRouter } from 'next/navigation'

export default function Home() {
  const [form, setForm] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validUrl.isUri(form) && form.includes("youtu.be")) {
      try {
        const id = form.split("/")[3];
        router.push(`/yt/${id}`);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Please enter a valid YouTube URL.");
    }
  }



  return (
    <main className="home w-full flex flex-col justify-center min-h-[100vh] bg-[#0c0c0c]">
      <div className="heading w-full flex justify-center items-center text-white text-[3rem] font-medium">
        Get Youtube Transcript
      </div>

      <div className="transcript_input_box flex justify-center mt-[4rem]">
        <form onSubmit={handleSubmit} className="yt_form">
          <input placeholder="Enter Youtube URL" className="main_inp" type="url" required onChange={(e) => setForm(e.target.value)} />
          <button type="submit" className="btn_yt_sub">
            Search
          </button>
        </form>
      </div>
    </main>
  );
}
