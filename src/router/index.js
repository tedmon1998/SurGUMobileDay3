import FacebookPage from "../pages/FacebookPage"
import GithubPage from "../pages/GithubPage"
import TwitterPage from "../pages/TwitterPage"
import VkPage from "../pages/VkPage"

export const publickRoutName = {
    twitter: 'twitter',
    facebook: 'facebook',
    vk: 'vk',
}

export const privateRoutNames = {
    github: 'github',
}

export const publickRoutes = [
    { path: `/${publickRoutName.facebook}`, component: FacebookPage },
    { path: `/${publickRoutName.vk}`, component: VkPage },
    { path: `/${publickRoutName.twitter}`, component: TwitterPage },
]

export const privateRoutes = [
    { path: `/${publickRoutName.github}`, component: GithubPage },
]