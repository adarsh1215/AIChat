export default async function getAns(ques) {

    const url = 'https://chatgpt-gpt-3-5.p.rapidapi.com/ask';
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'e0dd76157emsh7080062fcaf0e78p12f094jsn0125d1362bbb',
            'X-RapidAPI-Host': 'chatgpt-gpt-3-5.p.rapidapi.com'
        },
        body: JSON.stringify({
            query: ques
        })
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.response);
        return result.response;
    } catch (error) {
        console.error(error);
    }
}