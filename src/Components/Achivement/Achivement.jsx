import { ImageList, ImageListItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";



const itemData = [
    {
        img: 'https://i.ibb.co/dGd9c5p/grp1.jpg',
        title: 'EECE-21',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/N3T2Bh3/received-589100430024069-1.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://i.ibb.co/DwqgGHQ/IMG-3488.jpg',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://i.ibb.co/CJSWC31/IMG-4008.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://i.ibb.co/VxSswkk/received-6869698239796613.jpg',
        title: 'Bike',
        cols: 2,
        rows: 1.3,
    },
];

const Achivement = () => {

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
                    itemData.map((item) => (
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