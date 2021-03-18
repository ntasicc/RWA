import {Vinyl} from "./vinyl";

export class Shop
{
    private arr: Vinyl[];
    private shopName: string;
    private container: HTMLElement;

    constructor(name:string)
    {
         this.shopName=name;
         this.container=null;
         this.arr=[];
    }

    addVinyl(vin:Vinyl):number{
        return this.arr.push(vin);
    }

    getElements(): Vinyl[] {
        return this.arr;
    }

    draw(host: HTMLElement) : boolean
    {
        if (host === null)
            throw new Error("Container value is not set or is null.");

        const sideDiv= document.createElement("div");
        sideDiv.classList.add("searchDiv");
        host.appendChild(sideDiv);
        const mainDiv= document.createElement("div");
        mainDiv.classList.add("searchDiv");
        host.appendChild(mainDiv);
        const title= document.createElement("h1");
        title.classList.add("shopTitle");
        title.innerHTML=this.shopName;
        mainDiv.appendChild(title);

        this.container=document.createElement("div");
        this.container.classList.add("vinArr");
        mainDiv.appendChild(this.container);

        this.arr.forEach(el=>
            {
                el.drawVinyl(this.container);
            });
        const searchDiv= document.createElement("div");
        searchDiv.classList.add("searchDiv");
        sideDiv.appendChild(searchDiv);

            let label= document.createElement("label");
            label.innerHTML="Max price";
            searchDiv.appendChild(label);
    
            let input=document.createElement("input");
            input.type="number";
            input.classList.add("maxPrice");
            input.placeholder="Enter..";
            searchDiv.appendChild(input);

            const buttonDiv= document.createElement("div");
            buttonDiv.classList.add("buttonDiv");
            searchDiv.appendChild(buttonDiv);

    
            const searchBtt=document.createElement("button");
            searchBtt.innerHTML="Search";
            searchBtt.classList.add("searchBtt");
            searchBtt.onclick=ev =>{
                const inp=document.querySelector("input").value;
                if(inp=="")
                    alert("Enter price range!");
                else{
                    this.container.innerHTML="";
                    let i: number=0;
                    this.arr.forEach(el=>
                        {
                            if(el.getPrice() <= Number(inp))
                            {
                                el.drawVinyl(this.container);
                                i++;
                            }
                        });
                        if(i==0)
                        {
                            alert("No records were found");
                            window.location.reload();
                        }
                        else
                        {
                            refreshhBtt.hidden=false;
                        }
                }
            }
            buttonDiv.appendChild(searchBtt);
            const refreshhBtt=document.createElement("button");
            refreshhBtt.innerHTML="&#8634";
            refreshhBtt.classList.add("refreshBtt");
            refreshhBtt.hidden=true;
            refreshhBtt.onclick=ev =>{
                window.location.reload();
            }
            buttonDiv.appendChild(refreshhBtt);







        return true;
    }
}