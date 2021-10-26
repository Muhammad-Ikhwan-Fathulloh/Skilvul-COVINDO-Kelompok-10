export const getNews = async () => {
    // EDIT HERE
    try {
        const news =  await fetch(
            "https://newsapi.org/v2/top-headlines?q=covid&country=id&category=health&sortBy=publishedAt&apiKey=1bc17eb57ac9417eafe4ba36eee8620d"
        )
        .then((respone) => respone.json())
        
        return news
    } catch (error) {
        console.log(error);
        throw error
    }
};

export const getHospital = async() => {
    // EDIT HERE
};

export const getMaps = async() => {
    // EDIT HERE
};