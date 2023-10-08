import { Grid } from '@mantine/core';

import GameCard from './GameCard/GameCard.tsx';

import games from './GameCard/games.json';

function getRandomNum(min = 300, max = 500) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min).toString(); // Inclusive both sides
}

function GameGrid() {
  const gameList = games.map((game) => {
    return (
      <Grid.Col span={{ base: 6, xs: 4, sm: 6, lg: 4, xl: 3, xxl: 2.4 }}>
        <GameCard
          gameObj={{
            ...game,
            banner: {
              src: `https://placekitten.com/${getRandomNum()}/${getRandomNum()}`,
              alt: 'kitto',
            },
          }}
        />
      </Grid.Col>
    );
  });

  return (
    <Grid gutter={{ base: 5, sm: 'md', lg: 'xl' }} justify='flex-start'>
      {gameList}
    </Grid>
  );
}

export default GameGrid;
