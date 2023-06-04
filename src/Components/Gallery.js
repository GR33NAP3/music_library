import { useContext } from "react"
import GalleryItem from './GalleryItem'
import { DataContext } from "../Contexts/DataContext"

function Gallery() {
    const data = useContext(DataContext)
    //makes a gallery item for each item in the data array from i tunes
    const display = data.map((item,i) => {
        return <GalleryItem key={i} item={item} />
    })

    return(
        <div>
            {display}
        </div>
    )
}

export default Gallery