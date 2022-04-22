import { ref } from 'vue'

export default function getProjects() {

    let projects = ref([
        {
            id:1, 
            headline: 'League of Legends', 
            finishdate: '22/04/2022', 
            video: 'https://www.youtube.com/embed/mDYqT0_9VR4', 
            imgLink: 'https://via.ritzau.dk/data/images/00846/e8f0a94e-f61c-40b7-8e39-0044563e4405.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet lorem quam, eget pretium quam volutpat eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            id:2,
            headline: 'World of Warcraft',
            finishdate: '22/04/2022',
            video: 'https://www.youtube.com/embed/3ZtedjN1JXY',
            imgLink:'https://blz-contentstack-images.akamaized.net/v3/assets/blt9c12f249ac15c7ec/blt378913a9586a312e/624742cdc6d11125f3c9aef5/cinematic_render_2.jpg?auto=webp',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet lorem quam, eget pretium quam volutpat eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            id:3,
            headline: 'Runescape',
            finishdate: '22/04/2022',
            video: 'https://www.youtube.com/embed/mXAvlbgd_-c',
            imgLink: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/01/Runescape.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet lorem quam, eget pretium quam volutpat eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            id:4,
            headline: 'The elder scrolls online',
            finishdate: '22/04/2022',
            video: 'https://www.youtube.com/embed/X6sBQfGHSFU',
            imgLink: 'https://esossl-a.akamaihd.net/assets/img/cms/media/15e4373469a8ccbaa1d4f76a42f0ba5a_destruction-threatens-blackwood_wallpaper-1920x1080.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet lorem quam, eget pretium quam volutpat eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            id:5,
            headline: 'Valorant',
            finishdate: '22/04/2022',
            video: 'https://www.youtube.com/embed/OyLHi34Qzv4',
            imgLink: 'https://www.gvme.org/pages/get_image_large.php?id=4466',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet lorem quam, eget pretium quam volutpat eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        
    ])

    return { projects}
}