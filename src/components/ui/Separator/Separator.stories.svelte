<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createEnumArgType, createInvisibleArgTypes } from '$storybook/storybookUtil';
  import SBSeparatorExample, { SBSeparatorExampleDemoType } from './SBSeparatorExample.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Separator',
    component: SBSeparatorExample,
    argTypes: {
      ...createInvisibleArgTypes('ref'),
      orientation: {
        control: { type: 'select' },
        options: ['horizontal', 'vertical']
      },
      demo: createEnumArgType(SBSeparatorExampleDemoType)
    },
    args: {
      orientation: 'horizontal',
      demo: SBSeparatorExampleDemoType.Sections
    }
  });
</script>

<!-- Horizontal Separator -->
<Story
  name="Horizontal"
  args={{ orientation: 'horizontal', demo: SBSeparatorExampleDemoType.Sections }}
/>

<!-- Vertical Separator -->
<Story
  name="Vertical"
  args={{ orientation: 'vertical', demo: SBSeparatorExampleDemoType.Vertical }}
/>

<!-- In Menu -->
<Story name="In Menu" args={{ orientation: 'horizontal', demo: SBSeparatorExampleDemoType.Menu }} />
