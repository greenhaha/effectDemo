export default {
    context: '2d',
    create(ctx, image) {
        return (options) => {

            ctx.save();
            for (let i = 0; i < 360; i++) {
                ctx.drawImage(image, 20, 20);
            }

            ctx.globalCompositeOperation = 'source-in';
            // 设置canvas图形混合模式  详细说明 https://www.canvasapi.cn/CanvasRenderingContext2D/globalCompositeOperation#&introduction
            ctx.fillStyle = options.color;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.restore();
            ctx.drawImage(image, options.thickness, options.thickness);
        };
    }
};
