class Stone{
	constructor(x,y,w,h)
	{

		var options={
			'restitution':0.8,
			'friction': 0.9,
			'density': 12			 
 		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.body=Bodies.rectangle(this.x, this.y,this.w,this.h, options)
		World.add(world, this.body);

	}
	display()
	{
			var Stonepos=this.body.position;		
			push()
			translate(Stonepos.x, Stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);     
			stroke("red"); 
			fill("red"); 
			//draw the ellipse here to display the rubber ball 
			rect(0,0,this.w,this.h)
			pop()
	}

}