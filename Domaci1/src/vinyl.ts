export class Vinyl
{
    private id: number;
    private name: string;
    private performer:string;
    private price: number;
    private img: string;
    private miniCont:HTMLElement;

    constructor(id:number,name:string,performer:string,price:number,img:string)
    {
        this.id=id;
        this.name=name;
        this.performer=performer;
        this.price=price;
        this.img=img;
        this.miniCont=null;
    }

    drawVinyl(host:HTMLElement)
    {
        this.miniCont=document.createElement("div");
        this.miniCont.classList.add("vinyl");
        host.appendChild(this.miniCont);

        const div1=document.createElement("div");
        div1.classList.add("divImg");
        this.miniCont.appendChild(div1);

        const image=document.createElement("img");
        image.classList.add("image");
        image.src=this.img;
        image.alt=this.name+" by: "+this.performer;
        div1.appendChild(image);

        const div2=document.createElement("div");
        div2.classList.add("divInfo");
        this.miniCont.appendChild(div2);

        const vinylName=document.createElement("p");
        vinylName.innerHTML=this.name;
        vinylName.classList.add("name");
        div2.appendChild(vinylName);

        const vinylPerf=document.createElement("p");
        vinylPerf.innerHTML=this.performer;
        vinylPerf.classList.add("performer");
        div2.appendChild(vinylPerf);

        const cost=document.createElement("p");
        cost.innerHTML=this.price + "€";
        cost.classList.add("price");
        div2.appendChild(cost);
    }

    getPrice():number{
        return this.price;
    }
}