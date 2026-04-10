<script lang="ts" module>
  export enum SBSeparatorExampleDemoType {
    Sections = 'Sections',
    Vertical = 'Vertical',
    Menu = 'Menu'
  }
</script>

<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import Separator from './Separator.svelte';

  let {
    orientation = 'horizontal',
    demo = SBSeparatorExampleDemoType.Sections,
    ...rest
  }: {
    demo?: SBSeparatorExampleDemoType;
  } & ComponentProps<typeof Separator> = $props();
</script>

{#if demo === SBSeparatorExampleDemoType.Sections}
  <div class="space-y-4">
    <div>
      <h4 class="text-sm font-medium leading-none">Section 1</h4>
      <p class="text-sm text-muted-foreground">This is the first section.</p>
    </div>
    <Separator {orientation} {...rest} />
    <div>
      <h4 class="text-sm font-medium leading-none">Section 2</h4>
      <p class="text-sm text-muted-foreground">This is the second section.</p>
    </div>
  </div>
{:else if demo === SBSeparatorExampleDemoType.Vertical}
  <div class="flex h-20 items-center space-x-4">
    <div class="flex-1 text-center">
      <h4 class="text-sm font-medium">Left</h4>
    </div>
    <Separator {orientation} {...rest} />
    <div class="flex-1 text-center">
      <h4 class="text-sm font-medium">Right</h4>
    </div>
  </div>
{:else if demo === SBSeparatorExampleDemoType.Menu}
  <div class="w-64 rounded-md border p-2">
    <div class="px-2 py-1.5 text-sm font-semibold">Menu</div>
    <Separator class="my-1" {orientation} {...rest} />
    <div class="space-y-1">
      <div class="rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer">Item 1</div>
      <div class="rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer">Item 2</div>
      <Separator class="my-1" {orientation} {...rest} />
      <div class="rounded-sm px-2 py-1.5 text-sm hover:bg-accent cursor-pointer">Item 3</div>
    </div>
  </div>
{/if}
