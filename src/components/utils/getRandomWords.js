export const getRandomWords = (wordObject, count = 4) => {
    const shuffled = [...wordObject].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};