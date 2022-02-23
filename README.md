# Overview

This is a small [react](https://ru.reactjs.org/) library created to simplify the creation of web application pages. A variety of components will be collected in this library. Here is my link to the [Github](https://github.com/BohdanAlieksieiev/smallcom), I will be glad to receive new changes or suggestions regarding the library

# Usage

Install the component via npm: npm install smallcom.

## Field

```
import { Field } from "smallcom";
<Field
    value={value}
    onChange={(eValue: string) => console.log(eValue)}
    name="firstName"
    type="text"
    label="First name"
    cssInput="css-input"
    cssLabel="css-label"
    cssField="css-field"
/>
```

### Field props (FieldType)

| Name     | Type                 | Description                                   | Required | Default |
| -------- | -------------------- | --------------------------------------------- | -------- | ------- |
| value    | string               | field value                                   | true     | null    |
| onChange | function             | function that is called during a change       | true     | null    |
| name     | string               | name input                                    | true     | null    |
| type     | "text" or "password" | type input                                    | false    | "text"  |
| label    | string               | description of the field on the side          | false    | null    |
| cssInput | string               | css input                                     | false    | null    |
| cssLabel | string               | css label                                     | false    | null    |
| cssField | string               | css of the block in which are label and input | false    | null    |

## FieldArray

```
import { FieldArray } from "smallcom";
<FieldArray
  fields: [
    {
      label: "label",
      value: "value",
      onChange: (eValue: string) => console.log(eValue),
      name: "name",
      cssLabel: "color-red",
    },
    {
      label: "label 1",
      value: "value 1",
      onChange: (eValue: string) => console.log(eValue),
      name: "last",
    },
    {
      label: "label 2",
      value: "value 2",
      type: "password",
      onChange: (eValue: string) => console.log(eValue),
      name: "password",
    },
  ]
  cssBetweenField: "css_between_field"
  cssSection: "css_section"
/>
```

### FieldArray props

| Name            | Type        | Description                                                 | Required | Default |
| --------------- | ----------- | ----------------------------------------------------------- | -------- | ------- |
| fields          | FieldType[] | a field that accepts an array of objects to generate a form | true     | null    |
| cssSection      | string      | css section which contains the generated fields             | false    | null    |
| cssBetweenField | string      | css one input field                                         | false    | null    |

## Cyberpunk button

```
import { ButtonCyberpunk } from "smallcom";
<ButtonCyberpunk
    text="Text button"
    cssBtn="css-button"
    onClick={() => console.log("click button")}
/>
```

### Cyberpunk button props

| Name    | Type     | Description                                          | Required | Default |
| ------- | -------- | ---------------------------------------------------- | -------- | ------- |
| text    | string   | Text inside button                                   | true     |         |
| cssBtn  | string   | css button                                           | false    | null    |
| onClick | function | Function that is performed after pressing the button | true     |         |
