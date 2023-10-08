import { useDisclosure } from '@mantine/hooks';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';

import GameGrid from './GameGrid.tsx';

export default function AltLayout() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      layout='alt'
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding={{ base: '10px', sm: '20px', lg: '30px' }}
    >
      <AppShell.Header>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p='md'>
        <Group>
          <Burger opened={opened} onClick={toggle} hiddenFrom='sm' size='sm' />
          <Text>Navbar</Text>
        </Group>
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt='sm' animate={false} />
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        <GameGrid />
      </AppShell.Main>
    </AppShell>
  );
}
