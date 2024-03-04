import axios from 'axios'
const sampleApi = async (location: string, setData: (a: any) => void) =>{
    const URL = `https://api.geoapify.com/v1/geocode/autocomplete?text=${location}&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
    const {data} = await axios.get(URL)
    console.log(data)
    const filteredData = data?.features.map((item: any) => ({address: item.properties.formatted, latitude: item.properties.lat, longitude: item.properties.lon}))
    setData(filteredData)
}

export default sampleApi