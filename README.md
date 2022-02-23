# Overview

This is a small [react](https://ru.reactjs.org/) library created to simplify the creation of web application pages. A variety of components will be collected in this library. Here is my link to the [Github](https://github.com/BohdanAlieksieiev/smallcom), I will be glad to receive new changes or suggestions regarding the library

# Usage

Install the component via npm: npm install smallcom.

## Cyberpunk button

```
import { ButtonCyberpunk } from "smallcom";
<ButtonCyberpunk
    text="Text button"
    cssBtn="css-button";
    onClick={() => console.log("click button")}
/>
```

### Cyberpunk button props

| Name    | Type     | Description                                          | Required | Default |
| ------- | -------- | ---------------------------------------------------- | -------- | ------- |
| text    | string   | Text inside button                                   | true     |         |
| cssBtn  | string   | css button                                           | false    | null    |
| onClick | function | Function that is performed after pressing the button | true     |         |
