<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { type ButtonSize, type ButtonVariant, buttonVariants } from '$ui/Button/index.js';
  import { cn } from '$util/svelteShadcnUtil.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'default',
    size = 'default',
    ...restProps
  }: AlertDialogPrimitive.ActionProps & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  } = $props();
</script>

<AlertDialogPrimitive.Action
  bind:ref
  data-slot="alert-dialog-action"
  class={cn(buttonVariants({ variant, size }), 'cn-alert-dialog-action', className)}
  {...restProps}
/>
