import axios from 'axios'

const KEY = 'AIzaSyAGiyLEUcVtMG99cpG1iYbMeUdfkJUuqdc'

const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () =>{
  return await youtube.get('/video', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key:KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular'
    }
  })
}