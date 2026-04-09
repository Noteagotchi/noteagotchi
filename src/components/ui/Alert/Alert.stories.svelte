<script module lang="ts">
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import { createInvisibleArgTypes } from '$storybook/storybookUtil';
  import Alert from './Alert.svelte';
  import AlertDescription from './AlertDescription.svelte';
  import AlertTitle from './AlertTitle.svelte';

  const { Story } = defineMeta({
    title: 'UI Components/Alert',
    component: Alert,
    argTypes: {
      ...createInvisibleArgTypes('ref', 'children')
    },
    args: {
      variant: 'default'
    }
  });
</script>

<!-- Basic Alert -->
<Story name="Default">
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Story>

<!-- Destructive Alert -->
<Story name="Destructive" args={{ variant: 'destructive' }}>
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Your session has expired. Please log in again.</AlertDescription>
</Story>

<!-- Title Only -->
<Story name="Title Only">
  <AlertTitle>Simple notification</AlertTitle>
</Story>

<!-- Description Only -->
<Story name="Description Only">
  <AlertDescription>This alert only contains a description without a title.</AlertDescription>
</Story>
