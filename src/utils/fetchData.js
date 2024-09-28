export const exerciseOptions = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
            'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
          'X-RapidAPI-Key': 'e265b049b3msh95f0d921ad67dd3p1c21a0jsn8a541e7e5ee4',
        }
      
};

  export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'e265b049b3msh95f0d921ad67dd3p1c21a0jsn8a541e7e5ee4',
  }
};




//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
//       'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
//     },
//   };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
