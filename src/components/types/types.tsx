export type HomeNewsType = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: {
        id: string
        name: string
    }
    title: string
    url: string
    urlToImage: string
}

export type LastNewsType = {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}