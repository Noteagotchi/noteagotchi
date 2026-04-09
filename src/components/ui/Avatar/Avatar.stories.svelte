<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createEnumArgType, createInvisibleArgTypes } from '$storybook/storybookUtil';
  import SBAvatarExample, {
    SBAvatarExampleDemoType,
    SBAvatarExampleSizeType
  } from './SBAvatarExample.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Avatar',
    component: SBAvatarExample,
    argTypes: {
      ...createInvisibleArgTypes('ref', 'loadingStatus'),
      demo: createEnumArgType(SBAvatarExampleDemoType),
      size: createEnumArgType(SBAvatarExampleSizeType),
      imageUrl: {
        control: { type: 'text' }
      },
      fallbackText: {
        control: { type: 'text' }
      }
    },
    args: {
      demo: SBAvatarExampleDemoType.Default,
      size: SBAvatarExampleSizeType.Default,
      imageUrl: 'https://github.com/shadcn.png',
      fallbackText: 'CN'
    }
  });
</script>

<!-- Default Avatar -->
<Story name="Default" args={{ demo: SBAvatarExampleDemoType.Default }} />

<!-- With Image -->
<Story name="With Image" args={{ demo: SBAvatarExampleDemoType.WithImage }} />

<!-- With Fallback -->
<Story
  name="With Fallback"
  args={{ demo: SBAvatarExampleDemoType.WithFallback, fallbackText: 'JD' }}
/>

<!-- Different Sizes -->
<Story name="Sizes" args={{ demo: SBAvatarExampleDemoType.Sizes }} />

<!-- Small -->
<Story
  name="Small"
  args={{ demo: SBAvatarExampleDemoType.Default, size: SBAvatarExampleSizeType.Small }}
/>

<!-- Large -->
<Story
  name="Large"
  args={{ demo: SBAvatarExampleDemoType.Default, size: SBAvatarExampleSizeType.Large }}
/>
