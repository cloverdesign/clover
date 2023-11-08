import { useEffect, useState } from "react";

export const getBlogPosts = () => {
    const [mediumData, setMediumData] = useState([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@cloverdesignhq")
            .then(res => res.json())
            .then(data => {
                setMediumData(data.items)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const posts = mediumData?.map((article) => {
        const desc = article.description.replace(/<figcaption>.*<\/figcaption>/gi, '').replace(/<[^>]+>/g, '');
        return {
            id: Math.random() * 10,
            title: article.title,
            thumbnail: article.thumbnail,
            desc: desc,
            date: article.pubDate,
            link: article.link
        }
    })
    return posts;
}