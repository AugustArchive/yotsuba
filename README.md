<table style="width: 100%; border-style: none;"><tr>
<td style="width: 140px; text-align: center;"><img width="128px" src="./assets/Yotsuba.jpg" alt="Yotsuba">
</td>
<td style="width: 140px; text-align: center;">
<strong>Yotsuba</strong><br/>
<i>Automation library made in TypeScript</i>
</td>
</tr></table>

## Usage

```js
const { Coordinator, Shell } = require('yotsuba');
const coordinator = new Coordinator();
const shell = new Shell();

coordinator
    .register(() => {
        const cd = shell.execSync('cd', ['..']);
        if (!cd) return false;
        
        const cd2 = shell.execSync('cd', ['dist']);
        if (!cd2) return false;
        
        const clone = shell.execSync('git', ['clone', 'https://github.com/ohlookitsderpy/leeks.js', 'leeks']);
        if (!clone) return false;

        console.log('Cloned leeks.js to dist folder!');
        return true;
    })
    .run();
```

## CLI Usage
> In `0.0.7+`, it's now possible to initialize and run projects with Yotsuba's CLI Utility
>
> To use it, run `npm i -g yotsuba` to **globally** install Yotsuba

```sh
# Run all tasks
$ yotsuba

# Initialize a new Yotsuba project
$ yotsuba init
```

## License

> [Yotsuba](https://github.com/auguwu/yotsuba) is made by auguwu and released under the MIT license

```
Copyright (c) 2019-present auguwu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
