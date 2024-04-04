import { ImageList, ImageListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery"; 
import { useEffect, useState } from "react";

const Achivement = () => {

    const [mistLifeInfo, setMistLifeInfo] = useState([]);
    useEffect(() => {
        fetch('mistLifeInfo.json')
            .then(res => res.json())
            .then(data => setMistLifeInfo(data))
    }, [])

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }

    const cols = isMobile ? 2 : 4;



    return (
        <div className="mx-4">
            <div className="mt-10 bg-pink-800 p-2 rounded-0 rounded-t-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-2 uppercase underline">Unity in Vision</h1>
                <p className="text-md md:text-xl text-center text-white">EECE-21 Collective Essence Captured.</p>
            </div>
            <ImageList
                sx={{ width: "100%", height: "auto" }}
                variant="quilted"
                cols={cols}
                rowHeight={121}
            >
                {
                    mistLifeInfo.map((item) => (
                        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img
                                {...srcset(item.img, 121, item.rows, item.cols)}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </div>
    );
};

export default Achivement;