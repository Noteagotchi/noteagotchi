<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { fn } from 'storybook/test';
  import { createInvisibleArgTypes } from '$storybook/storybookUtil';
  import Button from '$ui/Button/Button.svelte';
  import ButtonGroup from './ButtonGroup.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/ButtonGroup',
    component: ButtonGroup,
    argTypes: {
      ...createInvisibleArgTypes('ref', 'children'),
      orientation: {
        control: { type: 'select' },
        options: ['horizontal', 'vertical']
      }
    },
    args: {
      orientation: 'horizontal',
      onclick: fn()
    }
  });
</script>

<!-- Horizontal Button Group -->
<Story name="Horizontal">
  <Button variant="outline">Left</Button>
  <Button variant="outline">Center</Button>
  <Button variant="outline">Right</Button>
</Story>

<!-- Vertical Button Group -->
<Story name="Vertical" args={{ orientation: 'vertical' }}>
  <Button variant="outline">Top</Button>
  <Button variant="outline">Middle</Button>
  <Button variant="outline">Bottom</Button>
</Story>

<!-- With Different Variants -->
<Story name="Mixed Variants">
  <Button variant="default">Save</Button>
  <Button variant="outline">Cancel</Button>
  <Button variant="destructive">Delete</Button>
</Story>

<!-- Outline Button Group -->
<Story name="All Outline">
  <Button variant="outline">First</Button>
  <Button variant="outline">Second</Button>
  <Button variant="outline">Third</Button>
  <Button variant="outline">Fourth</Button>
</Story>

<!-- Two Buttons -->
<Story name="Two Buttons">
  <Button variant="outline">Yes</Button>
  <Button variant="outline">No</Button>
</Story>
