const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'd1e2c745fe93e51ccb5026d582f15b2d',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig