import { fetchMarsRoverData } from "@/lib/marsRoverData";
import { fetchMarsRoverAllData } from "@/lib/marsRoverData";
import styles from "../page.module.css";

export default async function Page({ params }) {
    const searchedVal = params.apiname;
    const roverData = await fetchMarsRoverData();
    const allRoverData = await fetchMarsRoverAllData();

    return (
        <>
            {/* <Navbar/> */}
            <div className={styles.headerMain}>
                <a href="/">NASA OPEN API</a>
                <p> / {searchedVal}</p>
            </div>
            <div className={styles.imagesMain}>
                {searchedVal === "MarsRoverNavcam" &&
                    roverData.photos.map((item) => (
                        <div className={styles.imgBox} key={item.id}>
                            <img src={item.img_src} alt="Mars Rover Photo" />
                        </div>
                    ))
                }
                {searchedVal === "MarsRoverAll" &&
                    allRoverData.photos.slice(100, 300).map((item) => (
                        <div className={styles.imgBox} key={item.id}>
                            <img src={item.img_src} alt="Mars Rover Photo" />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
