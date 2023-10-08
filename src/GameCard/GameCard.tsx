import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Stack,
  AspectRatio,
  em,
  px,
} from '@mantine/core';
import { useMediaQuery, useElementSize } from '@mantine/hooks';

import CartButton from './CardButtons/ButtonCart.tsx';
import FavButton from './CardButtons/ButtonFav.tsx';

import classes from './GameCard.module.css';

function GameCard({ gameObj }: any) {
  const isMobile = useMediaQuery(`(max-width: ${em(768)}`);
  const { ref, width, height } = useElementSize();

  const aspectRatio = 16 / 9;
  const buttonSize = isMobile ? 'lg' : 'xl';
  const badgeSize = isMobile ? 'xs' : 'md';

  const genres = gameObj.genre.slice(0, 2).map((genre = '') => {
    return (
      <Badge color='grey' variant='light' size={badgeSize}>
        {genre}
      </Badge>
    );
  });

  return (
    <Card
      className={classes.card}
      shadow='md'
      padding={isMobile ? 'sm' : 'md'}
      radius='md'
      m='auto'
      withBorder
      // component='a'
      // href='https://mantine.dev/'
    >
      {/* GAME BANNER */}
      <Card.Section>
        <AspectRatio ratio={aspectRatio} className={classes.banner}>
          <Image
            src={gameObj.banner.src}
            alt={gameObj.banner.alt}
            loading='lazy'
            fit='contain'
            w='auto'
            mx='auto'
          />
        </AspectRatio>
      </Card.Section>

      <Stack gap='xs'>
        <Group
          mt='sm'
          gap='xs'
          wrap='nowrap'
          justify='space-between'
          align='flex-start'
        >
          {/* GAME TITLE */}
          <Text
            ref={ref}
            size={isMobile ? 'sm' : 'md'}
            fw={500}
            lineClamp={2}
            style={{ flex: 1 }}
            mb={height > parseInt(`${px('2em')}`, 10) ? '0' : '1.5em'}
          >
            {`${gameObj.title}`}
          </Text>

          {/* PRICE BADGE */}
          <Badge color='dark' variant='light' mt={3} size={badgeSize}>
            {gameObj.price > 0 ? `$${gameObj.price}` : `Free`}
          </Badge>
        </Group>

        {/* GENRE BADGES */}
        <Group justify='space-between'>
          <Group
            gap='xs'
            wrap='wrap'
            style={{
              flexShrink: 0,
            }}
          >
            {genres}
          </Group>
        </Group>

        {/* DESCRIPTION BODY */}
        <Text
          className={classes['card-text']}
          size={isMobile ? 'xs' : 'sm'}
          mt={isMobile ? '0' : 'xs'}
          mb={isMobile ? 'xs' : 'md'}
          c='dimmed'
          lineClamp={isMobile ? 3 : 3}
        >
          {gameObj.description}
        </Text>

        {/* ACTION BUTTONS */}
        <Group justify='space-between' wrap='nowrap'>
          <FavButton size={buttonSize} />
          <CartButton
            size={buttonSize}
            disabled={gameObj.price > 0 ? false : true}
          />
        </Group>
      </Stack>
    </Card>
  );
}

export default GameCard;
