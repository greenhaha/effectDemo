import imageUrl from './test.png';
import ImageStroke from '../src/index';
import methodRotate from '../src/method-rotate';
import methodContour from '../src/method-contour';
import methodEffect from '../src/method-effect';
import methodEffect2 from '../src/method-effect2';
import methodEffect3 from '../src/method-effect3';
import methodEffect4 from '../src/method-effect4';
const $canvas = document.getElementById('canvas');
const $select = document.getElementById('select');
const $select1 = document.getElementById('select1');
const $thickness = document.getElementById('thickness');
const $color = document.getElementById('color');
const $file = document.getElementById('file');
const $time = document.getElementById('time');
const showPerf = () => {
    const startTime = performance.now();
    return () => {
        $time.innerText = Math.round(performance.now() - startTime) + 'ms';
    };
};
let targetImage;
const imageStroke = new ImageStroke(methodRotate);
const methodMap = {
    rotate: methodRotate,
    contour: methodContour,
    effect: methodEffect,
    effect2: methodEffect2,
    effect3: methodEffect3,
    effect4: methodEffect4
};
const update = () => {
    const endPerf = showPerf();
    imageStroke.use(methodMap[$select.value]);
    const result = imageStroke.make(targetImage, {
        thickness: Number($thickness.value),
        color: $color.value
    });
    const ctx = $canvas.getContext('2d');
    $canvas.width = result.width;
    $canvas.height = result.height;
    $canvas.style.width = result.width + 'px';
    $canvas.style.height = result.height + 'px';
    ctx.drawImage(result, 0, 0);
    endPerf();
};
const useImage = url => {
    const image = new Image();
    image.onload = () => {
        targetImage = image;
        update();
    };
    image.src = url;
};
useImage(imageUrl);
$select.addEventListener('input', update);
$thickness.addEventListener('input', update);
$color.addEventListener('input', update);
$file.addEventListener('change', (e) => {
    const file = e.target.files[0];
    useImage(URL.createObjectURL(file));
});
