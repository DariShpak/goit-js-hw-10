const API_KEY =
  'live_o1hxRx3w2sSm5G0KQn0OLE9CASclaI44IvlOLL4mU8H7kAGHCpdmtHblwbaxb8hT';

export const fetchBreeds = async () => {
  const url = 'https://api.thecatapi.com/v1/breeds';

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const data = await response.json();
    return data.map(breed => ({ id: breed.id, name: breed.name }));
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error;
  }
};

export const fetchCatByBreed = async breedId => {
  const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;

  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': API_KEY,
      },
    });
    const data = await response.json();
    const cat = data[0];
    return {
      imageUrl: cat.url,
      breedName: cat.breeds[0].name,
      description: cat.breeds[0].description,
      temperament: cat.breeds[0].temperament,
    };
  } catch (error) {
    console.error('Error fetching cat by breed:', error);
    throw error;
  }
};
