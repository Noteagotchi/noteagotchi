<script lang="ts">
  import type { ButtonVariant } from '$ui/Button/Button.svelte';
  import Button from '$ui/Button/Button.svelte';
  import AlertDialog from './AlertDialog.svelte';
  import AlertDialogAction from './AlertDialogAction.svelte';
  import AlertDialogCancel from './AlertDialogCancel.svelte';
  import AlertDialogContent from './AlertDialogContent.svelte';
  import AlertDialogDescription from './AlertDialogDescription.svelte';
  import AlertDialogFooter from './AlertDialogFooter.svelte';
  import AlertDialogHeader from './AlertDialogHeader.svelte';
  import AlertDialogTitle from './AlertDialogTitle.svelte';
  import AlertDialogTrigger from './AlertDialogTrigger.svelte';

  let {
    triggerText = 'Open Dialog',
    triggerVariant = 'outline',
    title = 'Are you absolutely sure?',
    description = 'This action cannot be undone.',
    showDescription = true,
    cancelText = 'Cancel',
    actionText = 'Continue',
    actionClass = ''
  }: {
    triggerText?: string;
    triggerVariant?: ButtonVariant;
    title?: string;
    description?: string;
    showDescription?: boolean;
    cancelText?: string;
    actionText?: string;
    actionClass?: string;
  } = $props();
</script>

<AlertDialog>
  <AlertDialogTrigger>
    <Button variant={triggerVariant}>{triggerText}</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>{title}</AlertDialogTitle>
      {#if showDescription}
        <AlertDialogDescription>{description}</AlertDialogDescription>
      {/if}
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>{cancelText}</AlertDialogCancel>
      <AlertDialogAction class={actionClass}>{actionText}</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
