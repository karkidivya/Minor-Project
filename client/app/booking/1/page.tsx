import axios from "axios";
import FrameContainer from "./frame-container";

async function getServiceProvider(){
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories`
  console.log(url)
  const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/serviceCategories`)
  const filteredData = data.map( (item: any) => {
    return { [item.categoryName]: item.categoryId}
  })
  console.log(data)
  console.log("Hello how are you")
}
export default function (){
    return<>
        <FrameContainer />
    </>
}