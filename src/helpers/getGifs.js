export const getGifs = async ( category ) => {
    const gifLimit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category)  }&limit=${ gifLimit }&api_key=oTl2HNPCWwqH1cEc3b5D8SYBgSk12ihn`;
    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        };
    });
    return gifs;
};
