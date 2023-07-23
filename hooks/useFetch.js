import axios from 'axios'



const useFetch = async(id)=>{
    try {
        const encodedParams = new URLSearchParams();
        encodedParams.set('videoId', `${id}`);
  
        const options = {
          method: 'POST',
          url: 'https://youtube-scraper-2023.p.rapidapi.com/video_transcript',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '8eead85da7msha780e8be0000a10p1f3baajsn8d029fd05a1b',
            'X-RapidAPI-Host': 'youtube-scraper-2023.p.rapidapi.com'
          },
          data: encodedParams,
        }
  
  
        const response = await axios.request(options);
        return response.data.transcript
    } catch (error) {
        alert(error)
    }
}

export default useFetch