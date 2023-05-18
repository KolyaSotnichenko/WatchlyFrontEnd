export interface IVideoPlayer{
    videoSource: string
    slug: string
    subtitles: string
}

export interface IVideoElement extends HTMLVideoElement {
    msRequestFullscreen?: () => void
    mozRequestFullscreen?: () => void
    webkitRequestFullscreen?: () => void
}