<script lang="ts">
  import Button, { buttonVariants } from '../Button/Button.svelte';
  import Dialog from './Dialog.svelte';
  import DialogClose from './DialogClose.svelte';
  import DialogContent from './DialogContent.svelte';
  import DialogDescription from './DialogDescription.svelte';
  import DialogFooter from './DialogFooter.svelte';
  import DialogHeader from './DialogHeader.svelte';
  import DialogTitle from './DialogTitle.svelte';
  import DialogTrigger from './DialogTrigger.svelte';

  let {
    triggerText = 'Open Dialog',
    title = 'Dialog Title',
    description = 'This is a dialog description.',
    showFooter = true,
    showCloseButton = true
  }: {
    triggerText?: string;
    title?: string;
    description?: string;
    showFooter?: boolean;
    showCloseButton?: boolean;
  } = $props();
</script>

<Dialog>
  <DialogTrigger>
    <Button>{triggerText}</Button>
  </DialogTrigger>
  <DialogContent {showCloseButton}>
    <DialogHeader>
      <DialogTitle>{title}</DialogTitle>
      <DialogDescription>{description}</DialogDescription>
    </DialogHeader>
    <div class="py-4">
      <p class="text-sm">Dialog content goes here.</p>
    </div>
    {#if showFooter}
      <DialogFooter>
        <DialogClose class={buttonVariants({ variant: 'outline' })}>Cancel</DialogClose>
        <Button>Continue</Button>
      </DialogFooter>
    {/if}
  </DialogContent>
</Dialog>
