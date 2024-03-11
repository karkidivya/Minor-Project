import axios from 'axios'
const placeFromPoint = async (lat: number, lng: number) =>{
    const URL = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lng}&type=postcode&lang=en&limit=3&format=json&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`
    const {data} = await axios.get(URL)
    console.log(data)
    const filteredData = {latitude: data?.results[0].lat, longitude: data?.results[0].lon, address: data?.results[0].formatted}
    console.log(filteredData)
    return filteredData
    // setData({addresss: filteredData, latitude: lat, longitude: lng})
}

export default placeFromPoint