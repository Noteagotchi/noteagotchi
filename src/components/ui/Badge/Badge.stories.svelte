<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createInvisibleArgTypes } from '$storybook/storybookUtil';
  import Badge from './Badge.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Badge',
    component: Badge,
    argTypes: {
      ...createInvisibleArgTypes('ref', 'children'),
      variant: {
        control: { type: 'select' }
      }
    },
    args: {
      variant: 'default'
    }
  });
</script>

<!-- Default Badge -->
<Story name="Default">Badge</Story>

<!-- Secondary Badge -->
<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary</Story>

<!-- Destructive Badge -->
<Story name="Destructive" args={{ variant: 'destructive' }}>Destructive</Story>

<!-- Outline Badge -->
<Story name="Outline" args={{ variant: 'outline' }}>Outline</Story>

<!-- Ghost Badge -->
<Story name="Ghost" args={{ variant: 'ghost' }}>Ghost</Story>

<!-- Link Badge -->
<Story name="Link" args={{ variant: 'link', href: '#link' }}>Link Badge</Story>
