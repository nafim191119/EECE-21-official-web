import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

const Project = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [projectItem, setProjectItem] = useState([]);
    useEffect(() => {
        fetch('projectItem.json')
            .then(res => res.json())
            .then(data => setProjectItem(data))
    }, [])
    return (
        <div className="mx-4">
            <div className="mt-8 bg-green-500 p-2 rounded-0 rounded-t-lg">
                <h1 className="text-2xl md:text-3xl font-bold text-center text-white mb-2 uppercase underline">Our Project</h1>
                <p className="text-md md:text-xl text-center text-white">These are our group project in previous semester.</p>
            </div>
            <ImageList sx={{ width: "100%", height: isMobile ? 300 : 450 }} cols={isMobile ? 2 : 4}>
                {
                    projectItem.map((item) => (
                        <ImageListItem key={item.img} cols={1}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                                style={{ width: '100%', height: 'auto' }} 
                            />
                            <ImageListItemBar
                                title={item.title}
                                subtitle={item.author}
                            />
                        </ImageListItem>
                    ))
                }
            </ImageList>
        </div>
    );
};

export default Project;