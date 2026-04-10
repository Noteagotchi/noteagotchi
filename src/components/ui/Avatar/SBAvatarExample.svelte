<script lang="ts" module>
  export enum SBAvatarExampleDemoType {
    Default = 'Default',
    WithImage = 'WithImage',
    WithFallback = 'WithFallback',
    Sizes = 'Sizes'
  }

  export enum SBAvatarExampleSizeType {
    Small = 'sm',
    Default = 'default',
    Large = 'lg'
  }
</script>

<script lang="ts">
  import Avatar from './Avatar.svelte';
  import AvatarFallback from './AvatarFallback.svelte';
  import AvatarImage from './AvatarImage.svelte';

  let {
    demo = SBAvatarExampleDemoType.Default,
    size = SBAvatarExampleSizeType.Default,
    imageUrl = 'https://github.com/shadcn.png',
    fallbackText = 'CN'
  }: {
    demo?: SBAvatarExampleDemoType;
    size?: SBAvatarExampleSizeType;
    imageUrl?: string;
    fallbackText?: string;
  } = $props();
</script>

{#if demo === SBAvatarExampleDemoType.Default}
  <Avatar {size}>
    <AvatarImage src={imageUrl} alt="Avatar" />
    <AvatarFallback>{fallbackText}</AvatarFallback>
  </Avatar>
{:else if demo === SBAvatarExampleDemoType.WithImage}
  <Avatar {size}>
    <AvatarImage src={imageUrl} alt="Avatar with image" />
    <AvatarFallback>{fallbackText}</AvatarFallback>
  </Avatar>
{:else if demo === SBAvatarExampleDemoType.WithFallback}
  <Avatar {size}>
    <AvatarImage src="invalid-url.jpg" alt="Avatar" />
    <AvatarFallback>{fallbackText}</AvatarFallback>
  </Avatar>
{:else if demo === SBAvatarExampleDemoType.Sizes}
  <div class="flex items-center gap-4">
    <Avatar size="sm">
      <AvatarImage src={imageUrl} alt="Small avatar" />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
    <Avatar size="default">
      <AvatarImage src={imageUrl} alt="Default avatar" />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
    <Avatar size="lg">
      <AvatarImage src={imageUrl} alt="Large avatar" />
      <AvatarFallback>{fallbackText}</AvatarFallback>
    </Avatar>
  </div>
{/if}
