import { utils } from './utils';
const createCanvas = () => document.createElement('canvas');
export default class ImageStroke {
    constructor(useMethod) {
        this.canvas = null;
        this.glCanvas = null;
        this.useMethod = useMethod;
    }
    getCanvas(useMethod = this.useMethod) {
        if (useMethod.context === 'gl') {
            this.glCanvas = this.glCanvas || createCanvas();
            return this.glCanvas;
        }
        else {
            this.canvas = this.canvas || createCanvas();
            return this.canvas;
        }
    }
    initMethod(image = this.image, useMethod = this.useMethod) {
        if (this.image !== image || this.useMethod !== useMethod) {
            this.method = useMethod.create(this.getContext(useMethod), image);
        }
    }
    setImage(image) {
        this.initMethod(image);
    }
    use(useMethod) {
        this.initMethod(undefined, useMethod);
        this.useMethod = useMethod;
    }
    make(image, options) {
        this.initMethod(image);
        this.image = image;
        const canvas = this.getCanvas();
        const strokeSize = options.thickness * 2;
        const [resultWidth, resultHeight] = [this.image.width, this.image.height].map((val) => val + strokeSize);
        const context = this.getContext();
        if (resultWidth !== canvas.width || resultHeight !== canvas.height) {
            canvas.width = resultWidth;
            canvas.height = resultHeight;
        }
        utils.clear(context);
        this.method(options);
        return canvas;
    }
    getContext(useMethod = this.useMethod) {
        const canvas = this.getCanvas(useMethod);
        switch (useMethod.context) {
            case 'gl':
                return canvas.getContext('webgl');
            case '2d':
                return canvas.getContext('2d');
        }
    }
}
