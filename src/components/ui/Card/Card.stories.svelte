<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createInvisibleArgTypes } from '$storybook/storybookUtil';
  import Card from './Card.svelte';
  import CardContent from './CardContent.svelte';
  import CardDescription from './CardDescription.svelte';
  import CardFooter from './CardFooter.svelte';
  import CardHeader from './CardHeader.svelte';
  import CardTitle from './CardTitle.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Card',
    component: Card,
    argTypes: {
      ...createInvisibleArgTypes('ref', 'children'),
      size: {
        control: { type: 'select' },
        options: ['default', 'sm']
      }
    },
    args: {
      size: 'default'
    }
  });
</script>

<!-- Basic Card -->
<Story name="Default">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Story>

<!-- Small Card -->
<Story name="Small" args={{ size: 'sm' }}>
  <CardHeader>
    <CardTitle>Small Card</CardTitle>
    <CardDescription>This card has smaller padding.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content with reduced spacing.</p>
  </CardContent>
</Story>

<!-- Simple Card -->
<Story name="Content Only">
  <CardContent>
    <p>A simple card with only content.</p>
  </CardContent>
</Story>

<!-- Card with Only Header -->
<Story name="Header Only">
  <CardHeader>
    <CardTitle>Header Only Card</CardTitle>
    <CardDescription>This card has no content or footer.</CardDescription>
  </CardHeader>
</Story>
