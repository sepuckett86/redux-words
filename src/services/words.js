export const getWordsFromGist = (search, limit = 10) => {
  return fetch('https://gist.githubusercontent.com/mehtaphysical/ed50c7079ef211dd1f395e08db69ac7b/raw/a9d710e083d57fc01b75b77370127d68de3864a5/words.json')
    .then(res => {
      if(!res.ok) throw 'Unable to fetch stuff bruh :(';
      return res.json();
    })
    .then(res => {
      return res.filter(word => word.includes(search));
    })
    .then(res => {
      const shortened = res.slice(0, limit);
      return shortened;
    });
};

