function drawSpringMassAnimation(height) {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var springLength = 100; // длина пружины (пиксели)
    var massSize = 20; // размер массы (пиксели)
    var springAnchorX = canvas.width / 2;
    var springAnchorY = 100;
    var massY = springAnchorY + springLength + height / 10; // начальная позиция массы
    var initialVelocity = 0; // начальная скорость тела
    var time = 0; // начальное время

    var animate = function(timestamp) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        
        ctx.beginPath();
        ctx.moveTo(springAnchorX, springAnchorY);
        ctx.lineTo(springAnchorX, massY);
        ctx.stroke();

       
        ctx.beginPath();
        ctx.arc(springAnchorX, massY, massSize / 2, 0, Math.PI * 2);
        ctx.fillStyle = '#000';
        ctx.fill();

        
        var displacement = 0.5 * 9.8 * Math.pow(time, 2); // формула для вертикального падения
        massY = springAnchorY + springLength + height / 10 - displacement;
        var velocity = initialVelocity + 9.8 * time;

        
        time += 0.02; // шаг анимации

        
        if (massY >= springAnchorY + springLength + massSize / 2) {
            requestAnimationFrame(animate);
        }
    };

    animate(0);
}
