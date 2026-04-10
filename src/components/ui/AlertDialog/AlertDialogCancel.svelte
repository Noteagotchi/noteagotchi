<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { type ButtonSize, type ButtonVariant, buttonVariants } from '$ui/Button/index.js';
  import { cn } from '$util/svelteShadcnUtil.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'outline',
    size = 'default',
    ...restProps
  }: AlertDialogPrimitive.CancelProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  } = $props();
</script>

<AlertDialogPrimitive.Cancel
  bind:ref
  data-slot="alert-dialog-cancel"
  class={cn(buttonVariants({ variant, size }), 'cn-alert-dialog-cancel', className)}
  {...restProps}
/>
