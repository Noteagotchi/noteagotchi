/**
 * Creates an entry for `argTypes` in a Storybook meta configuration. This makes
 * it so that the enum values are available in the Storybook controls instead
 * of as `0`, `1`, etc.
 *
 * Because of reverse-mapping in TypeScript enums https://www.typescriptlang.org/docs/handbook/enums.html#reverse-mappings
 * the options need to be filtered to just the string values for numeric enums.
 * For string enums, the values are used directly.
 * This solution was found here: https://stackoverflow.com/questions/67467762/how-to-map-enum-to-select-dropdown-in-storybook
 *
 * Example:
 *
 * ```
 * argTypes: {
 *   surveyQuestionDisplayType: createEnumArgType(SurveyQuestionDisplayType)
 * }
 * ```
 *
 * @param enumType The enum type to create the argType for.
 */
export function createEnumArgType<T extends Record<string, string | number>>(enumType: T): object {
  const values = Object.values(enumType);
  const isNumericEnum = values.some((x) => typeof x === 'number');

  if (isNumericEnum) {
    // Numeric enum - filter to get numbers as options and strings as labels
    return {
      options: values.filter((x) => typeof x === 'number'),
      control: {
        type: 'radio',
        labels: values.filter((x) => typeof x === 'string')
      }
    };
  } else {
    // String enum - use values directly
    return {
      control: {
        type: 'select'
      },
      options: values
    };
  }
}

/**
 * Creates an object of the set of component properties that should be invisible
 * for Storybook. So these are the names of properties on the component that
 * you don't want to show up in the Storybook UI. For example:
 *
 * ```
 * argTypes: {
 *   ...createInvisibleArgTypes('staticText', 'SurveyQuestionDisplayType')
 * },
 * ```
 *
 * @param args The names of the component properties to make invisible.
 */
export function createInvisibleArgTypes(...args: string[]) {
  return args.reduce((acc, arg) => ({ ...acc, [arg]: { table: { disable: true } } }), {});
}

export function createTextArgTypes(...args: string[]) {
  return args.reduce((acc, arg) => ({ ...acc, [arg]: { control: { type: 'text' } } }), {});
}

export function createBoolArgTypes(...args: string[]) {
  return args.reduce((acc, arg) => ({ ...acc, [arg]: { control: { type: 'boolean' } } }), {});
}

export function createNumberArgTypes(...args: string[]) {
  return args.reduce((acc, arg) => ({ ...acc, [arg]: { control: { type: 'number' } } }), {});
}
