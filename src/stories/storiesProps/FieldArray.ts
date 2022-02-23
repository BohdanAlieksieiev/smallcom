export const propsFieldArray = {
  fields: [
    {
      label: "Anvil",
      value: "bohdan",
      onChange: (eValue: string) => console.log(eValue),
      name: "name",
      cssLabel: "color-red",
    },
    {
      label: "Anvil 1",
      value: "bohdan 1",
      onChange: (eValue: string) => console.log(eValue),
      name: "last",
    },
    {
      label: "Anvil 2",
      value: "bohdan 2",
      type: "password",
      onChange: (eValue: string) => console.log(eValue),
      name: "password",
    },
  ],
  cssBetweenField: "css_between_field",
};

export const propsField = {
  label: "Anvil",
  value: "bohdan",
  onChange: (eValue: string) => console.log(eValue),
  name: "name",
  // cssInput?: string;
  // cssLabel?: string;
  // cssField?: string;
};
