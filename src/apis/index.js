import axios from 'axios'

const KEY = 'AIzaSyC_DtdWMx9juAh6irXD_t-8e_SMyFWyul8'

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