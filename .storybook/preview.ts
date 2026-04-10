import '../src/globalStyles/global.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/sveltekit';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      options: {
        mobile: {
          name: 'Mobile (450x800)',
          styles: { width: '450px', height: '800px' },
          type: 'mobile'
        }
      }
    },
    options: {
      storySort: {
        order: ['Pages', 'Components', 'Singletons', '*']
      }
    }
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark'
      },
      defaultTheme: 'dark'
    })
  ]
};

export default preview;
