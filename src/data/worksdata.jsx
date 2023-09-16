import helggImg from '../assets/helgg.jpg'
import pluginImg from '../assets/plugin/pluginBag.png'
import avantVid from '../assets/avant/avant.mp4'

console.log(helggImg)

export const WorksData = [
    {
        id: 1,
        title: "Helgg",
        description: "Helgg Scooters LTD",
        tags: ["Branding"],
        img: helggImg,
        type: "pic"
    },
    {
        id: 2,
        title: "Plugin",
        description: '"one-stop shop"',
        tags: ["Branding", "Logo Design", "Motion language"],
        img: pluginImg,
        type: "pic"
    },
    {
        id: 3,
        title: "Avant-Garde",
        description: "Foundation",
        tags: ["Branding", "Logo Design"],
        vid: avantVid,
        type: "vid"
    }
]