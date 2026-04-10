<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createInvisibleArgTypes } from '$storybook/storybookUtil';
  import SBAlertDialogExample from './SBAlertDialogExample.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/AlertDialog',
    component: SBAlertDialogExample,
    argTypes: {
      ...createInvisibleArgTypes('ref')
    },
    args: {
      triggerText: 'Open Dialog',
      triggerVariant: 'outline',
      title: 'Are you absolutely sure?',
      description: 'This action cannot be undone.',
      showDescription: true,
      cancelText: 'Cancel',
      actionText: 'Continue',
      actionClass: ''
    }
  });
</script>

<!-- Default AlertDialog -->
<Story name="Default" />

<!-- AlertDialog without Description -->
<Story name="Without Description" args={{ showDescription: false }} />

<!-- Destructive AlertDialog -->
<Story
  name="Destructive"
  args={{
    triggerText: 'Delete Account',
    triggerVariant: 'destructive',
    title: 'Delete Account',
    description: 'This will permanently delete your account and remove your data from our servers.',
    actionText: 'Delete',
    actionClass: 'bg-destructive text-destructive-foreground hover:bg-destructive/90'
  }}
/>

<!-- Long Content -->
<Story
  name="Long Content"
  args={{
    triggerText: 'Show Terms',
    title: 'Terms and Conditions',
    description:
      'By continuing, you agree to our Terms of Service and Privacy Policy. Please read them carefully before proceeding.',
    cancelText: 'Decline',
    actionText: 'Accept'
  }}
/>
