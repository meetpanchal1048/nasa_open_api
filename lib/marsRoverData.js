
export async function fetchMarsRoverData(){
   const res = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=navcam&api_key=ufwbd2RXG1SwH5zbpsKMdkKMr0xeUCok6e38L5xo")
    return res.json()
}

export async function fetchMarsRoverAllData(){
    const res = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=ufwbd2RXG1SwH5zbpsKMdkKMr0xeUCok6e38L5xo")
     return res.json()
 }