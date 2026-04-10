<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createTextArgTypes } from '$storybook/storybookUtil';
  import SBDialogExample from './SBDialogExample.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Dialog',
    component: SBDialogExample,
    argTypes: {
      ...createTextArgTypes('triggerText', 'title', 'description')
    },
    args: {
      triggerText: 'Open Dialog',
      title: 'Dialog Title',
      description: 'This is a dialog description.',
      showFooter: true,
      showCloseButton: true
    }
  });
</script>

<!-- Default Dialog -->
<Story name="Default" />

<!-- Without Footer -->
<Story name="Without Footer" args={{ showFooter: false }} />

<!-- Without Close Button -->
<Story name="Without Close Button" args={{ showCloseButton: false }} />

<!-- Custom Content -->
<Story
  name="Custom Content"
  args={{
    title: 'Are you sure?',
    description: 'This action cannot be undone. This will permanently delete your account.'
  }}
/>
