export const HorizontalLinePlugin = {
	afterDatasetsDraw(chartInstance, easing) {
		const scaleY = chartInstance.scales['y-axis-0'];
		const scaleX = chartInstance.scales['x-axis-0'];
		const context = chartInstance.chart.ctx;
		
		const lengthPercent = chartInstance.config.data.lengthPercent || 1;

		const length = lengthPercent * (scaleX.right - scaleX.left);
		const middle = (scaleY.bottom + scaleY.top)/2;

		const lineColor = chartInstance.config.data.lineColor || '#fff';
		const arrowColor = chartInstance.config.data.arrowColor || '#fff';
		const arrowBorderColor = chartInstance.config.data.arrowBorderColor || '#fff';

		context.beginPath();
		context.strokeStyle = lineColor;
		context.lineWidth = chartInstance.config.data.lineWidth || 4;
		context.setLineDash(chartInstance.config.data.lineDash || [15]);
		context.moveTo(scaleX.left, middle);
		context.lineTo(scaleX.left + easing*length, middle);
		context.stroke();

		context.setLineDash([]);

		const arrowLength = chartInstance.config.data.arrowLength || 20;
		const arrowWidth = chartInstance.config.data.arrowWidth || 10;
		const arrowLineWidth = chartInstance.config.data.arrowLineWidth || 2;

		this.drawArrowhead(context, {
			x: scaleX.left + easing*length - arrowLength,
			y: middle			
		}, {
			x: scaleX.left + easing*length,
			y: middle
		}, arrowWidth, arrowLineWidth, arrowColor, arrowBorderColor);
	},
	drawArrowhead(context, from, to, radius, arrowLineWidth, arrowColor, arrowBorderColor) {			
 		context.beginPath();
		context.strokeStyle = arrowBorderColor;
		context.lineWidth = arrowLineWidth;
	
		context.moveTo(to.x, to.y);		
		context.lineTo(from.x, from.y - radius);
		context.lineTo(from.x + radius/2, from.y);
		context.lineTo(from.x, from.y + radius);

 		context.closePath();
		context.stroke();

		context.beginPath();
		context.fillStyle = arrowColor;
	
		context.moveTo(from.x + radius/2, from.y);		
		context.lineTo(from.x, from.y - radius);
		context.lineTo(to.x, to.y);
		context.lineTo(from.x, from.y + radius);
		
		context.closePath();
		context.fill();			
	}	
};
