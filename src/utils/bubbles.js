export const bubbles = (element) => {
  return new Promise((resolve, reject) => {
    if (typeof window !== "undefined") {
      // Canvas Init
      var c = document.getElementById(element);
      if (c) {
        var ctx = c.getContext("2d"),
          width = window.innerWidth,
          height = window.innerHeight,
          particles = 60,
          minRadius = 1,
          maxRadius = 5,
          speed = 0.01,
          x = width / particles;

        // Bubbles
        var Bubbles = [];

        for (var i = 0; i < particles; i++) {
          Bubbles.push({
            x: i * x,
            y: height * Math.random(),
            r: minRadius + Math.random() * (maxRadius - minRadius),
            speed: 1 * Math.random(),
          });
        }
        function bubble() {
          c.width = width;
          c.height = height;
          for (i = 0; i < Bubbles.length; i++) {
            var b = Bubbles[i];
            // console.log(i, b);
            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);

            b.alpha = 0.5 * (b.y / height);
            b.speed += speed;

            ctx.strokeStyle = "rgba(255, 255, 255, .5)";
            ctx.stroke();
            ctx.fillStyle = "rgba(255, 255, 255," + b.alpha + ")";
            ctx.fill();
            b.y -= b.speed;
            if (b.y < 0) {
              b.y = height;
              b.speed = Math.random() * 1;
            }
          }
        }

        // Draw
        function draw() {
          bubble();
          const requestId = window.requestAnimationFrame(draw);
          return requestId;
        }

        // Resize Canvas
        function resizeCanvas() {
          (width = window.innerWidth), (height = window.innerHeight);
          c.width = width;
          c.height = height;
          return draw();
        }
        window.addEventListener("resize", resizeCanvas, false);
        resolve(resizeCanvas());
      }
    }
  });
};
