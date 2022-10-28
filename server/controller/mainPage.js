export const mainPage = (req, res) => {
  res.send(
    ` <h1 style='text-align:center'>Welcome to our superheroes database</h1>
        <ul>
          <li><a href='superheroes'>Superheroes list</a></li>
        </ul>`
  );
};
