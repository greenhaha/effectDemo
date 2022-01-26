# 特效工程

这时一个对透明背景图片添加各种特效的工程。

## 运行本Demo

### 安装

``` bash
yarn install
```

### 运行命令

```
yarn dev
```

### 实现原理

There are three built-in methods to make stroke. Choose one of them in different situations.

- Rotate. Rotate the image with 360 degree.
- Contour. Detects contours of the image by [Marching Squares](https://en.wikipedia.org/wiki/Marching_squares) and get the paths, then stroke those paths.
- Rotate by WebGL. The same as 「Rotate」 but implements in WebGL.

对于透明图片的特效实现则是利用[Marching Squares](https://en.wikipedia.org/wiki/Marching_squares)方法，通过在canvas中添加各种参数实现不同的效果

### 特效4 阴影特效
``` javascript
import traceRegion from 'marching-squares';
export function getContours(ctx, opacityThreshold = 100) {
    const { width, height } = ctx.canvas;
    const { data } = ctx.getImageData(0, 0, width, height);
    const isInside = (x, y) => {
        return x >= 0 && y >= 0 && x < width && y < height
            ? data[(y * width + x) * 4 - 1] > opacityThreshold
            : false;
    };
    let contours = [];
    let startPos = -1;
    for (let i = 3; i < data.length; i += 4) {
        if (data[i] > opacityThreshold) {
            startPos = (i + 1) / 4;
            break;
        }
    }
    if (startPos >= 0) {
        contours = traceRegion(startPos % width, Math.floor(startPos / width), isInside);
    }
    return contours;
}
const canvas4Image = document.createElement('canvas');
const ctx4Image = canvas4Image.getContext('2d');
export default {
    context: '2d',
    create(ctx, image) {
        return (options) => {
            ctx.save();
            canvas4Image.width = image.width;
            canvas4Image.height = image.height;
            ctx4Image.drawImage(image, 0, 0);
            const contours = getContours(ctx4Image);
            const x = options.thickness;
            const y = options.thickness;
            ctx.shadowOffsetX = options.thickness - 50;
            // 偏移量Y
            ctx.shadowOffsetY = options.thickness / 2;
            ctx.shadowColor = options.color;
            ctx.shadowBlur = 40;
            // 填充个淡淡的颜色，以示尊敬
            ctx.fillStyle = 'white';
            ctx.strokeStyle = 'rgba(0,0,0,0)';
            ctx.beginPath();
            ctx.moveTo(x + contours[0].x, y + contours[1].y);
            for (let i = 1; i < contours.length; i++) {
                ctx.lineTo(x + contours[i].x, y + contours[i].y);
            }
            ctx.closePath();
            ctx.fill('nonzero')
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};

```